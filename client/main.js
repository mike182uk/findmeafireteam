Meteor.startup(function () {
  Meteor.subscribe('listings', function () {
    // once the listings have loaded, update the listings last retrieved timestamp to be now
    Listings.touchLastRetrieved();
  });

  Meteor.subscribe('chats', User.id());
});

/**
 * Track chat notifcations
 */
Tracker.autorun(function () {
  var chatsNewMessages = {
    total: 0,
    chats: {}
  }

  var chatLastSeen = Session.get('chats_last_seen');

  _.each(Chats.find().fetch(), function (chat) {
    var sender = _.without(chat.participants, User.id())[0];
    var lastSeenTimestamp = chatLastSeen[sender];

    // if there is no saved timestamp for this chat, set the last seen timestamp
    // to be a date in the past we can see notifications for this chat
    if ( ! lastSeenTimestamp) {
      var lastSeenTimestamp = (new Date(0)).getTime();
    }

    // if there is currently a chat active, and it is the chat that is being anaylzed,
    // skip anything to do with working out what notifications to show. whilst the chat
    // modal is active we dont want to show notifications for this chat (as we are already
    // in the chat)
    var activeChat = Session.get('active_chat');
    if (activeChat) {
      if (activeChat.recipient_id == sender) {
        return;
      }
    }

    // work out how many new messages there are in a chat since the chat was last seen
    var newMessages = _.filter(chat.messages, function (message) {
      return message.sender == sender && message.created_at > lastSeenTimestamp;
    });

    chatsNewMessages.chats[sender] = newMessages.length;
    chatsNewMessages.total += newMessages.length;
  });

  Session.setTemp('chats_new_messages', chatsNewMessages);
});

/**
 * Initialise session vars
 */
Session.setDefaultTemp('filter_criteria_modified', false);
Session.setDefaultTemp('filter_params', {});
Session.setDefaultTemp('active_chat', null);
Session.setDefaultPersistent('chats_last_seen', {});

/**
 * Initialise the user
 */
User.init();

/**
 * Make the core data object available in templates
 */
Template.registerHelper('getCoreData', function () {
  return CoreData;
});

/**
 * Get fireteam sizes options for forms
 */
Template.registerHelper('getFireteamSizeOptions', function () {
  var selectedActivityKey = Session.get(this.formId + '_selected_activity');

  // on the very first page load, the session variable above will not be set so
  // we can not get the options for the selected activity.
  if (typeof selectedActivityKey == 'undefined') {
    return;
  }

  // if the select activity is 'any' then we dont need to do anything
  if (selectedActivityKey == 'any') {
    return;
  }

  var maxFireteamSize = Helpers.getMaxFireteamSizeForActivity(selectedActivityKey);
  var options = [];

  for (var i = 1; i <= maxFireteamSize - 1; i++) {
    var label = i;

    // if there is an option label filter function then apply it
    // to the label
    if (typeof this.optionLabelFilter != '') {
      label = this.optionLabelFilter(i, label);
    }

    options.push({ key: i, label: label });
  }

  return options;
});

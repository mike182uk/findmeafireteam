Template.chats.helpers({
  hasChats: function () {
    return Chats.find().count();
  },
  getChats: function () {
    return Chats.find();
  },
  getRecipient: function () {
    var user = Session.get('user');

    return _.without(this.participants, user.id)[0];
  },
  hasNewMessages: function () {
    return Session.get('new_messages') > 0;
  },
  newMessagesCount: function () {
    return Session.get('new_messages');
  },
  chatHasNewMessages: function (recipient) {
    return Session.get('chat_' + recipient + '_new_messages') > 0;
  },
  chatNewMessagesCount: function (recipient) {
    return Session.get('chat_' + recipient + '_new_messages');
  }
});

Template.chats.events({
  'click a[data-action=send-message]': function (e) {
    e.preventDefault();

    var $el = $(e.target);
    var recipientId = $el.data('user-id');
    var chatModal = $('#chat');

    // set temp sesison vars
    Session.setTemp('active_chat', {
      recipient: {
        id: recipientId
      }
    });

    // show chat modal
    chatModal.modal('toggle');
  }
});

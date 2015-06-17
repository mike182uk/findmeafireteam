Template.listing.helpers({
  platform: function () {
    var platform = _.findWhere(CoreData.platforms, { key: this.platform });

    return platform.label;
  },
  region: function () {
    if (this.region == 'any') {
      return 'Anywhere';
    }

    var region = _.findWhere(CoreData.regions, { key: this.region });

    return region.label;
  },
  class: function () {
    var klass = _.findWhere(CoreData.classes, { key: this.class });

    return klass.label;
  },
  activity: function () {
    var activity = Helpers.getActivityByKey(this.activity);

    return activity.label;
  },
  profileUrl: function () {
    var profileUrl;

    if (this.platform.match(/xbox/)) {
      profileUrl = 'https://account.xbox.com/en-US/Profile?gamerTag=' + this.gamertag;
    } else {
      profileUrl = 'http://psnprofiles.com/' + this.gamertag;
    }

    return profileUrl;
  },
  createdAt: function () {
    return moment(this.created_at).fromNow();
  },
  isFireteamListing: function () {
    return this.type == 'fireteam';
  },
  requiresMoreThanOneMember: function() {
    return this.required_fireteam_members > 1;
  },
  isMyListing: function () {
    var userListing = User.listing();

    if (userListing) {
      return this._id == userListing._id;
    }

    return false;
  }
});

Template.listing.events({
  'click button[data-action=remove-listing]': function (e) {
    // trigger a click on the main remove listing button so we
    // dont have to repeat the logic here
    $('#actions').find('button[data-action=remove-listing]').trigger('click');
  },
  'click button[data-action=send-message]': function (e) {
    var $el = $(e.target);
    var recipientId = $el.data('user-id');
    var chatModal = $('#chat');

    // set temp sesison vars
    Session.setTemp('active_chat', {
      recipient_id: recipientId
    });

    // show chat modal
    chatModal.modal('toggle');
  }
});

Template.listing.rendered = function () {
  // init tooltips
  this.$('[data-toggle=tooltip]').tooltip();
  // init popovers
  this.$('.gamertag').popover({
    html: true,
    content: function () {
      var interactOptions = $(this).parents('td').find('.interact');
      var content = $(interactOptions.prop('outerHTML'));

      // content is display non by default, make sure it shows in the popover
      content.css('display', 'block');

      return content;
    },
    trigger: 'focus',
    delay: {
      'hide': 200
    }
  });
}

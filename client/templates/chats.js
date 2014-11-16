Template.chats.helpers({
  hasChats: function () {
    return Chats.find().count();
  },
  getChats: function () {
    return Chats.find();
  },
  getRecipient: function () {
    var participants = this.participants;
    var user = Session.get('user');

    return _.filter(participants, function (participant) {
      return participant !== user.id;
    })[0];
  }
});

Template.chats.events({
  'click a[data-action=send-message]': function (e) {
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

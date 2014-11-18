Template.chats.helpers({
  chats: function () {
    return Chats.find();
  },
  recipient: function () {
    return _.without(this.participants, User.id())[0];
  },
  newMessagesCount: function () {
    var chatStateNewMessages = Session.get('chats_new_messages');

    return chatStateNewMessages.total;
  },
  chatNewMessagesCount: function (recipient) {
    var chatStateNewMessages = Session.get('chats_new_messages');

    return chatStateNewMessages.chats[recipient];
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
      recipient_id: recipientId
    });

    // show chat modal
    chatModal.modal('toggle');
  }
});

Template.chat.helpers({
  name: function () {
    var activeChat = Session.get('active_chat');

    if (! activeChat) return '';

    return activeChat.recipient.id;
  },
  messages: function () {
    var activeChat = Session.get('active_chat');
    var user = Session.get('user');

    if (! activeChat) return [];

    var chat = Helpers.findChatByParticipants([user.id, activeChat.recipient.id]);

    if (! chat) return [];

    return chat.messages;
  },
  messageClass: function() {
    var user = Session.get('user');

    return this.sender == user.id ? 'message-sender' : 'message-recipient';
  }
});

Template.chat.events({
  'hidden.bs.modal #chat': function (e) {
    // reset the current active chat
    Session.setTemp('active_chat', null);
  },
  'submit form': function (e) {
    e.preventDefault();

    var $el = $(e.target);

    var $message = $el.find(':input[name=message]');
    var message = $message.val();

    var activeChat = Session.get('active_chat');
    var user = Session.get('user');
    var chatParticipants = [user.id, activeChat.recipient.id];
    var chat = Helpers.findChatByParticipants(chatParticipants);

    if (! chat) {
      var chatData = {};
      chatData['participants'] = chatParticipants;
      chatData['messages'] = [];
    }

    // set message data
    var messageData = {};
    messageData['sender'] = user.id;
    messageData['created_at'] = (new Date).getTime();
    messageData['content'] = message;

    try {
      if (! chat) {
        chatData.messages.push(messageData);

        Chats.insert(chatData);
      } else {
        chat.messages.push(messageData);

        Chats.update({ _id: chat._id }, {
          $set: {
            messages: chat.messages
          }
        });
      }
    } catch (e) {

    }

    // clear the input and unfocus
    $message.val('');
  },
  'keypress :input[name=message]': function (e) {
    var $el = $(e.target);
    var form = $el.parents('form');
    var code = (e.keyCode ? e.keyCode : e.which);

    // if enter key pressed submit form
    if(code == 13) {
      e.preventDefault();

      form.submit();
    }
  }
});

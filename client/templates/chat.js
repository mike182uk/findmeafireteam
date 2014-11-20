Template.chat.helpers({
  recipientAlias: function () {
    var activeChat = Session.get('active_chat');

    if (! activeChat) {
      return '';
    }

    var alias = Helpers.getChatRecipientAlias(activeChat.recipient_id);

    return alias ? alias : activeChat.recipient_id;
  },
  messages: function () {
    var activeChat = Session.get('active_chat');

    if (! activeChat) {
      return [];
    }

    var chat = Chats.findChatByParticipants([User.id(), activeChat.recipient_id]);

    if (! chat) {
      return [];
    }

    return chat.messages;
  },
  messageClass: function() {
    return this.sender == User.id() ? 'message-from-sender' : 'message-from-recipient';
  }
});

Template.chat.events({
  'show.bs.modal #chat': function (e) {
    var activeChat = Session.get('active_chat');

    // when the chat modal opens, set the chat last seen timestamp to hide any notification
    // badges that are already present
    var chatsLastSeen = Session.get('chats_last_seen');
    chatsLastSeen[activeChat.recipient_id] = (new Date).getTime();
    Session.setPersistent('chats_last_seen', chatsLastSeen);
  },
  'hidden.bs.modal #chat': function (e) {
    var activeChat = Session.get('active_chat');

    // when the chat modal closes, set the chat last seen timestamp to only show new
    // message notifications for messages sent after the chat modal has closed
    var chatsLastSeen = Session.get('chats_last_seen');
    chatsLastSeen[activeChat.recipient_id] = (new Date).getTime();
    Session.setPersistent('chats_last_seen', chatsLastSeen);

    // reset the current active chat
    Session.setTemp('active_chat', null);
  },
  'submit form': function (e) {
    e.preventDefault();

    var $el = $(e.target);
    var $message = $el.find(':input[name=message]');
    var message = $message.val();

    var activeChat = Session.get('active_chat');
    var chatParticipants = [User.id(), activeChat.recipient_id];
    var chat = Chats.findChatByParticipants(chatParticipants);

    // set chat data
    if (! chat) {
      var chatData = {};
      chatData['participants'] = chatParticipants;
      chatData['messages'] = [];
    }

    // set message data
    var messageData = {};
    messageData['sender'] = User.id();
    messageData['created_at'] = (new Date).getTime();
    messageData['content'] = message;

    try {
      // if a chat does not exist, create it
      if (! chat) {
        chatData.messages.push(messageData);

        Chats.insert(chatData);
      // if a chat does exist, just update the the messages
      } else {
        chat.messages.push(messageData);

        Chats.update({ _id: chat._id }, {
          $set: {
            messages: chat.messages
          }
        });
      }
    } catch (e) {
      // @todo do something with this error
    }

    // clear the input
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

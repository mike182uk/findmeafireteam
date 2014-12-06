SyncedCron.add({
  name: 'Remove listings older than 1 hour',
  schedule: function(parser) {
    return parser.text('every 5 minutes');
  },
  job: function() {
    var timestamp = (moment().subtract(1, 'h').toDate()).getTime();
    var oldListings = Listings.find({
      created_at: {
        $lt: timestamp
      }
    }).fetch();

    _.each(oldListings, function (listing) {
      try {
        Listings.remove(listing._id);
      } catch (e) {
        // @todo do something with this error
      }
    });
  }
});

SyncedCron.add({
  name: 'Remove messages / chats older than 1 hour',
  schedule: function(parser) {
    return parser.text('every 5 minutes');
  },
  job: function() {
    var timestamp = (moment().subtract(1, 'h').toDate()).getTime();
    var chats = Chats.find().fetch();

    _.each(chats, function (chat) {
      var messages = _.filter(chat.messages, function (message) {
        return message.created_at >= timestamp;
      });

      try {
        if (messages.length) {
          Chats.update({ _id: chat._id }, {
            $set: {
              messages: messages
            }
          });
        } else {
          // remove chat if there are no messages in it
          Chats.remove(chat._id);
        }
      } catch (e) {
        // @todo do something with this error
      }
    });
  }
});

SyncedCron.start();

Meteor.publish('listings', function() {
  return Listings.find();
});

Meteor.publish('chats', function(userId) {
  // only chats that the user has participated in
  return Chats.find({
    participants: { $in: [userId] }
  });
});

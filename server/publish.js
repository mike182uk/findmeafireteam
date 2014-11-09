Meteor.publish('listings', function() {
  return Listings.find();
});

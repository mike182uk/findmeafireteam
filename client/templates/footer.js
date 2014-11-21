Template.footer.helpers({
  year: function () {
    return (new Date).getFullYear();
  }
})

Template.footer.events({
  'click [data-action=delete]': function () {
    var deleteEverything = confirm('Are you sure you want to delete all of your data? This will delete any active listings & messages as well as reset your unique user id?');

    if (deleteEverything) {
      // delete listing
      var listing = User.listing();
      if (listing) {
        try {
          Listings.remove({ _id: listing._id });
        } catch (e) {
          // @todo do something with this error
        }
      }

      // delete chats
      _.each(Chats.find().fetch(), function (chat) {
        try {
          Chats.remove({ _id: chat._id });
        } catch (e) {
          // @todo do something with this error
        }
      });

      // destroy user
      User.destroy();

      // re-initialise the session
      Session.setTemp('filter_criteria_modified', false);
      Session.setTemp('filter_params', {});
      Session.setTemp('active_chat', null);
      Session.setTemp('chats_new_messages', {});
      Session.setPersistent('chats_last_seen', {});

      // re-initialise the user
      User.init();

      alert('Your data was successfully deleted');
    }
  }
});

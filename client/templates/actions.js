Template.actions.helpers({
  canCreateNewListing: function () {
    return ! User.listing();
  }
});

Template.actions.events({
  'click [data-action=remove-listing]': function () {
    var removeListing = confirm('Are you sure you want to remove your listing?');

    if (! removeListing) {
      return;
    }

    // remove listing
    var userListing = User.listing();
    Listings.remove(userListing._id);
  }
});

Template.actions.helpers({
  canCreateNewListing: function () {
    return Session.get('active_listing_id') == null;
  }
});

Template.actions.events({
  'click [data-action=remove-listing]': function () {
    var removeListing = confirm('Are you sure you want to remove your listing?');

    if (! removeListing) {
      return;
    }

    var listingId = Session.get('active_listing_id');

    Session.setPersistent('active_listing_id', null);

    Listings.remove(listingId);
  }
});

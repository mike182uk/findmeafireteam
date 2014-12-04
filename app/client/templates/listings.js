Template.listings.helpers({
  listings: function () {
    var filterParams = Session.get('filter_params');
    var parsedFilterParams = Helpers.parseFilterParams(filterParams);

    // only show listings since last retrieval, we will buffer up new listtings
    parsedFilterParams['created_at'] = { $lt: Listings.lastRetrieved() }

    return Listings.find(filterParams, {
      sort: {created_at: -1}
    });
  },
  listingsAreFiltered: function () {
    var filterParams = Session.get('filter_params');

    return Object.keys(filterParams).length > 0;
  },
  newListingsAvailable: function () {
    var filterParams = Session.get('filter_params');
    var parsedFilterParams = Helpers.parseFilterParams(filterParams);

    parsedFilterParams['created_at'] = { $gt: Listings.lastRetrieved() };

    return Listings.find(parsedFilterParams).count();
  },
  newListingsKeyword: function (listingsCount) {
    return listingsCount > 1 ? 'listings' : 'listing';
  },
  listingsLoaded: function () {
    return Listings.lastRetrieved();
  }
});

Template.listings.events({
  'click #show-new-listings': function (e) {
    // trigger any new listings to show
    Listings.touchLastRetrieved();

    // track event
    GAnalytics.event('listings','show new listings');
  }
})

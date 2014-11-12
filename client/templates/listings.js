Template.listings.helpers({
  listings: function () {
    var filterParams = Session.get('filter_params');
    var parsedFilterParams = Helpers.parseFilterParams(filterParams);

    // only show data since last retrieval, we will buffer up new data
    parsedFilterParams['created_at'] = { $lt: Session.get('data_last_retrieved_timestamp') }

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

    parsedFilterParams['created_at'] = { $gt: Session.get('data_last_retrieved_timestamp') };

    return Listings.find(parsedFilterParams).count();
  },
  newListingsKeyword: function (listingsCount) {
    return listingsCount > 1 ? 'listings' : 'listing';
  }
});

Template.listings.events({
  'click #show-new-listings': function (e) {
    Helpers.touchDataLastRetrieved();
  }
})

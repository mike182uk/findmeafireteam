Template.listings.helpers({
  listings: function () {
    var filterParams = Session.get('filter_params');

    // delete any options that are 'any' as we dont need to filter on these
    _.each(filterParams, function (value, key) {
      if (value == 'any') {
        delete filterParams[key];
      }
    });

    // parse params that should be integers
    if (filterParams['fireteam_size']) {
      filterParams['fireteam_size'] = parseInt(filterParams['fireteam_size']);
    }

    if (filterParams['has_mic']) {
      filterParams['has_mic'] = parseInt(filterParams['has_mic']);
    }

    if (filterParams['has_exp']) {
      filterParams['has_exp'] = parseInt(filterParams['has_exp']);
    }

    // when filtering by level make sure we query all possible level values
    // that can be associated with a listing
    if (filterParams['level']) {
      var levels;

      _.each(Helpers.getProgressionLevelFilterOptions(), function (option) {
        if (option.key == filterParams['level']) {
          levels = option.levels;
        }
      });

      filterParams['level'] = { $in: levels }
    }

    return Listings.find(filterParams, {
      sort: {created_at: -1}
    });
  },
  listingsAreFiltered: function () {
    var filterParams = Session.get('filter_params');

    return Object.keys(filterParams).length > 0;
  }
});

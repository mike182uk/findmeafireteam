Template.joinFireteam.events({
  'submit form': function (e) {
    e.preventDefault();

    var $el = $(e.target);
    var $modal = $el.parents('.modal');

    var listingData = {};
    _.each($el.serializeArray(), function (formField) {
      listingData[formField.name] = formField.value;
    });

    listingData['level'] = parseInt(listingData['level']);

    if (listingData['has_mic']) {
      listingData['has_mic'] = parseInt(listingData['has_mic']);
    }

    if (listingData['has_exp']) {
      listingData['has_exp'] = parseInt(listingData['has_exp']);
    }

    listingData['type'] = 'guardian';
    listingData['created_at'] = (new Date).getTime();

    try {
      var listingId = Listings.insert(listingData);

      // save listing id to the session
      Session.setPersistent('active_listing_id', listingId);

      // hide modal
      $modal.modal('hide');

      // load in any new data
      Helpers.touchDataLastRetrieved();
    } catch (e) {

    }
  }
});

Template.joinFireteam.helpers({
  getProgressionLevelOptions: function () {
    var options = [];

    for (var i = 1; i <= CoreData.maxProgressionLevel; i++) {
      options.push({ key: i, label: i });
    }

    return options;
  }
})

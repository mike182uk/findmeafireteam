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
    listingData['user_id'] = User.id();

    try {
      // create new listing
      Listings.insert(listingData);

      // hide modal
      $modal.modal('hide');

      // trigger any new listings to show
      Listings.touchLastRetrieved();
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

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
    listingData['created_at'] = moment.utc().valueOf();
    listingData['user_id'] = User.id();

    try {
      // create new listing
      Listings.insert(listingData);

      // hide modal
      $modal.modal('hide');

      // trigger any new listings to show
      Listings.touchLastRetrieved();

      // track listing values used
      var listingValues = '';
      _.each(listingData, function(v, k) {
        switch (k) {
          case 'gamertag':
          case 'created_at':
          case 'user_id':
          case 'comment':
            return;
          default:
            listingValues += k + ': ' + v + ', ';
            GAnalytics.event('manage listing','create listing with ' + k, 'create listing with ' + k + ': ' + v);
        }
      });

      GAnalytics.event('manage listing','create listing', listingValues.replace(/[,\s]+$/, ''));
    } catch (e) {
      // @todo do something with this error
    }
  }
});

Template.joinFireteam.helpers({
  getLightLevelOptions: function () {
    var options = [];

    for (var i = CoreData.maxLightLevel; i !== CoreData.minLightLevel; i--) {
      options.push({ key: i, label: i });
    }

    return options;
  }
})

Template.joinFireteam.rendered = function () {
  // form validation
  this.$('form').validate({
    errorClass: 'control-label',
    highlight: function (element) {
      $(element).parent('.form-group').addClass('has-error')
    },
    success: function (element) {
      $(element).parent('.form-group').removeClass('has-error')
      element.remove();
    }
  });
};

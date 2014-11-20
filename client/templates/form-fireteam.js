Template.formFireteam.events({
  'submit form': function (e) {
    e.preventDefault();

    var $el = $(e.target);
    var $modal = $el.parents('.modal');

    var listingData = {};
    _.each($el.serializeArray(), function (formField) {
      listingData[formField.name] = formField.value;
    });

    if (listingData['has_mic']) {
      listingData['has_mic'] = parseInt(listingData['has_mic']);
    }

    if (listingData['has_exp']) {
      listingData['has_exp'] = parseInt(listingData['has_exp']);
    }

    listingData['type'] = 'fireteam';
    listingData['created_at'] = (new Date).getTime();
    listingData['user_id'] = User.id();
    listingData['required_fireteam_members'] = parseInt(listingData['required_fireteam_members']);

    var maxFireteamSize = Helpers.getMaxFireteamSizeForActivity(listingData['activity']);
    listingData['fireteam_size'] = maxFireteamSize - listingData['required_fireteam_members'];

    try {
      // create new listing
      Listings.insert(listingData);

      // hide modal
      $modal.modal('hide');

      // trigger any new listings to show
      Listings.touchLastRetrieved();
    } catch (e) {
      // @todo do something with this error
    }
  },
  'change select[name=activity]': function (e) {
    var $el = $(e.target);
    var selectedOption = $el.val();
    var formId = $el.parents('form').attr('id');

    Session.setTemp(formId + '_selected_activity', selectedOption);
  }
});

Template.formFireteam.helpers({
  getRequiredFireteamMembersOptionLabelFilter : function () {
    return function (key, label) {
      return key + ' More';
    }
  }
});

Template.formFireteam.rendered = function () {
  // trigger a change on the activity select so that the activity is
  // saved to the session and the fireteam size for the selected activity
  // is loaded
  this.$('form').find('select[name=activity]').trigger('change');
};

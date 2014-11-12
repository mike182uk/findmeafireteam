Template.filterListings.events({
  'change select[name=activity]': function (e) {
    var $el = $(e.target);
    var selectedOption = $el.val();
    var formId = $el.parents('form').attr('id');

    Session.setTemp(formId + '_selected_activity', selectedOption);
  },
  'change select[name=type]': function (e) {
    var $el = $(e.target);
    var selectedOption = $el.val();
    var formId = $el.parents('form').attr('id');

    Session.setTemp('selected_listing_type', selectedOption);
  },
  'reset form': function (e) {
    var $el = $(e.target);

    // wait a short duration until reset has happenend otherwise
    // this does not work as expected...
    setTimeout(function () {
      // trigger a change on the activity and type fields so that
      // dependent fields can load the correct data
      $el.find('select[name=activity]').trigger('change');
      $el.find('select[name=type]').trigger('change');

      // reset criteria notification on listings form
      Session.setTemp('filter_criteria_modified', false);

      // load in any new data
      Helpers.touchDataLastRetrieved();
    }, 100);

    // remove any stored filter params from the session
    Session.setTemp('filter_params', {});
  },
  'submit form': function (e) {
    e.preventDefault();

    var $el = $(e.target);

    var filterParams = {};
    _.each($el.serializeArray(), function (field) {
      filterParams[field.name] = field.value;
    })

    Session.setTemp('filter_params', filterParams);

    // reset criteria notification on listings form
    Session.setTemp('filter_criteria_modified', false);

    // load in any new data
    Helpers.touchDataLastRetrieved();
  },
  'change :input': function () {
    Session.setTemp('filter_criteria_modified', true);
  }
});

Template.filterListings.helpers({
  getProgressionLevelOptions: function () {
    return Helpers.getProgressionLevelFilterOptions();
  },
  getFireteamSizeOptionLabelFilter : function () {
    return function (key, label) {
      return key + ' Guardian' + (key > 1 ? 's' : '');
    }
  },
  displayJoinfireteamAdvancedOptions: function () {
    return Session.get('selected_listing_type') == 'gaurdian';
  },
  displayFormfireteamAdvancedOptions: function () {
    return Session.get('selected_listing_type') == 'fireteam';
  },
  filterCriteriaModified: function () {
    return Session.get('filter_criteria_modified');
  },
  filteringDisabled: function () {
    return ! Session.get('data_last_retrieved_timestamp') ? 'disabled' : '';
  }
});

Template.filterListings.rendered = function () {
  // trigger a change on the activity select so that the activity is
  // saved to the session and the fireteam size for the selected activity
  // is loaded
  this.$('form').find('select[name=activity]').trigger('change');
  // trigger a change on the listing type select so that the listing type
  // is saved to the session
  this.$('form').find('select[name=type]').trigger('change');

  Session.setTemp('filter_criteria_modified', false);
};

Meteor.startup(function () {
  Meteor.subscribe('listings', function () {
    Helpers.touchDataLastRetrieved();
  });
});

Session.setDefaultPersistent('active_listing_id', null);
Session.setDefaultTemp('filter_criteria_modified', false);
Session.setDefaultTemp('filter_params', {});

Template.registerHelper('getCoreData', function () {
  return CoreData;
});

Template.registerHelper('getFireteamSizeOptions', function () {
  var selectedActivityKey = Session.get(this.formId + '_selected_activity');

  // on the very first page load, the session variable will not be set so
  // we can not get the options for the selected activity.
  if (typeof selectedActivityKey == 'undefined') {
    return;
  }

  // if the select activity is any then we dont need to do anything
  if (selectedActivityKey == 'any') {
    return;
  }

  var maxFireteamSize = Helpers.getMaxFireteamSizeForActivity(selectedActivityKey);
  var options = [];

  for (var i = 1; i <= maxFireteamSize - 1; i++) {
    var label = i;

    if (typeof this.optionLabelFilter != '') {
      label = this.optionLabelFilter(i, label);
    }

    options.push({ key: i, label: label });
  }

  return options;
});

Helpers = {
  getActivityByKey: function (activityKey) {
    var activity;

    _.each(CoreData.activities, function (a) {
      if (a.key == activityKey) {
        activity = a;
      }

      if (a.subActivities) {
        _.each(a.subActivities, function (sa) {
          if (sa.key == activityKey) {
            activity = sa;
            // the sub activity will not have a type as the type is stored
            // on the parent.
            activity.type = a.type;
          }
        });
      }
    });

    return activity;
  },
  getMaxFireteamSizeForActivity: function (activityKey) {
    var activity = this.getActivityByKey(activityKey);

    return CoreData.fireteamSizes[activity.type];
  },
  getProgressionLevelFilterOptions: function () {
    return [
      { key: '<10', label: '< 10', levels: _.range(1, 10) },
      { key: '10-20', label: '10 - 20', levels: _.range(10, 20) },
      { key: '20-25', label: '20 - 25', levels: _.range(20, 25) },
      { key: '25-30', label: '25 - 30', levels: _.range(25, 30) }
    ];
  },
  getActivityKeys: function () {
    var keys = [];

    _.each(CoreData.activities, function (activity) {
      if (activity.subActivities) {
        _.each(activity.subActivities, function (subActivity) {
          keys.push(subActivity.key);
        });
      } else {
        keys.push(activity.key);
      }
    });

    return keys;
  }
};

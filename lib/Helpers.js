Helpers = {};

/**
 * Get an activity by its key
 *
 * @param {string} activityKey
 *
 * @return {Object}
 */
Helpers.getActivityByKey = function (activityKey) {
  var activity;

  _.each(CoreData.activities, function (coreDataActivity) {
    if (coreDataActivity.key == activityKey) {
      activity = coreDataActivity;
    }

    if (coreDataActivity.subActivities) {
      _.each(coreDataActivity.subActivities, function (subActivity) {
        if (subActivity.key == activityKey) {
          activity = subActivity;
          // the sub activity will not have a type as the type is stored
          // on the parent, so add to the sub activity
          activity.type = coreDataActivity.type;
        }
      });
    }
  });

  return activity;
}

/**
 * Get the max fireteam size for a given activity
 *
 * @param {String} activityKey
 *
 * @return {Integer}
 */
Helpers.getMaxFireteamSizeForActivity = function (activityKey) {
  var activity = this.getActivityByKey(activityKey);

  return CoreData.fireteamSizes[activity.type];
}

/**
 * Get progression level filter options
 *
 * @return {Array}
 */
Helpers.getProgressionLevelFilterOptions = function () {
  return [
    { key: '<10', label: '< 10', levels: _.range(1, 10) },
    { key: '10-20', label: '10 - 20', levels: _.range(10, 20) },
    { key: '20-30', label: '20 - 30', levels: _.range(20, 30) },
    { key: '30-34', label: '30+', levels: _.range(30, 34) },
    { key: '30-34', label: '32+', levels: _.range(32, 34) },
    { key: '34-34', label: '34 Only', levels: _.range(34, 34) }
  ];
},

/**
 * Get all activity keys
 *
 * @return {Array}
 */
Helpers.getActivityKeys = function () {
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

/**
 * Parse filter params so that they can be used to query the db
 *
 * @param {Object} filterParams
 * @return {Object}
 */
Helpers.parseFilterParams = function (filterParams) {
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

  return filterParams;
}

/**
 * Get a chat recipients alias
 *
 * The alias will be the gamertag assigned to the users listing if they have one
 *
 * @param {String} userId
 *
 * @return {String}
 */
Helpers.getChatRecipientAlias = function (userId) {
  var listing = Listings.findOne({ user_id: userId });

  if (listing) {
    return listing.gamertag;
  }
}

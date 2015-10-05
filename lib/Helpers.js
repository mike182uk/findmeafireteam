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
 * Get light level filter options
 *
 * @return {Array}
 */
Helpers.getLightLevelFilterOptions = function () {
  return [
    { key: '170+', label: '170+', levels: _.range(170, 311) },
    { key: '180+', label: '180+', levels: _.range(180, 311) },
    { key: '190+', label: '190+', levels: _.range(190, 311) },
    { key: '200+', label: '200+', levels: _.range(200, 311) },
    { key: '210+', label: '210+', levels: _.range(210, 311) },
    { key: '220+', label: '220+', levels: _.range(220, 311) },
    { key: '230+', label: '230+', levels: _.range(230, 311) },
    { key: '240+', label: '240+', levels: _.range(240, 311) },
    { key: '250+', label: '250+', levels: _.range(250, 311) },
    { key: '260+', label: '260+', levels: _.range(260, 311) },
    { key: '270+', label: '270+', levels: _.range(270, 311) },
    { key: '280+', label: '280+', levels: _.range(280, 311) },
    { key: '290+', label: '290+', levels: _.range(290, 311) },
    { key: '300+', label: '300+', levels: _.range(300, 311) }
  ];
}

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

    _.each(Helpers.getLightLevelFilterOptions(), function (option) {
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

User = {};

/**
 * User properties
 *
 * @type {Object}
 */
User._properties = {};

var USER_ID_SESSION_KEY = 'user';

/**
 * Initalise the user
 *
 * Create a new user if a user does not exist in the session
 */
User.init = function () {
  var user = Session.get(USER_ID_SESSION_KEY);

  if (! user) {
    this._properties = {
      id: this.generateId()
    }

    this.save();
  } else {
    this._properties = _.extend({}, user);
  }
}

/**
 * Get the user id
 *
 * @return {String}
 */
User.id = function () {
  return this._properties.id;
}

/**
 * Get the user listing
 *
 * @return {Object|Undefined}
 */
User.listing = function () {
  return Listings.findOne({ user_id: this._properties.id });
}

/**
 * Save the user to the session
 */
User.save = function () {
  Session.setPersistent(USER_ID_SESSION_KEY, this._properties);
}

/**
 * Generate a unique user id
 *
 * @return {String}
 */
User.generateId = function () {
  var hashids = new Hashids('findmeafireteam', 0);
  var timestamp = moment.utc().valueOf();

  return 'Guest-' + hashids.encode(timestamp);
}

/**
 * Remove all data relating to the current user
 */
User.destroy = function () {
  Session.clear(USER_ID_SESSION_KEY);
}

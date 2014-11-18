User = {};

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
      id: uuid.v4()
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
 * @return {Object}
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

/**
 * Listings collection
 *
 * @type {Object}
 */
Listings = new Mongo.Collection('listings');

var LISTINGS_LAST_RETRIEVED_SESSION_KEY = 'listings_last_retrieved';

/**
 * Update the listings last retrieved timestamp
 */
Listings.touchLastRetrieved = function () {
  var timestamp = moment.utc().valueOf();

  Session.setTemp(LISTINGS_LAST_RETRIEVED_SESSION_KEY, timestamp);
}

/**
 * Get listings last retrieved timestamp
 *
 * @return {Number}
 */
Listings.lastRetrieved = function () {
  return Session.get(LISTINGS_LAST_RETRIEVED_SESSION_KEY);
}

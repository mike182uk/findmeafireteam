/**
 * Chats collection
 *
 * @type {Object}
 */
Chats = new Mongo.Collection('chats');

/**
 * Find a chat by its participants
 *
 * @param {Array} participants
 *
 * @return {Object}
 */
Chats.findChatByParticipants = function (participants) {
  var andQueries = [];

  _.each(participants, function (participant) {
    andQueries.push({ participants: participant });
  });

  return Chats.findOne({ $and: andQueries });
}

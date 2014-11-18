var chance = new Chance;

if (Listings.find().count() === 0) {
  for (var i = 1; i <= _.random(10, 30); i++) {
    var listing = {};

    listing['gamertag'] = chance.name().replace(' ', '');
    listing['comment'] = chance.sentence();
    listing['platform'] = _.sample(CoreData.platforms).key;
    listing['region'] = _.sample(CoreData.regions).key;
    listing['activity'] = _.sample(Helpers.getActivityKeys());
    listing['has_mic'] = _.random(1);
    listing['has_exp'] = _.random(1);
    listing['created_at'] = new Date((new Date).getTime() - _.random(1, 60) * 60000).getTime();
    listing['user_id'] = uuid.v4();

    var types = ['guardian', 'fireteam'];
    listing['type'] = _.sample(types);

    if (listing['type'] == 'guardian') {
      listing['class'] = _.sample(CoreData.classes).key;
      listing['level'] = _.random(1, CoreData.maxProgressionLevel);
    } else {
      // fireteam can also have 'any' region
      var regions = _.clone(CoreData.regions);
      regions.push({ key: 'any', label: 'any' });
      listing['region'] = _.sample(regions).key;

      var maxFireteamSize = Helpers.getMaxFireteamSizeForActivity(listing['activity']);
      var requiredFireteamMembers = _.random(1, maxFireteamSize - 1);
      listing['required_fireteam_members'] = requiredFireteamMembers;
      listing['fireteam_size'] = maxFireteamSize - requiredFireteamMembers;
    }

    Listings.insert(listing);
  }
}

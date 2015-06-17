CoreData = {};

/**
 * Platforms
 *
 * @type {Array}
 */
CoreData.platforms = [
  { key: 'xboxone', label: 'Xbox One'},
  { key: 'ps4', label: 'Playstation 4'},
  { key: 'xbox360', label: 'Xbox 360'},
  { key: 'ps3', label: 'Playstation 3'}
];

/**
 * Regions
 *
 * @type {Array}
 */
CoreData.regions = [
  { key: 'north_america', label: 'North America'},
  { key: 'europe', label: 'Europe'},
  { key: 'australia/nz', label: 'Australia / New Zealand'},
  { key: 'south_america', label: 'South America'},
  { key: 'asia', label: 'Asia'},
  { key: 'africa', label: 'Africa'},
  { key: 'other', label: 'Other'}
];

/**
 * Character Classes
 *
 * @type {Array}
 */
CoreData.classes = [
  { key: 'hunter', label: 'Hunter'},
  { key: 'titan', label: 'Titan'},
  { key: 'warlock', label: 'Warlock'}
];

/**
 * Activities
 *
 * @type {Array}
 */
CoreData.activities = [
  {
    key: 'poe',
    label: 'Prison Of Elders',
    subActivities: [
      { key: 'poe|35', label: 'Prison Of Elders - Level 35' },
      { key: 'poe|34', label: 'Prison Of Elders - Level 34' },
      { key: 'poe|32', label: 'Prison Of Elders - Level 32' },
      { key: 'poe|28', label: 'Prison Of Elders - Level 28' },
    ],
    'type': 'poe'
  },
  {
    key: 'raid',
    label: 'Raid - Normal',
    subActivities: [
      { key: 'raid|normal|crotas_end|fresh_run', label: 'Crota\'s End - Normal (Fresh Run)' },
      { key: 'raid|normal|crotas_end|bridge_checkpoint', label: 'Crota\'s End - Normal (Bridge Checkpoint)' },
      { key: 'raid|normal|crotas_end|thrallway_checkpoint', label: 'Crota\'s End - Normal (Thrallway Checkpoint)' },
      { key: 'raid|normal|crotas_end|ir_yut_checkpoint', label: 'Crota\'s End - Normal (Ir Yut Checkpoint)' },
      { key: 'raid|normal|crotas_end|crota_checkpoint', label: 'Crota\'s End - Normal (Crota Checkpoint)' },
      { key: 'raid|normal|crotas_end|flawless_raider', label: 'Crota\'s End - Normal (Flawless Raider Run)' },
      { key: 'raid|normal|vault_of_glass|fresh_run', label: 'Vault Of Glass - Normal (Fresh Run)' },
      { key: 'raid|normal|vault_of_glass|conflux_checkpoint', label: 'Vault Of Glass - Normal (Conflux Checkpoint)' },
      { key: 'raid|normal|vault_of_glass|oracles_checkpoint', label: 'Vault Of Glass - Normal (Oracles Checkpoint)' },
      { key: 'raid|normal|vault_of_glass|templar_checkpoint', label: 'Vault Of Glass - Normal (Templar Checkpoint)' },
      { key: 'raid|normal|vault_of_glass|gatekeepers_checkpoint', label: 'Vault Of Glass - Normal (Gatekeepers Checkpoint)' },
      { key: 'raid|normal|vault_of_glass|atheon_checkpoint', label: 'Vault Of Glass - Normal (Atheon Checkpoint)' },
      { key: 'raid|normal|vault_of_glass|flawless_raider', label: 'Vault Of Glass - Normal (Flawless Raider Run)' }
    ],
    type: 'raid'
  },
  {
    key: 'raid',
    label: 'Raid - Hard',
    subActivities: [
      { key: 'raid|hard|crotas_end|fresh_run_checkpoint', label: 'Crota\'s End - Hard (Fresh Run)' },
      { key: 'raid|hard|crotas_end|bridge_checkpoint', label: 'Crota\'s End - Hard (Bridge Checkpoint)' },
      { key: 'raid|hard|crotas_end|thrallway_checkpoint', label: 'Crota\'s End - Hard (Thrallway Checkpoint)' },
      { key: 'raid|hard|crotas_end|ir_yut_checkpoint', label: 'Crota\'s End - Hard (Ir Yut Checkpoint)' },
      { key: 'raid|hard|crotas_end|crota_checkpoint', label: 'Crota\'s End - Hard (Crota Checkpoint)' },
      { key: 'raid|hard|crotas_end|flawless_raider', label: 'Crota\'s End - Hard (Flawless Raider Run)' },
      { key: 'raid|hard|vault_of_glass|fresh_run', label: 'Vault Of Glass - Hard (Fresh Run)' },
      { key: 'raid|hard|vault_of_glass|conflux_checkpoint', label: 'Vault Of Glass - Hard (Conflux Checkpoint)' },
      { key: 'raid|hard|vault_of_glass|oracles_checkpoint', label: 'Vault Of Glass - Hard (Oracles Checkpoint)' },
      { key: 'raid|hard|vault_of_glass|templar_checkpoint', label: 'Vault Of Glass - Hard (Templar Checkpoint)' },
      { key: 'raid|hard|vault_of_glass|gatekeepers_checkpoint', label: 'Vault Of Glass - Hard (Gatekeepers Checkpoint)' },
      { key: 'raid|hard|vault_of_glass|atheon_checkpooint', label: 'Vault Of Glass - Hard (Atheon Checkpoint)' },
      { key: 'raid|hard|vault_of_glass|flawless_raider', label: 'Vault Of Glass - Hard (Flawless Raider Run)' }
    ],
    type: 'raid'
  },
  {
    key: 'too',
    label: 'Trials Of Osiris',
    subActivities: [
      { key: 'too|flawless', label: 'Trials Of Osiris - Flawless Run' },
      { key: 'too|competitive', label: 'Trials Of Osiris - Competitive' },
      { key: 'too|casual', label: 'Trials Of Osiris - Casual' }
    ],
    type: 'too'
  },
  {
    key: 'strike|weekly_heroic_strike',
    label: 'Weekly Heroic Strike',
    subActivities: [
      { key: 'strike|weekly_heroic_strike|Easy', label: 'Weekly Heroic Strike - Easy' },
      { key: 'strike|weekly_heroic_strike|Medium', label: 'Weekly Heroic Strike - Medium' },
      { key: 'strike|weekly_heroic_strike|Hard', label: 'Weekly Heroic Strike - Hard' }
    ],
    type: 'strike'
  },
  {
    key: 'strike|weekly_nightfall_strike',
    label: 'Weekly Nightfall Strike',
    subActivities: [
      { key: 'strike|weekly_nightfall_strike|weekly_nightfall_strike', label: 'Weekly Nightfall Strike' },
    ],
    type: 'strike'
  },
  {
    key: 'story',
    label: 'Story',
    subActivities: [
      { key: 'story|daily_heroic|easy', label: 'Daily Heroic Story - Easy' },
      { key: 'story|daily_heroic|medium', label: 'Daily Heroic Story - Medium' },
      { key: 'story|daily_heroic|hard', label: 'Daily Heroic Story - Hard' },
      { key: 'story|how', label: 'Story - House Of Wolves' },
      { key: 'story|tdb', label: 'Story - The Dark Below' },
      { key: 'story|earth', label: 'Story - Earth' },
      { key: 'story|moon', label: 'Story - Moon' },
      { key: 'story|venus', label: 'Story - Venus' },
      { key: 'story|mars', label: 'Story - Mars' }
    ],
    type: 'story'
  },
  {
    key: 'patrol',
    label: 'Patrol',
    subActivities: [
      { key: 'patrol|queens_bounties', label: 'Patrol - Queen\'s Bounties' },
      { key: 'patrol|earth', label: 'Patrol - Earth' },
      { key: 'patrol|moon', label: 'Patrol - Moon' },
      { key: 'patrol|venus', label: 'Patrol - Venus' },
      { key: 'patrol|mars', label: 'Patrol - Mars' }
    ],
    type: 'patrol'
  },
  {
    key: 'strike_playlist',
    label: 'Strike Playlists',
    subActivities: [
      { key: 'strike_playlist|eagle', label: 'Strike Playlist - Eagle' },
      { key: 'strike_playlist|viper', label: 'Strike Playlist - Viper' },
      { key: 'strike_playlist|wolf', label: 'Strike Playlist - Wolf' },
      { key: 'strike_playlist|tiger', label: 'Strike Playlist - Tiger' },
      { key: 'strike_playlist|roc', label: 'Strike Playlist - Roc' },
      { key: 'strike_playlist|dragon', label: 'Strike Playlist - Dragon' },
    ],
    type: 'strike'
  },
  {
    key: 'strike',
    label: 'Strike',
    subActivities: [
      { key: 'strike|shadow_thief', label: 'Strike - The Shadow Thief' },
      { key: 'strike|will_of_crota', label: 'Strike - The Will Of Crota' },
      { key: 'strike|undying_mind', label: 'Strike - The Undying Mind (Playstation Only)' },
      { key: 'strike|devils_lair', label: 'Strike - The Devils\' Lair' },
      { key: 'strike|summoning_pits', label: 'Strike - The Summoning Pits' },
      { key: 'strike|nexus', label: 'Strike - The Nexus' },
      { key: 'strike|winters_run', label: 'Strike - Winter\'s Run' },
      { key: 'strike|cerebus_vae_iii', label: 'Strike - Cerebus Vae III' },
      { key: 'strike|dust_palace', label: 'Strike - Dust Palace (Playstation Only)' },
    ],
    type: 'strike'
  },
  {
    key: 'crucible',
    label: 'Crucible',
    subActivities: [
      { key: 'crucible|elimination', label: 'Crucible - Elimination' },
      { key: 'crucible|clash', label: 'Crucible - Clash' },
      { key: 'crucible|combined_arms', label: 'Crucible - Combined Arms' },
      { key: 'crucible|control', label: 'Crucible - Control' },
      { key: 'crucible|rumble', label: 'Crucible - Rumble' },
      { key: 'crucible|salvage', label: 'Crucible - Salvage' },
      { key: 'crucible|skirmish', label: 'Crucible - Skirmish' },
      { key: 'crucible|iron_banner', label: 'Crucible - Iron Banner' }
    ],
    type: 'crucible'
  },
]

/**
 * Maximum progression level
 *
 * @type {Number}
 */
CoreData.maxProgressionLevel = 34;

/**
 * Fireteam sizes per activity type
 *
 * @type {Array}
 */
CoreData.fireteamSizes = {
  raid: 6,
  strike: 3,
  story: 6,
  patrol: 6,
  crucible: 6,
  too: 3,
  poe: 3
}

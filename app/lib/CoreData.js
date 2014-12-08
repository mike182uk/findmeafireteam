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
    key: 'raid',
    label: 'Raid - Normal',
    subActivities: [
      { key: 'raid|normal|vault_of_glass|fresh_run', label: 'Vault Of Glass - Normal (Fresh Run)' },
      { key: 'raid|normal|vault_of_glass|conflux_checkpoint', label: 'Vault Of Glass - Normal (Conflux Checkpoint)' },
      { key: 'raid|normal|vault_of_glass|oracles_checkpoint', label: 'Vault Of Glass - Normal (Oracles Checkpoint)' },
      { key: 'raid|normal|vault_of_glass|templar_checkpoint', label: 'Vault Of Glass - Normal (Templar Checkpoint)' },
      { key: 'raid|normal|vault_of_glass|gatekeepers_checkpoint', label: 'Vault Of Glass - Normal (Gatekeepers Checkpoint)' },
      { key: 'raid|normal|vault_of_glass|atheon_chcekpooint', label: 'Vault Of Glass - Normal (Atheon Checkpoint)' }
    ],
    type: 'raid'
  },
  {
    key: 'raid',
    label: 'Raid - Hard',
    subActivities: [
      { key: 'raid|hard|vault_of_glass|fresh_run', label: 'Vault Of Glass - Hard (Fresh Run)' },
      { key: 'raid|hard|vault_of_glass|conflux_checkpoint', label: 'Vault Of Glass - Hard (Conflux Checkpoint)' },
      { key: 'raid|hard|vault_of_glass|oracles_checkpoint', label: 'Vault Of Glass - Hard (Oracles Checkpoint)' },
      { key: 'raid|hard|vault_of_glass|templar_checkpoint', label: 'Vault Of Glass - Hard (Templar Checkpoint)' },
      { key: 'raid|hard|vault_of_glass|gatekeepers_checkpoint', label: 'Vault Of Glass - Hard (Gatekeepers Checkpoint)' },
      { key: 'raid|hard|vault_of_glass|atheon_chcekpooint', label: 'Vault Of Glass - Hard (Atheon Checkpoint)' }
    ],
    type: 'raid'
  },
  {
    key: 'strike|weekly_heroic_strike',
    label: 'Weekly Heroic Strike',
    subActivities: [
      { key: 'strike|weekly_heroic_strike|level_22', label: 'Weekly Heroic Strike - Level 22' },
      { key: 'strike|weekly_heroic_strike|level_26', label: 'Weekly Heroic Strike - Level 26' },
      { key: 'strike|weekly_heroic_strike|level_28', label: 'Weekly Heroic Strike - Level 28' }
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
      { key: 'story|daily_heroic|level_20', label: 'Daily Heroic Story - Level 20' },
      { key: 'story|daily_heroic|level_24', label: 'Daily Heroic Story - Level 24' },
      { key: 'story|daily_heroic|level_28', label: 'Daily Heroic Story - Level 28' },
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
      { key: 'strike_playlist|fresh_run', label: 'Strike Playlist - Eagle (Level 18)' },
      { key: 'strike_playlist|conflux_checkpoint', label: 'Strike Playlist - Viper (Level 20)' },
      { key: 'strike_playlist|oracles_checkpoint', label: 'Strike Playlist - Wolf (Level 22)' },
      { key: 'strike_playlist|templar_checkpoint', label: 'Strike Playlist - Tiger (Level 24)' },
    ],
    type: 'raid'
  },
  {
    key: 'strikes',
    label: 'Strikes',
    subActivities: [
      { key: 'strike|devils_lair', label: 'Strike - The Devils\' Lair' },
      { key: 'strike|summoning_pits', label: 'Strike - The Summoning Pits' },
      { key: 'strike|nexus', label: 'Strike - The Nexus' },
      { key: 'strike|winters_run', label: 'Strike - Winter\'s Run' },
      { key: 'strike|cerebus_vae_iii', label: 'Strike - Cerebus Vae III' },
      { key: 'strike|dust_palace', label: 'Strike - Dust Palace' }
    ],
    type: 'raid'
  },
  {
    key: 'crucible',
    label: 'Crucible',
    subActivities: [
      { key: 'crucible|clash', label: 'Crucible - Clash' },
      { key: 'crucible|combined_arms', label: 'Crucible - Combined Arms' },
      { key: 'crucible|control', label: 'Crucible - Control' },
      { key: 'crucible|rumble', label: 'Crucible - Rumble' },
      { key: 'crucible|salvage', label: 'Crucible - Salvage' },
      { key: 'crucible|skirmish', label: 'Crucible - Skirmish' },
      { key: 'crucible|iron_banner', label: 'Crucible - Iron Banner' }
    ],
    type: 'raid'
  },
]

/**
 * Maximum progression level
 *
 * @type {Number}
 */
CoreData.maxProgressionLevel = 30;

/**
 * Fireteam sizes per activity type
 *
 * @type {Array}
 */
CoreData.fireteamSizes = {
  raid: 6,
  strike: 3,
  story: 6,
  patrol: 6
}

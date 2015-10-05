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
      { key: 'raid|normal|kings_fall|fresh_run', label: 'King\'s Fall - Normal (Fresh Run)' },
      { key: 'raid|normal|kings_fall|totems_checkpoint', label: 'King\'s Fall - Normal (Totems Checkpoint)' },
      { key: 'raid|normal|kings_fall|warpriest_checkpoint', label: 'King\'s Fall - Normal (Warpriest Checkpoint)' },
      { key: 'raid|normal|kings_fall|golgoroth_checkpoint', label: 'King\'s Fall - Normal (Golgoroth Checkpoint)' },
      { key: 'raid|normal|kings_fall|daughters_checkpoint', label: 'King\'s Fall - Normal (Daughters Checkpoint)' },
      { key: 'raid|normal|kings_fall|oryx_checkpoint', label: 'King\'s Fall - Normal (Oryx Checkpoint)' },
      { key: 'raid|normal|kings_fall|flawless_raider', label: 'King\'s Fall - Normal (Flawless Raider Run)' },
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
      { key: 'raid|hard|kings_fall|fresh_run', label: 'King\'s Fall - Hard (Fresh Run)' },
      { key: 'raid|hard|kings_fall|totems_checkpoint', label: 'King\'s Fall - Hard (Totems Checkpoint)' },
      { key: 'raid|hard|kings_fall|warpriest_checkpoint', label: 'King\'s Fall - Hard (Warpriest Checkpoint)' },
      { key: 'raid|hard|kings_fall|golgoroth_checkpoint', label: 'King\'s Fall - Hard (Golgoroth Checkpoint)' },
      { key: 'raid|hard|kings_fall|daughters_checkpoint', label: 'King\'s Fall - Hard (Daughters Checkpoint)' },
      { key: 'raid|hard|kings_fall|oryx_checkpoint', label: 'King\'s Fall - Hard (Oryx Checkpoint)' },
      { key: 'raid|hard|kings_fall|flawless_raider', label: 'King\'s Fall - Hard (Flawless Raider Run)' },
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
    key: 'coo',
    label: 'Court Of Oryx',
    subActivities: [
      { key: 'coo|tier_3', label: 'Court Of Oryx - Tier 3' },
      { key: 'coo|tier_2', label: 'Court Of Oryx - Tier 2' },
      { key: 'coo|tier_1', label: 'Court Of Oryx - Tier 1' }
    ],
    type: 'too'
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
    key: 'strike|weekly_nightfall_strike',
    label: 'Weekly Nightfall Strike',
    subActivities: [
      { key: 'strike|weekly_nightfall_strike|weekly_nightfall_strike', label: 'Weekly Nightfall Strike' },
    ],
    type: 'strike'
  },
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
    key: 'story',
    label: 'Story',
    subActivities: [
      { key: 'story|daily_heroic', label: 'Story - Daily Heroic Story' },
      { key: 'story|ttk', label: 'Story - The Taken King' },
      { key: 'story|how', label: 'Story - House Of Wolves' },
      { key: 'story|tdb', label: 'Story - The Dark Below' },
      { key: 'story|base', label: 'Story - Base Game' }
    ],
    type: 'story'
  },
  {
    key: 'patrol',
    label: 'Patrol',
    subActivities: [
      { key: 'patrol|dreadnaught', label: 'Patrol - Dreadnaught' },
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
      { key: 'strike_playlist|vanguard_heroic', label: 'Strike Playlist - Vanguard Heroic' },
      { key: 'strike_playlist|vanguard', label: 'Strike Playlist - Vanguard' },
      { key: 'strike_playlist|vanguard_legacy', label: 'Strike Playlist - Vanguard Legacy' }
    ],
    type: 'strike'
  },
  {
    key: 'strike',
    label: 'Strike',
    subActivities: [
      { key: 'strike|shield_brothers', label: 'Strike - Shield Brothers (TTK)' },
      { key: 'strike|sunless_cell', label: 'Strike - The Sunless Cell (TTK)' },
      { key: 'strike|fallen_saber', label: 'Strike - Fallen S.A.B.E.R. (TTK)' },
      { key: 'strike|echo_chamber', label: 'Strike - Echo Chamber (TTK) (PlayStation Only)' },
      { key: 'strike|shadow_thief', label: 'Strike - The Shadow Thief (HoW)' },
      { key: 'strike|will_of_crota', label: 'Strike - The Will Of Crota (TDB)' },
      { key: 'strike|undying_mind', label: 'Strike - The Undying Mind (TDB)' },
      { key: 'strike|devils_lair', label: 'Strike - The Devils\' Lair' },
      { key: 'strike|summoning_pits', label: 'Strike - The Summoning Pits' },
      { key: 'strike|nexus', label: 'Strike - The Nexus' },
      { key: 'strike|winters_run', label: 'Strike - Winter\'s Run' },
      { key: 'strike|cerebus_vae_iii', label: 'Strike - Cerebus Vae III' },
      { key: 'strike|dust_palace', label: 'Strike - Dust Palace' },
    ],
    type: 'strike'
  },
  {
    key: 'crucible',
    label: 'Crucible',
    subActivities: [
      { key: 'crucible|iron_banner', label: 'Crucible - Iron Banner' },
      { key: 'crucible|daily_crucible', label: 'Crucible - Daily Crucible' },
      { key: 'crucible|rift', label: 'Crucible - Rift' },
      { key: 'crucible|mayhem', label: 'Crucible - Mayhem' },
      { key: 'crucible|zone_control', label: 'Crucible - Zone Control' },
      { key: 'crucible|elimination', label: 'Crucible - Elimination' },
      { key: 'crucible|inferno', label: 'Crucible - Inferno' },
      { key: 'crucible|clash', label: 'Crucible - Clash' },
      { key: 'crucible|combined_arms', label: 'Crucible - Combined Arms' },
      { key: 'crucible|control', label: 'Crucible - Control' },
      { key: 'crucible|rumble', label: 'Crucible - Rumble' },
      { key: 'crucible|salvage', label: 'Crucible - Salvage' },
      { key: 'crucible|skirmish', label: 'Crucible - Skirmish' }
    ],
    type: 'crucible'
  },
];

/**
 * Minimum light level
 *
 * @type {Number}
 */
CoreData.minLightLevel = 170;

/**
 * Maximum light level
 *
 * @type {Number}
 */
CoreData.maxLightLevel = 310;

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
  poe: 3,
  coo: 3
}

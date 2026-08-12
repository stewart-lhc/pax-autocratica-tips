export type Source = {
  label: string;
  url: string;
  kind: 'Official' | 'Store' | 'Developer AMA' | 'Community' | 'Video';
};

export type TableSection = {
  type: 'table';
  heading: string;
  intro?: string;
  columns: string[];
  rows: string[][];
};

export type PageSection =
  | { type: 'prose'; heading: string; paragraphs: string[] }
  | { type: 'steps'; heading: string; intro?: string; items: { title: string; text: string }[] }
  | { type: 'facts'; heading: string; items: { label: string; value: string; status?: 'live' | 'planned' | 'observed' }[] }
  | TableSection
  | { type: 'gallery'; heading: string; items: { src: string; alt: string; caption: string }[] }
  | { type: 'video'; heading: string; videoId: string; title: string; summary: string }
  | { type: 'faq'; heading: string; items: { q: string; a: string }[] }
  | { type: 'callout'; heading: string; text: string; tone?: 'warning' | 'intel' };

export type GuidePage = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  dek: string;
  updated: string;
  status: 'Verified for EA launch' | 'Living guide' | 'Official status check' | 'Editorial policy';
  image: string;
  imageAlt: string;
  sections: PageSection[];
  sources: Source[];
  related: string[];
};

export const siteName = 'The Autocrat\'s Index';
export const gameVersion = 'Early Access launch build — Aug 10, 2026';
export const homepageUpdated = '2026-08-13';
export const steamUrl = 'https://store.steampowered.com/app/1067360/Pax_Autocratica/';
export const officialUrl = 'https://paxautocratica.com/';

const steamStore: Source = { label: 'Pax Autocratica on Steam', url: steamUrl, kind: 'Store' };
const officialSite: Source = { label: 'Official Pax Autocratica website', url: officialUrl, kind: 'Official' };
const launchAma: Source = { label: 'Developer launch-day AMA', url: 'https://www.reddit.com/r/Games/comments/1vkcn3d/ama_developer_of_pax_autocratica_here_a/', kind: 'Developer AMA' };
const steamHub: Source = { label: 'Official Steam Community hub', url: 'https://steamcommunity.com/app/1067360', kind: 'Official' };
const steamDiscussions: Source = { label: 'Steam discussions', url: 'https://steamcommunity.com/app/1067360/discussions/', kind: 'Community' };
const officialLinks: Source = { label: 'Pinned official links', url: 'https://steamcommunity.com/app/1067360/discussions/0/595152778808013174/', kind: 'Official' };
const launchTrailer: Source = { label: 'Early Access launch trailer', url: 'https://www.youtube.com/watch?v=G3OkYGmB3cY', kind: 'Video' };
const officialGameplay: Source = { label: 'Official 12:23 gameplay video', url: 'https://www.youtube.com/watch?v=P_mDDybzjEw', kind: 'Video' };
const ag12: Source = { label: 'Directive AG-12 official Steam news', url: 'https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1840944183773769', kind: 'Official' };
const aug11Patch: Source = { label: 'Aug 11 State Maintenance Directive', url: 'https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1840310314353140', kind: 'Official' };
const launchRoadmap: Source = { label: 'Early Access launch roadmap on Steam', url: 'https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1840310314351799', kind: 'Official' };
const steamReviews: Source = { label: 'Steam Community reviews (reader observations)', url: 'https://steamcommunity.com/app/1067360/reviews/', kind: 'Community' };
const backerSupport: Source = { label: 'Backer support and Discord claim thread', url: 'https://steamcommunity.com/app/1067360/discussions/0/546746241084767817/', kind: 'Community' };

export const pages: GuidePage[] = [
  {
    slug: 'guide',
    title: 'Pax Autocratica Guide – Beginner Tips & How to Play',
    description: 'New to Pax Autocratica? Follow a 6-step first-hour route covering Victory Square, policy research, worker assignments, expedition prep and capture.',
    eyebrow: 'START HERE · FIRST-HOUR ROUTE',
    h1: 'Pax Autocratica Guide – How to Play & Beginner Tips',
    dek: 'The game throws colony management, labor policy, crafting and a roguelite shooter at you almost at once. This route tells you what deserves attention first — and what can wait.',
    updated: '2026-08-13',
    status: 'Living guide',
    image: '/images/steam/citizen-management.jpg',
    imageAlt: 'First-person view beside a worker at a Pax Autocratica colony',
    sections: [
      { type: 'callout', heading: 'The 20-second answer', text: 'Repair Victory Square, complete its High-Pressure Labor policy research, then stabilize basic production before treating expeditions as loot runs. Your colony keeps working while you fight, so weak automation becomes a problem the moment a run goes long.', tone: 'intel' },
      { type: 'steps', heading: 'A sane first-hour order', intro: 'This order follows visible launch-build objectives and systems confirmed by official material.', items: [
        { title: 'Read the clock, not every menu', text: 'The colony HUD separates work time from the rest of the day. Check who is exhausted or overworked before chasing another construction order.' },
        { title: 'Repair Victory Square', text: 'The official launch screenshot shows this as the first building directive. Victory Square is also where adulthood and enlistment are surfaced in the June 30 update.' },
        { title: 'Finish the first policy research', text: 'High-Pressure Labor is the visible opening research objective. Treat it as an onboarding task, not an automatic recommendation for every colony.' },
        { title: 'Assign by the job stat', text: 'Construction, research, production, mining, logging, gathering, cooking, planting and breeding appear as separate worker stats. The game now prioritizes the relevant stat when auto-assigning.' },
        { title: 'Prepare before leaving', text: 'Craft the weapon you actually plan to use, check your squad, and make sure food and basic production do not depend on your manual presence.' },
        { title: 'Use the first expedition to learn capture', text: 'Humanoid enemies enter a stunned state the first time they drop below 25% health. Soldiers stop attacking a target marked for capture; elite and boss targets are harder to capture.' }
      ]},
      { type: 'facts', heading: 'Mechanics worth knowing early', items: [
        { label: 'Melee kills', value: 'Confirmed to drop ammunition', status: 'live' },
        { label: 'Full-screen UI', value: 'Automatically pauses the game', status: 'live' },
        { label: 'Transport Hub', value: 'Moves backpack materials home and adjusts deployed soldiers', status: 'live' },
        { label: 'Long expeditions', value: 'Officially supported by colony automation', status: 'live' },
        { label: 'Co-op', value: 'Planned after Early Access launch; not in the current Steam feature list', status: 'planned' }
      ]},
      { type: 'gallery', heading: 'Read the interface before it reads you', items: [
        { src: '/images/steam/policy-choice.jpg', alt: 'Soldier Management screen with worker traits and job assignments', caption: 'Soldier Management exposes both job speed and personality traits. “Best worker” is job-specific, not a single power number.' },
        { src: '/images/steam/shot-12.jpg', alt: 'Victory Square hologram ready to place', caption: 'Construction, relocation and destruction are separate modes. Check the active mode before clicking through a dense base.' }
      ]},
      { type: 'faq', heading: 'New ruler questions', items: [
        { q: 'Is Pax Autocratica free to play?', a: 'No. The current Steam app is a paid game. A separate Prologue exists and is free.' },
        { q: 'Does the colony stop while I am in a mission?', a: 'No. The developers explicitly discuss automation for gathering, production and food so longer expeditions do not starve the colony.' },
        { q: 'Can I save?', a: 'Steam lists Save Anytime and Steam Cloud. Early forum threads asking for manual save predate the current launch listing, so use the current store feature list as the stronger source.' }
      ]},
      { type: 'steps', heading: 'First-session checklist after AG-12', intro: 'Do these before you spend an hour tuning every building. They are recent quality-of-life and management changes, not a substitute for learning the opening directives.', items: [
        { title: 'Choose a Soldier Aging policy deliberately', text: 'AG-12 added a Soldier Aging toggle. Check its current setting before you judge an enlistment or staffing plan; this page does not infer a best setting without a live-save comparison.' },
        { title: 'Use Exile as roster maintenance', text: 'AG-12 added Exile. Treat it as a deliberate way to remove a redundant or low-contribution soldier, not as a claimed optimal economy exploit.' },
        { title: 'Protect the session, then still save manually', text: 'Automatic save backups were added for interrupted saves. They are recovery help, not a guarantee against every loss; make a manual save before a risky expedition or major policy change.' },
        { title: 'Set the deposit quantity instead of over-feeding a building', text: 'Manual deposit quantity is now available. Move only the input you intend to commit, then recheck the production chain before leaving the colony.' }
      ]},
      { type: 'callout', heading: 'Do not waste your first hour', text: 'If something appears stuck, pause the plan rather than restarting the whole save: verify the named objective, inputs and current patch notes. The Aug 11 patch fixed save failures, Prepare for Auryto objective counting and a Toxic Fog Core trigger issue; AG-12 then added save backups. Those fixes are useful context, not proof that every new stall has the same cause.', tone: 'warning' },
      { type: 'video', heading: 'A practical 12-minute watch guide', videoId: 'P_mDDybzjEw', title: 'Official Pax Autocratica gameplay video (12:23)', summary: 'Watch once for the colony-to-expedition handoff, then pause on the roster, construction and squad-command moments. It is official footage for interface and loop context, not evidence for hidden values, performance, or an optimal build.' }
    ],
    sources: [steamStore, ag12, aug11Patch, officialGameplay, launchAma], related: ['wiki', 'strategy', 'walkthrough']
  },
  {
    slug: 'wiki',
    title: 'Pax Autocratica Wiki – Buildings, Cores & Weapons',
    description: 'A source-checked Pax Autocratica wiki with 9 launch-build work sites, 3 readable core fragments, one weapon record and clearly labelled unknowns.',
    eyebrow: 'QUERY DESK · VERIFIED ENTRIES',
    h1: 'Pax Autocratica Wiki – Source-Checked Database',
    dek: 'Searchable facts pulled from official launch media, developer notes and the current store listing. Unknown values stay unknown instead of being “helpfully” invented.',
    updated: '2026-08-13', status: 'Verified for EA launch',
    image: '/images/steam/policy-choice.jpg', imageAlt: 'Pax Autocratica Soldier Management interface',
    sections: [
      { type: 'callout', heading: 'Evidence key', text: 'VERIFIED means visible in the Aug 10 launch material or current Steam listing. OBSERVED means visible in an official screenshot but not independently tested. PLANNED means a developer described it as future work.', tone: 'intel' },
      { type: 'table', heading: 'Buildings and work sites visible at launch', intro: 'Names below are readable in official launch screenshots. Costs and unlocks are intentionally blank until captured from the live build.', columns: ['Entry', 'Observed purpose / assignment', 'Evidence'], rows: [
        ['Victory Square', 'Policy research; adulthood and enlistment staging', 'Screenshot + Jun 30 update'],
        ['Command Center', 'Research assignment', 'Launch screenshot'],
        ['Ore Refinery', 'Production assignment', 'Launch screenshot'],
        ['Kitchen', 'Cooking assignment', 'Launch screenshot'],
        ['Greenhouse', 'Planting assignment', 'Launch screenshot'],
        ['Animal Farm', 'Breeding assignment', 'Launch screenshot'],
        ['Space Shipyard', 'Worker assignment visible; exact output unverified', 'Launch screenshot'],
        ['Deep Drill Tower', 'Mining assignment', 'Launch screenshot'],
        ['Weapon Research Center', 'Crafts items; multiple buildings can form an automated line', 'Crafting screenshot']
      ]},
      { type: 'table', heading: 'Core fragments with readable launch values', columns: ['Core', 'What the card says', 'Role'], rows: [
        ['Retaliation Core', 'Gain 1 Retaliation Guard every 10s, up to 1 stack. Taking damage consumes 1 Guard to reduce damage by 25% and deal 400% + 200% weapon DPS in retaliation within 4m.', 'Defensive counter'],
        ['Drone EMP', 'Drones receive EMP bombs dealing 300 damage, disabling elite/boss abilities for 8s. Cooldown 15s. Sector Overlords are immune.', 'Control'],
        ['Toxic-Drone Core', 'Toxic Fog damage summons one temporary drone for 20s at 50% Drone stats. Cooldown 30s.', 'Summon synergy']
      ]},
      { type: 'table', heading: 'Weapon record: Nebula Assault Rifle E36-V', intro: 'These are blueprint values visible in the official Steam screenshot, not a laboratory damage test.', columns: ['Field', 'Value', 'Field', 'Value'], rows: [
        ['Shooting damage', '46', 'Magazine', '30'],
        ['Effective range', '100', 'Max range', '150'],
        ['Shooting speed', '10', 'Stability', '75'],
        ['Crit rate', '5%', 'Crit damage', '50%'],
        ['Weakpoint multiplier', '50%', 'Mode', 'Full-auto / scoped alt fire']
      ]},
      { type: 'table', heading: 'Citizen stats and traits spotted', columns: ['Type', 'Entries', 'Why it matters'], rows: [
        ['Work stats', 'Construction, Research, Production, Mining, Logging, Gathering, Cooking, Planting, Breeding', 'Assignment value is specialized'],
        ['Traits', 'Conformist, Faint-hearted, Agile, Low Energy, Damage Boost', 'Behavior, fatigue and combat output can pull in different directions'],
        ['States', 'Short Break, Pending Imprisonment, Exhausted, Overwork', 'The roster is also a live operations screen']
      ]},
      { type: 'gallery', heading: 'Primary-source screens', items: [
        { src: '/images/steam/shot-10.jpg', alt: 'Choose a Core Fragment screen showing Retaliation Core, Drone EMP and Toxic-Drone Core', caption: 'Official launch screenshot; values above are transcribed from this screen.' },
        { src: '/images/steam/shot-14.jpg', alt: 'Crafting screen for the Nebula Assault Rifle E36-V', caption: 'Official launch screenshot; Early Access balance can change these numbers.' }
      ]},
      { type: 'table', heading: 'Post-launch system register', intro: 'This register separates confirmed current changes from a value we have not measured in a live save.', columns: ['System', 'Current official record', 'What remains unknown'], rows: [
        ['Soldier Aging', 'AG-12 added a toggle.', 'Default state, downstream economy impact, and optimal setting are not claimed here.'],
        ['Exile', 'AG-12 added Exile for roster management.', 'Costs, edge cases, and any optimal use pattern are unverified.'],
        ['Save recovery', 'AG-12 added automatic save backups for interrupted saves.', 'Retention count and recovery coverage are unverified; it is not a no-loss guarantee.'],
        ['Building deposits', 'AG-12 added manual deposit quantity.', 'Exact limits and UI behavior beyond the official note are unverified.'],
        ['Infested Nest', 'AG-12 reduced difficulty.', 'No numerical reduction or revised encounter rating has been published here.'],
        ['Soldier upgrades', 'AG-12 reduced required upgrade points for normal, elite, and Boss soldiers.', 'Exact point values and the resulting best path are unverified.']
      ]},
      { type: 'callout', heading: 'Explicit unknowns', text: 'This wiki does not convert a patch note or a 12:23 official video into hidden drop rates, damage formulas, save-retention counts, co-op timing, or ranking data. Those fields stay blank until they are directly documented or repeatably observed with a version.', tone: 'warning' }
    ],
    sources: [steamStore, ag12, officialGameplay, launchAma], related: ['tier-list', 'guide', 'updates']
  },
  {
    slug: 'strategy',
    title: 'Pax Autocratica Strategy Guide – How to Win',
    description: 'A 4-step Pax Autocratica strategy framework for colony automation, mission squads, safer captures and core synergies, based on confirmed mechanics.',
    eyebrow: 'FIELD DOCTRINE · NO FAKE META', h1: 'Pax Autocratica Strategy Guide',
    dek: 'A launch-day framework for making decisions. It explains trade-offs from confirmed mechanics instead of pretending one day of public data has produced a solved build.',
    updated: '2026-08-13', status: 'Living guide', image: '/images/steam/colony-overview.jpg', imageAlt: 'A large Pax Autocratica colony among alien rock formations',
    sections: [
      { type: 'steps', heading: 'The loop that actually matters', items: [
        { title: 'Automate the boring failure states', text: 'Food, gathering and production should survive your absence. The developer says expedition length is player-controlled, which turns weak automation into hidden combat pressure.' },
        { title: 'Build squads around the mission, not rarity colors', text: 'Large battlefields mix infantry, tanks, mechs, missiles and bullet-hell pressure. Control, survival and weak-point coverage matter before pure damage spreadsheets do.' },
        { title: 'Protect capture attempts', text: 'Mark the target so allied soldiers stop attacking it. Elite and boss capture is harder, so clear the surrounding pressure before gambling on the capture roll.' },
        { title: 'Choose cores as systems', text: 'A Toxic Fog effect can feed Toxic-Drone Core, while Drone EMP adds control. The useful question is not “which card is red?” but “what existing trigger makes this card fire often?”' }
      ]},
      { type: 'table', heading: 'Decision table', columns: ['If this is failing…', 'Check first', 'Reason'], rows: [
        ['Production stalls during expeditions', 'Worker stat match, inputs, automation', 'Longer runs are supported, but the colony continues operating'],
        ['Captures die before resolving', 'Target mark and squad fire', 'Allied soldiers now stop attacking marked targets'],
        ['Boss abilities overwhelm the squad', 'Drone EMP or another control layer', 'EMP card explicitly disables elite and boss abilities; Sector Overlords are immune'],
        ['Ammo dries up', 'Melee finish opportunities', 'Melee kills are confirmed to drop ammunition'],
        ['Workers collapse', 'Low Energy traits, schedule and overwork state', 'Fatigue is visible and trait-modified']
      ]},
      { type: 'gallery', heading: 'Two halves of the same machine', items: [
        { src: '/images/steam/core-build.jpg', alt: 'Dense industrial colony towers in Pax Autocratica', caption: 'A productive base buys freedom to stay in the field.' },
        { src: '/images/steam/shot-15.jpg', alt: 'Player commanding a squad during an expedition', caption: 'Squad commands expose Move, Attack and Follow Me — positioning is part of your build.' }
      ]},
      { type: 'table', heading: 'Colony-away audit', columns: ['Before you leave', 'Why it matters away from base', 'Return trigger'], rows: [
        ['Food, gathering and production inputs have an owner', 'The colony continues operating during an expedition.', 'An input chain depends on your backpack or a worker is visibly exhausted.'],
        ['The squad has a job and commands are understood', 'Move, Attack and Follow Me support positioning choices without pretending AI solves every fight.', 'A capture or priority target needs fire discipline.'],
        ['Deposits match the intended run', 'AG-12 manual deposit quantity lets you avoid committing an entire stack by accident.', 'A critical building lacks inputs or an unintended stockpile was consumed.'],
        ['A recovery point exists', 'AG-12 automatic backups help with interrupted saves but do not replace a deliberate checkpoint.', 'A major objective, policy or risk decision is about to begin.']
      ]},
      { type: 'steps', heading: 'Capture playbook: protect the decision', items: [
        { title: 'Clear enough pressure to look at the target', text: 'A capture attempt is a trade-off against immediate survival. Do not chase it through unmanageable surrounding damage.' },
        { title: 'Mark the target and control squad fire', text: 'Allied soldiers stop attacking a marked capture target. Use that confirmed behavior to prevent your own squad from ending the attempt.' },
        { title: 'Spend the result with the colony in mind', text: 'Captured people can feed the colony-and-squad loop, but this page does not invent conversion efficiency or a universal capture priority.' }
      ]},
      { type: 'prose', heading: 'What AG-12 changes in the field', paragraphs: [
        'Infested Nest difficulty was reduced in AG-12, so old reports of that encounter are no longer a clean benchmark. Re-test your squad and control plan rather than declaring the encounter solved or trivial.',
        'Required upgrade points were reduced for normal, elite and Boss soldiers. That changes the cost side of a soldier investment, not the evidence needed to compare builds. Patch-aware choices still beat a permanent “best squad” claim.'
      ]}
    ], sources: [steamStore, ag12, officialGameplay, launchAma], related: ['guide', 'tier-list', 'wiki']
  },
  {
    slug: 'tier-list',
    title: 'Pax Autocratica Tier List – Launch Core Watchlist',
    description: 'A versioned Pax Autocratica tier-list watchlist for 3 readable launch-build core fragments, with verified effects, synergies and testing priorities.',
    eyebrow: 'META WATCH · VERSIONED', h1: 'Pax Autocratica Tier List',
    dek: 'Three readable core cards are not “every item ranked.” They are enough to show roles, synergies and what should be tested first. Rankings will move with patches and real run data.',
    updated: '2026-08-13', status: 'Living guide', image: '/images/steam/shot-10.jpg', imageAlt: 'Three selectable core fragments in Pax Autocratica',
    sections: [
      { type: 'callout', heading: 'Why there is no fake S tier', text: 'Official screenshots prove effects, not drop rates, scaling curves, boss uptime or endgame performance. Publishing an “all weapons S–D” graphic now would be decoration pretending to be evidence.', tone: 'warning' },
      { type: 'table', heading: 'Launch watchlist', columns: ['Core', 'Early read', 'Confidence', 'Test next'], rows: [
        ['Drone EMP', 'High-value control against elites and bosses', 'Medium', 'Uptime, which abilities count, boss immunity cases'],
        ['Toxic-Drone Core', 'Promising only when Toxic Fog triggers reliably', 'Medium', 'Drone scaling and summon cap'],
        ['Retaliation Core', 'Safety plus burst for close-range builds', 'Medium', 'Guard refresh, damage snapshot and 4m practical range']
      ]},
      { type: 'prose', heading: 'How entries earn a real tier', paragraphs: [
        'A tier needs a patch version, difficulty, weapon, squad composition and repeatable result. A card that clears Standard quickly may collapse at a boss whose immunity switches off its control effect.',
        'The first useful dataset is simple: ten comparable runs per candidate, completion time, damage taken, captures secured, downs and boss time. Until then, “watchlist” is more honest — and more useful — than invented certainty.'
      ]},
      { type: 'gallery', heading: 'Cards in context', items: [{ src: '/images/steam/shot-11.jpg', alt: 'Core Fragment Collection showing twelve collected fragments', caption: 'The collection screen shows a broader combination space than the three readable cards. More entries will be added only when their text is legible and versioned.' }]},
      { type: 'steps', heading: 'Patch-aware testing protocol', intro: 'This protocol is for earning a test result, not manufacturing ranks.', items: [
        { title: 'Freeze the comparison', text: 'Record patch date, difficulty, weapon, squad, sector and candidate core before a run. AG-12 changed encounter difficulty and soldier-upgrade cost, so mixed-version results do not belong in one table.' },
        { title: 'Change one decision at a time', text: 'Keep the route and squad as stable as practical; record completion, damage taken, captures, downs and the target interaction you are testing.' },
        { title: 'Repeat before labeling', text: 'A single showcase run is context, not a tier. Keep “watchlist” language until repeatable, versioned results support a conditional conclusion.' }
      ]},
      { type: 'callout', heading: 'Stop conditions', text: 'Stop and leave an entry unrated when a patch changes the encounter, the text is unreadable, the test condition cannot be reproduced, or a result depends on a different build. No fake rank is better than a stale rank.', tone: 'warning' }
    ], sources: [steamStore, ag12, officialGameplay, launchTrailer], related: ['wiki', 'strategy', 'updates']
  },
  {
    slug: 'walkthrough',
    title: 'Pax Autocratica Walkthrough – Opening Objectives',
    description: 'A launch-build Pax Autocratica walkthrough for 2 opening colony directives and 3 Auryto sector objectives, with unverified boss details clearly marked.',
    eyebrow: 'OBJECTIVE INDEX · SPOILER-LIGHT', h1: 'Pax Autocratica Walkthrough',
    dek: 'The current evidence shows mission objectives and sectors, not a clean “Chapter 1–10” structure. This page follows the game’s own labels instead of forcing a fake campaign outline.',
    updated: '2026-08-13', status: 'Living guide', image: '/images/steam/shot-12.jpg', imageAlt: 'Victory Square placement objective in Pax Autocratica',
    sections: [
      { type: 'steps', heading: 'Opening colony directives', items: [
        { title: 'Repair Victory Square — 1/1', text: 'Use the opening directive marker and construction workflow. The square is a policy and enlistment hub, not just decoration.' },
        { title: 'Research High-Pressure Labor — 0/1', text: 'Complete this policy at Victory Square. Treat the tutorial completion as separate from whether the policy fits your desired regime.' }
      ]},
      { type: 'steps', heading: 'Auryto sector objective chain', items: [
        { title: 'Gain Auryto Sector Expedition Progress — 0/100%', text: 'The official screenshot frames sector progress as the main expedition objective.' },
        { title: 'Defeat Sattleri Sacred Altar — 0/1', text: 'This is the named sub-objective visible in the launch build.' },
        { title: 'Defeat Auryto Overlord', text: 'The objective title identifies an Overlord encounter; exact phases and counters remain unverified.' }
      ]},
      { type: 'gallery', heading: 'Objective proof', items: [
        { src: '/images/steam/citizen-management.jpg', alt: 'Opening Victory Square and policy objectives on the HUD', caption: 'Opening directive labels from an official Steam screenshot.' },
        { src: '/images/steam/shot-12.jpg', alt: 'Auryto Overlord sector objectives visible on the HUD', caption: 'Sector objective labels from an official launch screenshot.' }
      ]},
      { type: 'callout', heading: 'Walkthrough status', text: 'No claim is made that this is a full campaign walkthrough. The page will expand by named objective and sector as each route is played or officially documented.', tone: 'warning' }
      ,{ type: 'steps', heading: 'Pre-expedition checklist', intro: 'A short readiness pass keeps a missing input or UI state from looking like a route failure.', items: [
        { title: 'Make a manual save', text: 'Automatic save backups were added in AG-12, but a deliberate save before an expedition remains the cleanest recovery point.' },
        { title: 'Read the exact objective label', text: 'Confirm whether the HUD asks for sector progress, the Sacred Altar, or the Overlord. Do not substitute a broader “clear the area” goal for the named objective.' },
        { title: 'Check supplies and squad commands', text: 'Confirm the weapon, food/production handoff, and Move, Attack, Follow Me commands before departing. This is preparation, not a claimed full-route solution.' }
      ]},
      { type: 'table', heading: 'If an objective appears stuck', intro: 'This is a triage order, not a promise that every issue is already fixed.', columns: ['Check', 'What the official record says', 'Next safe action'], rows: [
        ['Prepare for Auryto progress', 'The Aug 11 patch fixed its objective-counting issue.', 'Update, reload the current save, and compare the exact objective text before reporting a new case.'],
        ['Toxic Fog Core trigger', 'The Aug 11 patch fixed a trigger issue.', 'Do not use an old failure report as proof of the current behavior; capture version and reproduction steps.'],
        ['Battle-stat UI on V', 'AG-12 lists the V-key battle-stat interface as a known issue.', 'Use other visible objective and squad information; report it rather than treating it as a solved keybind problem.']
      ]}
    ], sources: [steamStore, aug11Patch, ag12, officialGameplay, launchTrailer], related: ['guide', 'strategy', 'updates']
  },
  {
    slug: 'review',
    title: 'Pax Autocratica Review – Is It Worth Buying?',
    description: 'An evidence-based Pax Autocratica Early Access buyer guide covering the gameplay loop, current features, trade-offs and who should wait for updates.',
    eyebrow: 'BUYER BRIEF · NO SCORE YET', h1: 'Pax Autocratica Review – Should You Buy It?',
    dek: 'Not a pretend “20-hour review” written one day after launch. This is a buying decision built from the shipped feature list, launch media, developer answers and the project’s unusually long road to Early Access.',
    updated: '2026-08-13', status: 'Verified for EA launch', image: '/images/steam/colony-night.jpg', imageAlt: 'First-person electric bow combat in Pax Autocratica',
    sections: [
      { type: 'facts', heading: 'Current purchase facts', items: [
        { label: 'Release state', value: 'Early Access since Aug 10, 2026', status: 'live' },
        { label: 'Platform', value: 'Windows PC', status: 'live' },
        { label: 'Mode', value: 'Single-player', status: 'live' },
        { label: 'Input', value: 'Full controller support listed', status: 'live' },
        { label: 'Co-op', value: 'Developer plan for post-EA launch; not shipped', status: 'planned' }
      ]},
      { type: 'table', heading: 'Buy / wait filter', columns: ['Buy now if…', 'Wait if…'], rows: [
        ['You want colony simulation and first-person roguelite combat to feed one another.', 'You need co-op, Linux/macOS support or a finished campaign.'],
        ['You enjoy learning interacting systems while balance is still moving.', 'You dislike Early Access systems changing under your save or strategy.'],
        ['You like squad combat, capture and morally ugly policy choices in a satirical setting.', 'You only want a deep factory sim or only want a polished standalone shooter.']
      ]},
      { type: 'prose', heading: 'The compelling bit', paragraphs: [
        'Most hybrids place two genres next to each other. Pax Autocratica’s stronger idea is that absence has a cost: the colony keeps running while you are in the field, and the people you capture can become labor, soldiers or sacrifice. The resource loop and the moral loop are the same machine.',
        'The risk is equally specific. This project changed direction from Earth From Another Sun and the developers say the current design is now the commitment. Early Access is where that promise will be tested, so cautious players are reasonable to wait for patch cadence and broader reviews.'
      ]},
      { type: 'video', heading: 'Watch the shipped loop before buying', videoId: 'G3OkYGmB3cY', title: 'Pax Autocratica Early Access launch trailer', summary: 'The official trailer shows colony construction, squad combat, large battlefields, capture and bullet-hell effects. It is marketing footage, so use it to understand the loop — not as a performance benchmark.' }
      ,{ type: 'facts', heading: 'Steam review pulse — Aug 13 snapshot', items: [
        { label: 'All-language review count', value: '825 total: 740 positive and 85 negative', status: 'observed' },
        { label: 'Positive share', value: '89.7% (740 of 825), calculated from that snapshot', status: 'observed' },
        { label: 'How to read it', value: 'A time-stamped store pulse, not proof of long-term quality or a substitute for your own fit', status: 'observed' }
      ]},
      { type: 'prose', heading: 'What player questions can and cannot tell you', paragraphs: [
        'Steam Community reviews are useful for spotting recurring buyer questions: save or quest reliability, progression choices around aging and Exile, combat clarity, and whether Early Access scope or co-op timing fits a purchase. They are reader observations, not first-party mechanism evidence.',
        'The buyer risk is clear: patches can improve a specific rough edge while Early Access systems, balance and the roadmap remain in motion. Buy for the present solo colony-and-squad loop; wait if you need a settled route, measured performance guarantee, or co-op delivery date.'
      ]},
      { type: 'video', heading: 'See a longer official play session', videoId: 'P_mDDybzjEw', title: 'Official Pax Autocratica gameplay video (12:23)', summary: 'Use this official video beside the trailer to judge whether the colony-to-expedition rhythm appeals to you. It demonstrates the loop; it does not certify frame rate, final balance, or future roadmap delivery.' }
    ], sources: [steamStore, launchRoadmap, steamReviews, launchTrailer, officialGameplay, launchAma], related: ['requirements', 'multiplayer', 'guide']
  },
  {
    slug: 'multiplayer',
    title: 'Pax Autocratica Multiplayer Guide – Co-op Explained',
    description: 'Pax Autocratica is currently single-player on Steam. Co-op is planned during Early Access; no public ETA, crossplay or matchmaking details are confirmed.',
    eyebrow: 'STATUS CHECK · AUG 11', h1: 'Pax Autocratica Multiplayer Guide',
    dek: 'Co-op is a real developer plan, but it is not a launch feature. Crossplay and matchmaking guides would be fiction right now.',
    updated: '2026-08-13', status: 'Official status check', image: '/images/steam/shot-15.jpg', imageAlt: 'A player commanding AI soldiers in a Pax Autocratica expedition',
    sections: [
      { type: 'facts', heading: 'Mode status', items: [
        { label: 'Single-player', value: 'Available and listed on Steam', status: 'live' },
        { label: 'AI squad commands', value: 'Move, Attack and Follow Me are visible', status: 'live' },
        { label: 'Online co-op', value: 'Planned after the Early Access launch', status: 'planned' },
        { label: 'Split-screen', value: 'Developer says co-op comes first and performance makes it unlikely, though not formally abandoned', status: 'planned' },
        { label: 'Crossplay / matchmaking', value: 'No verified announcement', status: 'observed' }
      ]},
      { type: 'faq', heading: 'Common multiplayer questions', items: [
        { q: 'Why do I have a squad if the game is single-player?', a: 'Your soldiers are AI-controlled units you can command during expeditions. Squad play is part of the single-player loop.' },
        { q: 'When is co-op coming?', a: 'There is no verified date. The developer described it as work planned after the Early Access launch.' },
        { q: 'Can I fix “multiplayer not working”?', a: 'There is no multiplayer feature to troubleshoot in the current Steam build. Avoid third-party pages claiming there is matchmaking or crossplay setup.' }
      ]},
      { type: 'prose', heading: 'Roadmap reading, without wishful setup guides', paragraphs: [
        'The official launch roadmap explicitly lists Online Co-op. It still gives no ETA, crossplay promise, matchmaking format, party size, or platform detail. “Listed” means planned, not ready to configure.',
        'For now, the solo squad loop is the real answer: one player runs the colony and commands AI soldiers through expeditions with Move, Attack and Follow Me. That is not a hidden co-op mode, and it does not require a matchmaking workaround.'
      ]}
    ], sources: [steamStore, launchRoadmap, launchAma, steamDiscussions], related: ['review', 'official-links', 'updates']
  },
  {
    slug: 'requirements',
    title: 'Pax Autocratica System Requirements & PC Checklist',
    description: 'Official Pax Autocratica minimum and recommended PC requirements, plus a practical launch checklist for Windows, storage, GPU memory and controller support.',
    eyebrow: 'PC DESK · OFFICIAL SPECS', h1: 'Can your PC run Pax Autocratica?',
    dek: 'The official floor starts at 16 GB RAM and 40 GB storage. GPU targets change between 1080p and 1440p, so VRAM matters more than a one-line “GTX 1060 minimum” summary suggests.',
    updated: '2026-08-13', status: 'Official status check', image: '/images/steam/battlefield-mechs.jpg', imageAlt: 'Explosive large-scale battle in Pax Autocratica',
    sections: [
      { type: 'table', heading: 'Official PC specifications', columns: ['Component', 'Minimum', 'Recommended'], rows: [
        ['OS', 'Windows 10 64-bit', 'Windows 10 64-bit'],
        ['CPU', 'Intel i5-8600 / Ryzen 5 1600X', 'Intel i7-8700K / Ryzen 5 3600 or equivalent'],
        ['Memory', '16 GB RAM', '16 GB RAM'],
        ['GPU', '1080p: GTX 1060 6 GB / RX 480 6 GB; 1440p: GTX 1070 8 GB / Vega 56 8 GB', 'RTX 2060 Super / RX 5700 XT, 8 GB+ VRAM'],
        ['DirectX', 'Version 11', 'Version 11'],
        ['Storage', '40 GB available', '40 GB available']
      ]},
      { type: 'steps', heading: 'Before you launch', items: [
        { title: 'Leave storage headroom', text: 'The 40 GB figure is available space, not a promise that patching will never need temporary room.' },
        { title: 'Match the resolution target', text: 'The minimum listing separates 1080p and 1440p GPUs. Do not use the 1080p minimum as a 1440p promise.' },
        { title: 'Update the GPU driver', text: 'Large-scale battlefields, particles and bullet-hell effects are exactly where stale drivers tend to expose instability.' },
        { title: 'Start with the right input expectation', text: 'Steam lists full controller support, but community history includes earlier control complaints. Recheck bindings after major patches.' }
      ]},
      { type: 'steps', heading: 'Launch stability checklist', intro: 'These checks describe known patch status, not a performance promise for every PC.', items: [
        { title: 'Update before testing FSR frame generation', text: 'AG-12 fixed an FSR frame-generation crash. Apply the current update first, then test the setting on your own hardware rather than assuming universal stability.' },
        { title: 'Verify the Turkish locale if you use it', text: 'AG-12 includes a Turkish locale model fix. Treat it as a targeted correction, not a claim that every localization issue is resolved.' },
        { title: 'Keep a recovery point', text: 'AG-12 added automatic save backups for interrupted saves; a manual save before major changes remains sensible.' },
        { title: 'Know the current V-key limitation', text: 'AG-12 still lists the battle-stat interface on V as a known issue. It should not be used as a benchmark or a reason to promise a flawless launch build.' }
      ]}
    ], sources: [steamStore, ag12, steamDiscussions], related: ['review', 'guide', 'updates']
  },
  {
    slug: 'updates',
    title: 'Pax Autocratica Updates – Early Access Patch Tracker',
    description: 'A concise Pax Autocratica update tracker connecting official patch notes to the guides, systems and strategies they change.',
    eyebrow: 'CHANGELOG · PLAYER IMPACT', h1: 'Updates that change how you play',
    dek: 'Patch notes are useful only when they tell you which old advice is now wrong. This tracker keeps the mechanical change and the Wiki impact together.',
    updated: '2026-08-13', status: 'Living guide', image: '/images/steam/capture-system.jpg', imageAlt: 'Capturing an enemy during a Pax Autocratica battle',
    sections: [
      { type: 'table', heading: 'Launch timeline', columns: ['Date', 'Official change', 'Why players care'], rows: [
        ['Aug 12, 2026', 'Directive AG-12: Soldier Aging toggle, Exile, automatic save backups, manual deposit quantity, Infested Nest difficulty reduction, lower soldier-upgrade point requirements', 'Recheck roster policy, deposits, recovery habits and older Nest/upgrade advice against this patch'],
        ['Aug 11, 2026', 'State Maintenance Directive: save failures, Prepare for Auryto objective counting and Toxic Fog Core triggering addressed', 'Old reports of these exact failures are patch context, not automatic diagnoses for a current issue'],
        ['Aug 10, 2026', 'Early Access launch on Steam', 'The live game becomes the authority over demo-era advice'],
        ['Jun 30, 2026', 'Aged status, enlistment staging, crafting timer, UI auto-pause, capture and auto-assign tuning', 'Worker lifecycle and capture behavior changed'],
        ['Jun 26, 2026', 'Difficulty modifiers and Elysia Oasis tuning', 'Old difficulty impressions may be stale'],
        ['Jun 14, 2026', 'Guaranteed melee ammo, stunned humanoids below 25%, Transport Hub, sensitivity fixes', 'Directly changes ammo, capture and expedition logistics'],
        ['Mar 6, 2026', 'Controller support, more capturable enemy types, social interactions, construction improvements', 'Older demo complaints need rechecking']
      ]},
      { type: 'callout', heading: 'Version rule', text: 'Any guide that cannot name the build or checked date is a rumor with formatting. Every page here displays its last evidence review.', tone: 'intel' },
      { type: 'table', heading: 'AG-12 player impact', columns: ['Shipped change', 'Practical impact', 'Do not infer'], rows: [
        ['Soldier Aging toggle and Exile', 'Review roster policy before removing or retaining soldiers.', 'A universally best toggle choice or a numeric economy result.'],
        ['Automatic save backups', 'Keep a recovery path for interrupted saves.', 'That all save-loss scenarios are prevented.'],
        ['Manual deposit quantity', 'Control how much input a building receives before an expedition.', 'Exact limits or an optimal stockpile level.'],
        ['Infested Nest difficulty reduction', 'Re-test the encounter instead of quoting a pre-patch pain point.', 'A numerical reduction or a guaranteed clear.'],
        ['Reduced soldier upgrade points', 'Revisit the cost of investing in normal, elite and Boss soldiers.', 'A permanent best build or undisclosed point values.']
      ]},
      { type: 'callout', heading: 'Current known issue', text: 'AG-12 lists the V-key battle-stat interface as a known issue. It is not marked fixed here: use other visible objective and squad information, and include patch/version details in a report.', tone: 'warning' },
      { type: 'table', heading: 'Official roadmap: planned, not shipped', columns: ['Roadmap item', 'Status on Aug 13', 'What is not announced'], rows: [
        ['Prisoner conversion v2, affinity/interactions, soldier marriage and sexual relationships, colony crises', 'Planned on the official launch roadmap.', 'Order, dates and final implementation.'],
        ['Strengthen soldiers, more Credchips and achievements', 'Planned on the official launch roadmap.', 'Values, unlock conditions and patch assignment.'],
        ['Online Co-op, third sector and fourth sector', 'Planned on the official launch roadmap.', 'ETA, crossplay, matchmaking and current availability.']
      ]},
      { type: 'gallery', heading: 'Official roadmap image', items: [{ src: '/images/steam/roadmap-2026.jpg', alt: 'Official Pax Autocratica 2026 Early Access roadmap image', caption: 'Official Steam roadmap media from the Aug 10 Early Access news. It records planned scope, not a delivery guarantee.' }]}
    ], sources: [steamStore, ag12, aug11Patch, launchRoadmap, launchAma], related: ['guide', 'wiki', 'tier-list']
  },
  {
    slug: 'official-links',
    title: 'Pax Autocratica Official Links, Community & Scam Warning',
    description: 'Verified Pax Autocratica official website, Steam, Discord, YouTube and community links, plus the developer’s warning about an impersonation domain.',
    eyebrow: 'LINK CHECK · STAY SAFE', h1: 'Official links, with the fake removed',
    dek: 'The developer has publicly warned about a look-alike hyphenated domain. Use this page as a clean jump list; this fan site never sells keys, accepts payments or claims affiliation.',
    updated: '2026-08-13', status: 'Official status check', image: '/images/steam/header.jpg', imageAlt: 'Pax Autocratica Steam header artwork',
    sections: [
      { type: 'callout', heading: 'Impersonation warning', text: 'The official notice says paxautocratica.com is the only official website and identifies pax-autocratica.com as fraudulent. Do not send payments, crypto or account details to look-alike sites.', tone: 'warning' },
      { type: 'table', heading: 'Verified destinations', columns: ['Destination', 'URL', 'Use it for'], rows: [
        ['Official website', 'paxautocratica.com', 'First-party game presentation'],
        ['Steam store', 'store.steampowered.com/app/1067360', 'Purchase, feature list and requirements'],
        ['Steam discussions', 'steamcommunity.com/app/1067360/discussions', 'Bug reports and player questions'],
        ['Discord', 'discord.gg/U2WCanzz7e', 'Support tickets and community'],
        ['YouTube', 'youtube.com/@PaxAutocratica', 'Official trailers and videos'],
        ['X', 'x.com/PaxAutocratica', 'Short announcements'],
        ['Subreddit', 'reddit.com/r/PaxAutocratica', 'Community conversation']
      ]},
      { type: 'prose', heading: 'Merch and backer items', paragraphs: [
        'No current public official merchandise store was verified during this review. Older Earth From Another Sun backer rewards and roles are handled through the official Discord/support path; do not treat resale listings or old package descriptions as current Pax Autocratica products.',
        'Multiverse says 1% of Pax Autocratica net revenue is pledged to the Norwegian Refugee Council. That is a studio commitment, not a Wiki affiliate promotion.'
      ]},
      { type: 'steps', heading: 'Backer recovery and Discord claim steps', intro: 'Follow the official support path; do not post order details, account credentials or payment information in public threads.', items: [
        { title: 'Start from an official destination', text: 'Open the official site, Steam discussions, or the listed Discord rather than a resale page or look-alike domain.' },
        { title: 'Use the backer support thread as the process reference', text: 'The thread points backers toward Discord/support handling. Keep the original entitlement or purchase evidence private and follow the current staff instructions there.' },
        { title: 'Ask before treating an old package as current stock', text: 'As checked Aug 13, no official Pax Autocratica merchandise store was verified. Resale and historic package listings are not current official products.' }
      ]}
    ], sources: [officialSite, officialLinks, steamHub, officialGameplay, backerSupport], related: ['about', 'updates', 'review']
  },
  {
    slug: 'about',
    title: 'About The Autocrat’s Index – Editorial & Source Policy',
    description: 'How this independent Pax Autocratica fan Wiki verifies gameplay facts, labels Early Access changes, credits media and corrects mistakes.',
    eyebrow: 'THE EDIT DESK', h1: 'A fan guide with receipts',
    dek: 'This is not the official site, not a key seller and not an AI content farm. It is a launch-day field manual that would rather show an honest blank than fill one with fiction.',
    updated: '2026-08-13', status: 'Editorial policy', image: '/images/steam/core-build.jpg', imageAlt: 'Industrial colony structures in Pax Autocratica',
    sections: [
      { type: 'facts', heading: 'Publishing rules', items: [
        { label: 'Official', value: 'Developer, game website, Steam store or developer-authored update', status: 'live' },
        { label: 'Observed', value: 'Readable in official media but not reproduced in our own save', status: 'observed' },
        { label: 'Planned', value: 'Developer intention with no shipped date', status: 'planned' }
      ]},
      { type: 'prose', heading: 'What we will not do', paragraphs: [
        'We do not manufacture a full tier list because the keyword exists. We do not turn a community guess into a mechanic. We do not call a marketing screenshot a benchmark, or a developer plan a feature.',
        'Screenshots on this site come from the official Steam media set and are used for commentary, identification and instruction with source credit. Pax Autocratica and its artwork belong to Multiverse. This site is independent and unaffiliated.'
      ]},
      { type: 'steps', heading: 'Correction protocol', items: [
        { title: 'Name the claim', text: 'A correction should identify the page and exact statement, not just say “wrong.”' },
        { title: 'Bring a version', text: 'Early Access changes quickly. Include the patch date, screenshot or official note.' },
        { title: 'Update the evidence label', text: 'When a planned feature ships or an observed value is reproduced, its label changes and the page date moves.' }
      ]},
      { type: 'steps', heading: 'Claim-level sourcing method', items: [
        { title: 'Attach the strongest source to the narrowest claim', text: 'A store listing supports current platform and feature labels; an official patch note supports the named patch change; official video supports visible context, not hidden values.' },
        { title: 'Keep source classes separate', text: 'Community reviews and independent videos can surface a question worth checking. They are not first-party evidence and do not become mechanism proof by repetition.' },
        { title: 'Say what the source cannot establish', text: 'Where a patch omits a number, an ETA, a crossplay detail or a performance threshold, the page labels it unknown rather than filling the gap.' }
      ]},
      { type: 'prose', heading: 'Review snapshots, freshness and corrections', paragraphs: [
        'Steam review totals are recorded as a dated all-language snapshot with the displayed positive and negative counts. A percentage calculated from that snapshot describes the moment it was checked, not a quality verdict, forecast, or substitute for reading current buyer concerns.',
        'Material factual expansions move a page’s checked date. A correction should replace or qualify the exact claim, name the newer source and preserve the distinction between shipped, observed and planned. Unverified reports stay signals until a stronger source supports them.'
      ]}
    ], sources: [officialSite, steamStore, steamReviews, officialGameplay, launchAma], related: ['official-links', 'updates', 'wiki']
  }
];

export const pageMap = Object.fromEntries(pages.map((page) => [page.slug, page]));

export const sitemapLastmodByPathname = Object.freeze({
  '/': homepageUpdated,
  ...Object.fromEntries(pages.map((page) => [`/${page.slug}/`, page.updated]))
});

export const searchRecords = pages.map((page) => ({
  title: page.h1,
  slug: page.slug,
  description: page.description,
  terms: [page.title, page.dek, ...page.sections.map((section) => section.heading)].join(' ').toLowerCase()
}));

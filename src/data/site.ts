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
export const steamUrl = 'https://store.steampowered.com/app/1067360/Pax_Autocratica/';
export const officialUrl = 'https://paxautocratica.com/';

const steamStore: Source = { label: 'Pax Autocratica on Steam', url: steamUrl, kind: 'Store' };
const officialSite: Source = { label: 'Official Pax Autocratica website', url: officialUrl, kind: 'Official' };
const launchAma: Source = { label: 'Developer launch-day AMA', url: 'https://www.reddit.com/r/Games/comments/1vkcn3d/ama_developer_of_pax_autocratica_here_a/', kind: 'Developer AMA' };
const steamHub: Source = { label: 'Official Steam Community hub', url: 'https://steamcommunity.com/app/1067360', kind: 'Official' };
const steamDiscussions: Source = { label: 'Steam discussions', url: 'https://steamcommunity.com/app/1067360/discussions/', kind: 'Community' };
const officialLinks: Source = { label: 'Pinned official links', url: 'https://steamcommunity.com/app/1067360/discussions/0/595152778808013174/', kind: 'Official' };
const launchTrailer: Source = { label: 'Early Access launch trailer', url: 'https://www.youtube.com/watch?v=G3OkYGmB3cY', kind: 'Video' };

export const pages: GuidePage[] = [
  {
    slug: 'guide',
    title: 'Pax Autocratica Guide – Beginner Tips & How to Play',
    description: 'New to Pax Autocratica? This guide covers how to play, first-hour setup, core mechanics and 15 pro tips to rule your empire from day one.',
    eyebrow: 'START HERE · FIRST-HOUR ROUTE',
    h1: 'Pax Autocratica Guide – How to Play & Beginner Tips',
    dek: 'The game throws colony management, labor policy, crafting and a roguelite shooter at you almost at once. This route tells you what deserves attention first — and what can wait.',
    updated: '2026-08-11',
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
      ]}
    ],
    sources: [steamStore, steamHub, launchAma], related: ['wiki', 'strategy', 'walkthrough']
  },
  {
    slug: 'wiki',
    title: 'Pax Autocratica Wiki – Buildings, Weapons & More',
    description: 'Community-built Pax Autocratica wiki: complete lists of buildings, weapons, policies and NPCs with stats, costs and unlock conditions.',
    eyebrow: 'QUERY DESK · VERIFIED ENTRIES',
    h1: 'Pax Autocratica Wiki – Complete Database',
    dek: 'Searchable facts pulled from official launch media, developer notes and the current store listing. Unknown values stay unknown instead of being “helpfully” invented.',
    updated: '2026-08-11', status: 'Verified for EA launch',
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
      ]}
    ],
    sources: [steamStore, steamHub, launchAma], related: ['tier-list', 'guide', 'updates']
  },
  {
    slug: 'strategy',
    title: 'Pax Autocratica Strategy Guide – How to Win',
    description: 'Winning Pax Autocratica strategies: optimal openings, policy choices, economy management and military tips from hours of play.',
    eyebrow: 'FIELD DOCTRINE · NO FAKE META', h1: 'Pax Autocratica Strategy Guide',
    dek: 'A launch-day framework for making decisions. It explains trade-offs from confirmed mechanics instead of pretending one day of public data has produced a solved build.',
    updated: '2026-08-11', status: 'Living guide', image: '/images/steam/colony-overview.jpg', imageAlt: 'A large Pax Autocratica colony among alien rock formations',
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
      ]}
    ], sources: [steamStore, steamHub, launchAma], related: ['guide', 'tier-list', 'wiki']
  },
  {
    slug: 'tier-list',
    title: 'Pax Autocratica Tier List – Best Buildings & Policies',
    description: 'Ranked tier list of every building, weapon and policy in Pax Autocratica – S-tier picks, upgrade priorities and which options to skip.',
    eyebrow: 'META WATCH · VERSIONED', h1: 'Pax Autocratica Tier List',
    dek: 'Three readable core cards are not “every item ranked.” They are enough to show roles, synergies and what should be tested first. Rankings will move with patches and real run data.',
    updated: '2026-08-11', status: 'Living guide', image: '/images/steam/shot-10.jpg', imageAlt: 'Three selectable core fragments in Pax Autocratica',
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
      { type: 'gallery', heading: 'Cards in context', items: [{ src: '/images/steam/shot-11.jpg', alt: 'Core Fragment Collection showing twelve collected fragments', caption: 'The collection screen shows a broader combination space than the three readable cards. More entries will be added only when their text is legible and versioned.' }]}
    ], sources: [steamStore, steamHub, launchTrailer], related: ['wiki', 'strategy', 'updates']
  },
  {
    slug: 'walkthrough',
    title: 'Pax Autocratica Walkthrough – Full Campaign Guide',
    description: 'Step-by-step Pax Autocratica walkthrough covering every chapter, objective and boss fight. Complete campaign guide with checkpoints and loot.',
    eyebrow: 'OBJECTIVE INDEX · SPOILER-LIGHT', h1: 'Pax Autocratica Walkthrough',
    dek: 'The current evidence shows mission objectives and sectors, not a clean “Chapter 1–10” structure. This page follows the game’s own labels instead of forcing a fake campaign outline.',
    updated: '2026-08-11', status: 'Living guide', image: '/images/steam/shot-12.jpg', imageAlt: 'Victory Square placement objective in Pax Autocratica',
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
    ], sources: [steamStore, steamHub, launchTrailer], related: ['guide', 'strategy', 'updates']
  },
  {
    slug: 'review',
    title: 'Pax Autocratica Review – Is It Worth Buying?',
    description: 'Our Pax Autocratica review: gameplay, replay value, performance and verdict after 20+ hours. Should you buy the full release?',
    eyebrow: 'BUYER BRIEF · NO SCORE YET', h1: 'Pax Autocratica Review – Should You Buy It?',
    dek: 'Not a pretend “20-hour review” written one day after launch. This is a buying decision built from the shipped feature list, launch media, developer answers and the project’s unusually long road to Early Access.',
    updated: '2026-08-11', status: 'Verified for EA launch', image: '/images/steam/colony-night.jpg', imageAlt: 'First-person electric bow combat in Pax Autocratica',
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
    ], sources: [steamStore, launchAma, launchTrailer], related: ['requirements', 'multiplayer', 'guide']
  },
  {
    slug: 'multiplayer',
    title: 'Pax Autocratica Multiplayer Guide – Co-op Explained',
    description: 'How multiplayer works in Pax Autocratica: co-op setup, crossplay, matchmaking and common connection issues, solved.',
    eyebrow: 'STATUS CHECK · AUG 11', h1: 'Pax Autocratica Multiplayer Guide',
    dek: 'Co-op is a real developer plan, but it is not a launch feature. Crossplay and matchmaking guides would be fiction right now.',
    updated: '2026-08-11', status: 'Official status check', image: '/images/steam/shot-15.jpg', imageAlt: 'A player commanding AI soldiers in a Pax Autocratica expedition',
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
      ]}
    ], sources: [steamStore, launchAma, steamDiscussions], related: ['review', 'official-links', 'updates']
  },
  {
    slug: 'requirements',
    title: 'Pax Autocratica System Requirements & PC Checklist',
    description: 'Official Pax Autocratica minimum and recommended PC requirements, plus a practical launch checklist for Windows, storage, GPU memory and controller support.',
    eyebrow: 'PC DESK · OFFICIAL SPECS', h1: 'Can your PC run Pax Autocratica?',
    dek: 'The official floor starts at 16 GB RAM and 40 GB storage. GPU targets change between 1080p and 1440p, so VRAM matters more than a one-line “GTX 1060 minimum” summary suggests.',
    updated: '2026-08-11', status: 'Official status check', image: '/images/steam/battlefield-mechs.jpg', imageAlt: 'Explosive large-scale battle in Pax Autocratica',
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
      ]}
    ], sources: [steamStore, steamDiscussions, steamHub], related: ['review', 'guide', 'updates']
  },
  {
    slug: 'updates',
    title: 'Pax Autocratica Updates – Early Access Patch Tracker',
    description: 'A concise Pax Autocratica update tracker connecting official patch notes to the guides, systems and strategies they change.',
    eyebrow: 'CHANGELOG · PLAYER IMPACT', h1: 'Updates that change how you play',
    dek: 'Patch notes are useful only when they tell you which old advice is now wrong. This tracker keeps the mechanical change and the Wiki impact together.',
    updated: '2026-08-11', status: 'Living guide', image: '/images/steam/capture-system.jpg', imageAlt: 'Capturing an enemy during a Pax Autocratica battle',
    sections: [
      { type: 'table', heading: 'Launch timeline', columns: ['Date', 'Official change', 'Why players care'], rows: [
        ['Aug 10, 2026', 'Early Access launch on Steam', 'The live game becomes the authority over demo-era advice'],
        ['Jun 30, 2026', 'Aged status, enlistment staging, crafting timer, UI auto-pause, capture and auto-assign tuning', 'Worker lifecycle and capture behavior changed'],
        ['Jun 26, 2026', 'Difficulty modifiers and Elysia Oasis tuning', 'Old difficulty impressions may be stale'],
        ['Jun 14, 2026', 'Guaranteed melee ammo, stunned humanoids below 25%, Transport Hub, sensitivity fixes', 'Directly changes ammo, capture and expedition logistics'],
        ['Mar 6, 2026', 'Controller support, more capturable enemy types, social interactions, construction improvements', 'Older demo complaints need rechecking']
      ]},
      { type: 'callout', heading: 'Version rule', text: 'Any guide that cannot name the build or checked date is a rumor with formatting. Every page here displays its last evidence review.', tone: 'intel' }
    ], sources: [steamHub, steamStore, launchAma], related: ['guide', 'wiki', 'tier-list']
  },
  {
    slug: 'official-links',
    title: 'Pax Autocratica Official Links, Community & Scam Warning',
    description: 'Verified Pax Autocratica official website, Steam, Discord, YouTube and community links, plus the developer’s warning about an impersonation domain.',
    eyebrow: 'LINK CHECK · STAY SAFE', h1: 'Official links, with the fake removed',
    dek: 'The developer has publicly warned about a look-alike hyphenated domain. Use this page as a clean jump list; this fan site never sells keys, accepts payments or claims affiliation.',
    updated: '2026-08-11', status: 'Official status check', image: '/images/steam/header.jpg', imageAlt: 'Pax Autocratica Steam header artwork',
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
      ]}
    ], sources: [officialSite, officialLinks, steamHub], related: ['about', 'updates', 'review']
  },
  {
    slug: 'about',
    title: 'About The Autocrat’s Index – Editorial & Source Policy',
    description: 'How this independent Pax Autocratica fan Wiki verifies gameplay facts, labels Early Access changes, credits media and corrects mistakes.',
    eyebrow: 'THE EDIT DESK', h1: 'A fan guide with receipts',
    dek: 'This is not the official site, not a key seller and not an AI content farm. It is a launch-day field manual that would rather show an honest blank than fill one with fiction.',
    updated: '2026-08-11', status: 'Editorial policy', image: '/images/steam/core-build.jpg', imageAlt: 'Industrial colony structures in Pax Autocratica',
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
      ]}
    ], sources: [officialSite, steamStore, launchAma], related: ['official-links', 'updates', 'wiki']
  }
];

export const pageMap = Object.fromEntries(pages.map((page) => [page.slug, page]));

export const searchRecords = pages.map((page) => ({
  title: page.h1,
  slug: page.slug,
  description: page.description,
  terms: [page.title, page.dek, ...page.sections.map((section) => section.heading)].join(' ').toLowerCase()
}));

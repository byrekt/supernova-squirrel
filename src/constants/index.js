export const DEFAULT_SET = { name: '', description: '', crossBars: [{ setNumber: 1 }], job: 'paladin' };

export const JOB_ORDER = [
  'paladin',
  'warrior',
  'dark_knight',
  'white_mage',
  'scholar',
  'astrologian',
  'monk',
  'dragoon',
  'ninja',
  'samurai',
  'bard',
  'machinist',
  'black_mage',
  'summoner',
  'red_mage'
]

export const CATEGORY_ORDER = [
  'Job Actions',
  'Role Actions',
  'Pet Actions (Eos)',
  'Pet Actions (Selene)',
  'Pet Actions (Emerald Carbuncle)',
  'Pet Actions (Topaz Carbuncle)',
  'Pet Actions (Garuda-Egi)',
  'Pet Actions (Ifrit-Egi)',
  'Pet Actions (Titan-Egi)',
  'Pet Management',
  'General Actions',
  'PvP Actions',
  'Additional PvP Actions',
  'Adrenaline Rush'
]

export const media = {
  desktop: '@media only screen and (min-width: 768px)',
  phone: '@media only screen and (max-width: 767px)',
  portrait: '@media only screen and (max-width: 767px) and (orientation: portrait)'
}

export const backgrounds = {
  carbon_fiber: `background:
    radial-gradient(black 15%, transparent 16%) 0 0,
    radial-gradient(black 15%, transparent 16%) 8px 8px,
    radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px,
    radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 8px 9px;
    background-color:#282828;
    background-size:16px 16px;`,
  starry_night: `background-color:black;
    background-image:
    radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px),
    radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px),
    radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px),
    radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 30px);
    background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px; 
    background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;`
}

export const theme = {
  foreground: '#777',
  background: '#000',
  nested: '#888',
  border: '#000',
  text: '#ad9b8b'
}
// Edit this file to update the site's content.
export const CONTACT_EMAIL = 'hello@hawkelabs.uk'

export const services = [
  { icon: '📱', title: 'Mobile Apps', text: 'Native-feeling iOS and Android apps, from first sketch to App Store launch.' },
  { icon: '🎮', title: 'Game Development', text: 'Indie and casual games with tight gameplay loops and polished feel.' },
  { icon: '🌐', title: 'Web Apps', text: 'Fast, modern web applications and tools built to scale with you.' },
  { icon: '✨', title: 'UI / UX Design', text: 'Clean interfaces and smooth interactions that people enjoy using.' },
]

// Projects shown under "Our work". Set link to a URL (e.g. a Play Store page) once one exists.
export const projects = [
  {
    name: 'Kestrel', type: 'App', status: 'In development',
    text: 'All the news you follow in one place. A fast RSS reader with 580+ suggested feeds, folders, offline reading, muted words and a home-screen widget.',
    tags: ['Android', 'RSS', 'Google Play'], link: null, hue: 190,
  },
  {
    name: 'Train Explorer', type: 'Game', status: 'In development',
    text: 'A multiplayer survival adventure aboard one shared train. Explore the world, craft, trade, research and fend off bandits and wildlife together.',
    tags: ['PC', 'Multiplayer', 'Unity'], link: null, hue: 280,
  },
  {
    name: 'Medieval Command', type: 'Game', status: 'In development',
    text: 'Real-time medieval strategy for mobile. Gather resources, raise buildings, command your army and hold back waves of enemies.',
    tags: ['Android', 'Strategy', 'Unity'], link: null, hue: 330,
  },
]

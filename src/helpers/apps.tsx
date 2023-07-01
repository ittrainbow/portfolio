import * as icon from './icons'
import dices from '../assets/dices.jpg'
import landing from '../assets/landing.jpg'
import mafia from '../assets/mafia.jpg'
import packers from '../assets/packers.jpg'
import player from '../assets/player.jpg'
import qb from '../assets/qb.jpg'
import taskmanager from '../assets/taskmanager.jpg'
import tickets from '../assets/tickets.jpg'

export const apps = [
  {
    title: 'Portfolio page',
    description: 'This page',
    stack: 'React, Tailwind',
    imgUrl: landing,
    url: '#',
    git: 'https://github.com/ittrainbow/portfolio',
    icons: [icon.ts, icon.react, icon.tailwind]
  },
  {
    title: 'React Native player',
    description: 'Audio player APK build',
    stack: 'React Native, Expo SDK',
    imgUrl: player,
    url: '',
    git: 'https://github.com/ittrainbow/player-native',
    icons: [icon.js, icon.reactNative, icon.expo],
    apk: 'player-native.apk'
  },
  {
    title: 'Prediction contest',
    description: 'Packers community web game',
    stack: 'React, Redux-Saga, Firebase',
    imgUrl: packers,
    git: 'https://github.com/ittrainbow/packbet',
    url: 'https://pack-contest.web.app/',
    icons: [icon.ts, icon.react, icon.saga, icon.firebase]
  },
  {
    title: 'Task manager',
    description: 'Job interview test task',
    stack: 'React, Redux-Saga, Firebase',
    imgUrl: taskmanager,
    git: 'https://github.com/ittrainbow/task-manager',
    url: 'https://fir-project-3cb69.web.app/',
    icons: [icon.ts, icon.react, icon.saga, icon.firebase]
  },
  {
    title: 'QA process app',
    description: 'Used for some of my projects',
    stack: 'React, Firebase',
    imgUrl: tickets,
    git: 'https://github.com/ittrainbow/ticketsapp',
    url: 'https://tickets-app-aeeed.web.app/',
    icons: [icon.js, icon.react, icon.firebase]
  },
  {
    title: 'Mafia app',
    description: 'Pomodoro timer web helper',
    stack: 'React, Firebase',
    imgUrl: mafia,
    git: 'https://github.com/ittrainbow/mafia-helper',
    url: 'https://circle-38cc7.web.app/',
    icons: [icon.js, icon.react, icon.firebase]
  },
  {
    title: 'QB Passer rating',
    description: 'What if DPIs stated as 1st downs',
    stack: 'React Tables, Firebase',
    imgUrl: qb,
    git: 'https://github.com/ittrainbow/qb-app',
    url: 'https://qb-rating-app.web.app/',
    icons: [icon.js, icon.reactTable, icon.firebase]
  },
  {
    title: 'Dice game',
    description: 'Web and APK via Ionic+Capacitor',
    stack: 'React, CSS',
    imgUrl: dices,
    git: 'https://github.com/ittrainbow/dice-react',
    url: 'https://gentle-fox-d0d62c.netlify.app/',
    icons: [icon.js, icon.react, icon.css],
    apk: 'two-dices.apk'
  }
]

import * as icon from './icons'
import projImg from '../assets/web-app.png'

export const projects = [
  {
    title: 'Portfolio page',
    description: 'This page',
    stack: 'Typescript, React, Tailwind',
    imgUrl: projImg,
    url: '#',
    git: 'https://github.com/ittrainbow/portfolio',
    icons: [icon.ts, icon.react, icon.tailwind]
  },
  {
    title: 'React Native player',
    description: 'Android mp3-player and APK-build',
    stack: 'Javascript, React Native, Expo SDK',
    imgUrl: projImg,
    url: '',
    git: 'https://github.com/ittrainbow/player-native',
    icons: [icon.js, icon.reactNative, icon.expo],
    apk: 'link'
  },
  {
    title: 'Prediction contest',
    description: 'Packers eastern-european community prediction contest',
    stack: 'Typescript, React, Redux-Saga, Firebase',
    imgUrl: projImg,
    git: 'https://github.com/ittrainbow/packbet',
    url: 'https://pack-contest.web.app/',
    icons: [icon.ts, icon.react, icon.saga, icon.firebase]
  },
  {
    title: 'QB Passer rating',
    description: 'QB passer rating with DPIs as 1st downs or TDs',
    stack: 'Javascript, React, React Tables, Firebase',
    imgUrl: projImg,
    git: 'https://github.com/ittrainbow/qb-app',
    url: 'https://qb-rating-app.web.app/',
    icons: [icon.js, icon.react, icon.reactTable, icon.firebase]
  },
  {
    title: 'Task manager',
    description: 'Job interview test task',
    stack: 'Typescript, React, Redux-Saga, Firebase',
    imgUrl: projImg,
    git: 'https://github.com/ittrainbow/task-manager',
    url: 'https://fir-project-3cb69.web.app/',
    icons: [icon.ts, icon.react, icon.saga, icon.firebase]
  },
  {
    title: 'QA process app',
    description: 'Quality assurance communication app used for some of mentioned projects',
    stack: 'Javascript, React, Firebase',
    imgUrl: projImg,
    git: 'https://github.com/ittrainbow/ticketsapp',
    url: 'https://tickets-app-aeeed.web.app/',
    icons: [icon.js, icon.react, icon.firebase]
  },
  {
    title: 'Dice game',
    description: 'Two dice game and APK compiled by Ionic and Capacitor',
    stack: 'Javascript, CSS',
    imgUrl: projImg,
    git: 'https://github.com/ittrainbow/dice-react',
    url: 'https://gentle-fox-d0d62c.netlify.app/',
    icons: [icon.js, icon.css],
    apk: 'link'
  },
  {
    title: 'Mafia app',
    description: 'Mafia game helper with pomodoro timer and audio player',
    stack: 'Javascript, React, Firebase',
    imgUrl: projImg,
    git: 'https://github.com/ittrainbow/mafia-helper',
    url: 'https://circle-38cc7.web.app/',
    icons: [icon.react, icon.firebase]
  }
]

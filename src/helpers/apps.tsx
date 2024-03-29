import * as icon from './icons'
import dices from '../assets/dices.jpg'
import landing from '../assets/landing.jpg'
import mafia from '../assets/mafia.jpg'
import packers from '../assets/packers.jpg'
import player from '../assets/player.jpg'
import taskmanager from '../assets/taskmanager.jpg'
import socketchat from '../assets/socketchat.jpg'
import tickets from '../assets/tickets.jpg'
import webrtc from '../assets/webrtc.jpg'

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
    title: 'Prediction contest',
    description: 'Packers community web game',
    stack: 'React, Redux-Saga, Firebase',
    imgUrl: packers,
    git: 'https://github.com/ittrainbow/packbet',
    url: 'https://pack-contest.web.app/',
    icons: [icon.ts, icon.react, icon.saga, icon.firebase]
  },
  {
    title: 'Audio player',
    description: 'React Native mp3 player + .apk',
    stack: 'React Native, Expo',
    imgUrl: player,
    url: '',
    git: 'https://github.com/ittrainbow/player-native',
    icons: [icon.js, icon.reactNative, icon.expo],
    apk: 'player-native.zip'
  },
  {
    title: 'Task manager',
    description: 'Job interview test task',
    stack: 'React, MongoDB, Apollo, GraphQL',
    imgUrl: taskmanager,
    git: 'https://github.com/ittrainbow/task-manager',
    url: 'https://fir-project-3cb69.web.app/',
    icons: [icon.ts, icon.mongo, icon.graphql, icon.apollo]
  },
  {
    title: 'QA processing app',
    description: 'Used for some of my projects',
    stack: 'React, MobX, Express, PostgreSQL',
    imgUrl: tickets,
    git: 'https://github.com/ittrainbow/qa-processing-app',
    url: 'https://tickets-app-aeeed.web.app/',
    icons: [icon.js, icon.react, icon.mobx, icon.postgres]
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
    title: 'Dice game',
    description: 'Web and .apk via Ionic & Capacitor',
    stack: 'React, CSS',
    imgUrl: dices,
    git: 'https://github.com/ittrainbow/dice-react',
    url: 'https://gentle-fox-d0d62c.netlify.app/',
    icons: [icon.js, icon.react, icon.css],
    apk: 'two-dices.zip'
  },
  {
    title: 'Socket chatrooms',
    description: 'Socket.io simple chat',
    stack: 'React, Express, Socket.io',
    imgUrl: socketchat,
    git: 'https://github.com/ittrainbow/socket-chat-client',
    url: 'https://beautiful-cassata-ceff31.netlify.app/',
    icons: [icon.ts, icon.express, icon.socketIo, icon.react]
  },
  {
    title: 'RTC caller',
    description: 'WebRTC multi-user video call app',
    stack: 'React, Express, Socket.io, WebRTC',
    imgUrl: webrtc,
    git: 'https://github.com/ittrainbow/webrtc-caller-client',
    url: 'https://ittr-multiuser-webrtc-call.web.app/',
    icons: [icon.js, icon.express, icon.webRTC, icon.react]
  }
]

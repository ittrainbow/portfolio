import {
  SiTypescript,
  SiJavascript,
  SiReduxsaga,
  SiTailwindcss,
  SiReact,
  SiFirebase,
  SiExpo,
  SiReacttable,
  SiCss3
} from 'react-icons/si'

import projImg from '../assets/web-app.png'

export const icons = {
  typescript: {
    icon: <SiTypescript className="text-blue-600 bg-white" />,
    alt: 'TypeScript'
  },
  javascript: {
    icon: <SiJavascript className="text-yellow-500 bg-black" />,
    alt: 'JavaScript'
  },
  react: {
    icon: <SiReact className="text-blue-700" />,
    alt: 'React'
  },
  reactnative: {
    icon: <SiReact className="text-violet-900" />,
    alt: 'React Native'
  },
  reduxsaga: {
    icon: <SiReduxsaga className="text-emerald-600" />,
    alt: 'Redux Saga'
  },
  reacttable: {
    icon: <SiReacttable className="text-stone-700" />,
    alt: 'React Table'
  },
  tailwindcss: {
    icon: <SiTailwindcss className="text-cyan-500" />,
    alt: 'Tailwind CSS'
  },
  css: {
    icon: <SiCss3 className="text-blue-700" />,
    alt: 'CSS'
  },
  expo: {
    icon: <SiExpo className="text-gray-900" />,
    alt: 'Expo SDK'
  },
  firebase: {
    icon: <SiFirebase className="text-orange-500" />,
    alt: 'Firebase'
  }
}

export const projects = [
  {
    title: 'Portfolio app',
    description: 'This app.',
    stack: 'Typescript, React, Tailwind',
    imgUrl: projImg,
    url: '#',
    github: '',
    icons: [icons.typescript, icons.react, icons.tailwindcss]
  },
  {
    title: 'MP3-player',
    description: 'Android mp3-player APK-file.',
    stack: 'Javascript, React Native, Expo SDK',
    imgUrl: projImg,
    url: '',
    github: 'https://github.com/ittrainbow/player-native',
    icons: [icons.javascript, icons.reactnative, icons.expo],
    apk: 'link'
  },
  {
    title: 'Prediction contest',
    description: 'Green Bay Packers russian-speaking community prediction contest.',
    stack: 'Typescript, React, Redux-Saga, Firebase',
    imgUrl: projImg,
    github: 'https://github.com/ittrainbow/packbet',
    url: 'https://pack-contest.web.app/',
    icons: [icons.typescript, icons.react, icons.reduxsaga, icons.firebase]
  },
  {
    title: 'QB Passer rating',
    description: 'Aaron Rodgers passer rating with DPIs counting as 1st down completions or TDs.',
    stack: 'Javascript, React, React Tables, Firebase',
    imgUrl: projImg,
    github: 'https://github.com/ittrainbow/qb-app',
    url: 'https://qb-rating-app.web.app/',
    icons: [icons.javascript, icons.react, icons.reacttable, icons.firebase]
  },
  {
    title: 'Task manager',
    description: 'Job interview test task.',
    stack: 'Typescript, React, Redux-Saga, Firebase',
    imgUrl: projImg,
    github: 'https://github.com/ittrainbow/task-manager',
    url: 'https://fir-project-3cb69.web.app/',
    icons: [icons.typescript, icons.react, icons.reduxsaga, icons.firebase]
  },
  {
    title: 'QA process app',
    description: 'Quality assurance communication app used for some of mentioned projects.',
    stack: 'Javascript, React, Firebase',
    imgUrl: projImg,
    github: 'https://github.com/ittrainbow/ticketsapp',
    url: 'https://tickets-app-aeeed.web.app/',
    icons: [icons.javascript, icons.react, icons.firebase]
  },
  {
    title: 'Dice game',
    description: 'Two dice game and APK compiled by Ionic and Capacitor.',
    stack: 'Javascript, CSS',
    imgUrl: projImg,
    github: 'https://github.com/ittrainbow/dice-react',
    url: 'https://gentle-fox-d0d62c.netlify.app/',
    icons: [icons.javascript, icons.css],
    apk: 'link'
  },
  {
    title: 'Mafia app',
    description: 'Mafia game helper with pomodoro timer and audio player.',
    stack: 'Javascript, React, Firebase',
    imgUrl: projImg,
    github: 'https://github.com/ittrainbow/mafia-helper',
    url: 'https://circle-38cc7.web.app/',
    icons: [icons.react, icons.firebase]
  }
]

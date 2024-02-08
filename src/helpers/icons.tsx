import { BsTelegram, BsGithub } from 'react-icons/bs'
import {
  SiYoutube,
  SiTwitter,
  SiMaildotru,
  SiTypescript,
  SiJavascript,
  SiReduxsaga,
  SiTailwindcss,
  SiReact,
  SiFirebase,
  SiExpo,
  SiReacttable,
  SiCss3,
  SiSocketdotio,
  SiWebrtc,
  SiMobx,
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiApollographql,
  SiGraphql
} from 'react-icons/si'
import { FaExternalLinkSquareAlt, FaFileDownload, FaInfoCircle } from 'react-icons/fa'

const linkIconStyles = 'pr-1 cursor-pointer text-slate-900 linktap'

export const github = (
  <a href="https://github.com/ittrainbow" className="linktap">
    <BsGithub className="cursor-pointer text-slate-200 text-opacity-90 bg-zinc-950 rounded-3xl" />
  </a>
)

export const githubLink = (link: string) => (
  <a href={link} className="linktap">
    <BsGithub className="text-slate-900" />
  </a>
)

export const externalLink = (url: string) => (
  <a href={url} className={linkIconStyles}>
    <FaExternalLinkSquareAlt />
  </a>
)

export const downloadLink = <FaFileDownload className={linkIconStyles} />

export const telegram = (
  <a href="https://t.me/ittrainbow" className="linktap">
    <BsTelegram className="bg-white cursor-pointer rounded-3xl text-sky-500" />
  </a>
)

export const youtube = (
  <a href="https://www.youtube.com/channel/UChRO1srqMVe1_oMMs8nTnyw" className="bg-white bg-cover rounded-3xl linktap">
    <SiYoutube className="text-red-600" />
  </a>
)

export const twitter = (
  <a href="https://twitter.com/ittrainbow">
    <SiTwitter className="text-sky-500" />
  </a>
)

export const mail = (
  <button onClick={() => (window.location.href = 'mailto:deadbead@gmail.com')}>
    <SiMaildotru className="text-orange-300" />
  </button>
)

export const ts = <SiTypescript className="text-blue-600 bg-white" />

export const js = <SiJavascript className="text-yellow-500 bg-black" />

export const react = <SiReact className="text-blue-700" />

export const mobx = <SiMobx className="bg-white rounded-sm text-amber-600 border-amber-600" />

export const reactNative = <SiReact className="text-violet-900" />

export const saga = <SiReduxsaga className="text-emerald-800" />

export const reactTable = <SiReacttable className="text-stone-700" />

export const tailwind = <SiTailwindcss className="text-cyan-600" />

export const css = <SiCss3 className="text-blue-700" />

export const expo = <SiExpo className="text-gray-900" />

export const express = <SiExpress className="text-gray-900" />

export const firebase = <SiFirebase className="text-orange-500" />

export const socketIo = <SiSocketdotio className="text-gray-900" />

export const webRTC = <SiWebrtc className="bg-green-600 rounded-full w-9 h-9" />

export const postgres = <SiPostgresql className="rounded-md bg-sky-700 w-9 h-9" />

export const mongo = <SiMongodb className="text-green-700 bg-slate-300 rounded-xl w-9 h-9" />

export const graphql = <SiGraphql className="text-pink-600 rounded-xl w-9 h-9" />

export const apollo = <SiApollographql className="text-gray-900 rounded-xl w-9 h-9" />

export const info = (hover: boolean) => {
  const classes = `${
    hover ? 'opacity-0' : 'opacity-10'
  } absolute w-10 h-10 p-2 text-slate-50 transition-all duration-300`
  return <FaInfoCircle className={classes} />
}

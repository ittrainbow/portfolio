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
  SiSocketdotio
} from 'react-icons/si'
import { FaExternalLinkSquareAlt, FaFileDownload } from 'react-icons/fa'

const linkIconStyles = 'pr-1 cursor-pointer text-slate-900'

export const github = (
  <a href="https://github.com/ittrainbow">
    <BsGithub className="cursor-pointer text-slate-200 text-opacity-90 bg-zinc-950 rounded-3xl" />
  </a>
)
export const githubLink = (link: string) => (
  <a href={link}>
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
  <a href="https://t.me/ittrainbow">
    <BsTelegram className="bg-white cursor-pointer rounded-3xl text-sky-500" />
  </a>
)

export const youtube = (
  <a
    href="https://www.youtube.com/channel/UChRO1srqMVe1_oMMs8nTnyw"
    className="bg-white bg-cover rounded-3xl"
  >
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

export const reactNative = <SiReact className="text-violet-900" />

export const saga = <SiReduxsaga className="text-emerald-800" />

export const reactTable = <SiReacttable className="text-stone-700" />

export const tailwind = <SiTailwindcss className="text-cyan-600" />

export const css = <SiCss3 className="text-blue-700" />

export const expo = <SiExpo className="text-gray-900" />

export const firebase = <SiFirebase className="text-orange-500" />

export const socketIo = <SiSocketdotio className="text-gray-900" />

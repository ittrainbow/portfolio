import { BsTelegram, BsGithub } from 'react-icons/bs'
import { SiYoutube, SiTwitter, SiMaildotru } from 'react-icons/si'
import { FaExternalLinkSquareAlt, FaFileDownload } from 'react-icons/fa'

const linkIconStyles = 'pr-1 cursor-pointer text-slate-900'

export const github = (
  <a href="https://github.com/ittrainbow">
    <BsGithub className="text-slate-200 text-opacity-90 cursor-pointer bg-zinc-950 rounded-3xl" />
  </a>
)
export const githubLink = (link: string) => (
  <a href={link}>
    <BsGithub className="text-slate-900" />
  </a>
)

export const externalLink = (url: string) => {
  return (
    <a href={url} className={linkIconStyles}>
      {url && url.length > 0 && <FaExternalLinkSquareAlt />}
    </a>
  )
}

export const downloadLink = (apk: string) => {
  return (
    <a href={apk} className={linkIconStyles}>
      {apk && apk.length > 0 && <FaFileDownload />}
    </a>
  )
}

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

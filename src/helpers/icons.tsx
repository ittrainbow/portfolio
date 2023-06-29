import { BsTelegram, BsGithub } from 'react-icons/bs'
import { SiYoutube, SiTwitter, SiMaildotru } from 'react-icons/si'

export const github = (
  <a href="https://github.com/ittrainbow">
    <BsGithub className="text-gray-200 cursor-pointer bg-zinc-950 rounded-3xl" />
  </a>
)

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

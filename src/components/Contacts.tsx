import { useRef, useEffect, useContext } from 'react'
import { SiTelegram, SiYoutube, SiTwitter, SiMaildotru } from 'react-icons/si'

import { useVisibility } from '../hooks/useVisibility'
import { Context } from '../context/Context'

export const Contacts = () => {
  const contactRef = useRef<HTMLDivElement>(null)
  const isInViewport = useVisibility(contactRef)
  const { setContactsInViewport } = useContext(Context)

  useEffect(() => {
    setContactsInViewport(isInViewport)
  }, [isInViewport])

  return (
    <div
      ref={contactRef}
      className={isInViewport ? 'animate-fade-up pt-20' : 'opacity-0 pt-20'}
      id="contacts"
    >
      <h2 className="mb-5 text-4xl font-bold text-center">Contacts</h2>
      <div className="grid px-5 py-5 place-items-center sm:px-0">
        <div className="text-center">
          <span className="py-2 font-sans text-3xl text-white ">Let's stay in touch.</span>
          <p className="max-w-lg py-2 mt-3 font-sans text-2xl text-gray-300 ">
            Preferred communication option is Telegram while e-mail will probably be gone unnoticed,
            but you can contact me on my social media.
          </p>
        </div>
        <div className="flex flex-row justify-center gap-3 pt-6 text-5xl ">
          <a href="https://t.me/ittrainbow">
            <SiTelegram className="bg-white rounded-3xl text-sky-500" />
          </a>
          <a
            href="https://www.youtube.com/channel/UChRO1srqMVe1_oMMs8nTnyw"
            className="bg-white bg-cover rounded-3xl"
          >
            <SiYoutube className="text-red-600" />
          </a>
          <a href="https://twitter.com/ittrainbow">
            <SiTwitter className="text-sky-500" />
          </a>
          <button onClick={() => (window.location.href = 'mailto:deadbead@gmail.com')}>
            <SiMaildotru className="text-orange-300" />
          </button>
        </div>
      </div>
    </div>
  )
}

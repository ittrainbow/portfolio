import { useRef, useContext, useEffect } from 'react'
import { Container } from 'react-bootstrap'
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
    <section className="pt-20" id="contacts">
      <Container>
        <div ref={contactRef} className="grid place-items-center">
          {isInViewport ? (
            <div className={isInViewport ? 'opacity-1' : 'opacity-0'}>
              <h2 className="mb-5 text-4xl font-bold text-center animate-fade-up">
                {isInViewport ? 'Contacts' : ''}
              </h2>
              <div className="text-center">
                <span className="py-2 font-sans text-3xl text-white ">Let's stay in touch.</span>
                <p className="max-w-lg py-2 mt-3 font-sans text-2xl text-gray-300 ">
                  Preferred communication option is Telegram while e-mail will probably be gone
                  unnoticed, but you can contact me on my social media.
                </p>
              </div>
              <div className="flex flex-row justify-center gap-3 pt-3 text-5xl ">
                <a className="bg-white rounded-3xl text-sky-500" href="https://t.me/ittrainbow">
                  <SiTelegram />
                </a>
                <a
                  className="text-red-600 bg-white rounded-3xl"
                  href="https://www.youtube.com/channel/UChRO1srqMVe1_oMMs8nTnyw"
                >
                  <SiYoutube />
                </a>
                <a className="text-sky-500" href="https://twitter.com/ittrainbow">
                  <SiTwitter />
                </a>
                <button
                  className="text-orange-300"
                  onClick={() => (window.location.href = 'mailto:deadbead@gmail.com')}
                >
                  <SiMaildotru />
                </button>
              </div>
            </div>
          ) : (
            <div className='p-72'></div>
          )}
        </div>
      </Container>
    </section>
  )
}

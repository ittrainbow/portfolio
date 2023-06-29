import { useRef, useEffect, useContext } from 'react'
import * as icons from '../helpers/icons'

import { useVisibility } from '../hooks/useVisibility'
import { Context } from '../context/Context'

export const Contacts = () => {
  const contactRef = useRef<HTMLDivElement>(null)
  const isInViewport = useVisibility(contactRef)
  const { contactsInViewport, setContactsInViewport } = useContext(Context)

  useEffect(() => {
    setContactsInViewport(isInViewport) // eslint-disable-next-line
  }, [isInViewport])

  const fadeClass = `${contactsInViewport ? 'animate-fade-up' : 'opacity-0'} pt-12 sm:py-12 `

  return (
    <div ref={contactRef} className={fadeClass} id="contacts">
      <h2 className="mb-5 text-4xl font-bold text-center">Contacts</h2>
      <div className="grid py-5 place-items-center sm:px-0 ">
        <div className="grid w-11/12 place-items-center">
          <span className="py-2 font-sans text-3xl text-white ">Let's stay in touch.</span>
          <p className="max-w-lg py-2 mt-3 font-sans text-2xl text-center text-gray-300">
            Preferred communication option is Telegram while e-mail will probably be gone unnoticed,
            but you can contact me on my social media.
          </p>
        </div>
        <div className="flex flex-row justify-center gap-3 pt-6 text-5xl ">
          {icons.telegram}
          {icons.github}
          {icons.youtube}
          {icons.twitter}
          {icons.mail}
        </div>
      </div>
    </div>
  )
}

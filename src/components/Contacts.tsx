import { useRef, useEffect, useContext } from 'react'
import * as icon from '../helpers/icons'

import { useVisibility } from '../hooks/useVisibility'
import { Context } from '../context/Context'
import { fadeStyle } from '../helpers/styles'

export const Contacts = () => {
  const headerRef = useRef<HTMLDivElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)
  const isHeaderInViewport = useVisibility(headerRef)
  const isBodyInViewport = useVisibility(headerRef)
  const { setContactsInViewport } = useContext(Context)

  useEffect(() => {
    setContactsInViewport(isHeaderInViewport) // eslint-disable-next-line
  }, [isHeaderInViewport])

  const fadeHeaderClass = `${fadeStyle(isHeaderInViewport)} mb-5 text-4xl font-bold text-center`
  const fadeBodyClass = `${fadeStyle(isBodyInViewport)} grid place-items-center sm:px-0 `

  return (
    <div ref={headerRef} className="pt-12 sm:py-12" id="contacts">
      <h2 className={fadeHeaderClass}>Contacts</h2>
      <div ref={bodyRef} className="py-5">
        <div className={fadeBodyClass}>
          <div className="grid w-11/12 place-items-center">
            <span className="py-2 font-sans text-3xl text-white ">Let's stay in touch.</span>
            <p className="max-w-lg py-2 mt-3 font-sans text-2xl text-center text-gray-300">
              Preferred communication option is Telegram while e-mail will probably be gone
              unnoticed, but you can contact me on my social media.
            </p>
          </div>
          <div className="flex flex-row justify-center gap-3 pt-6 text-5xl ">
            {icon.telegram}
            {icon.github}
            {icon.youtube}
            {icon.twitter}
            {icon.mail}
          </div>
        </div>
      </div>
    </div>
  )
}

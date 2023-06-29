import { useEffect, useRef, useContext } from 'react'

import { useVisibility } from '../hooks/useVisibility'
import { Context } from '../context/Context'

export const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null)
  const { contactsInViewport, setAboutInViewport } = useContext(Context)

  const text = `ittrainbow ${String.fromCodePoint(0x00a9)} 2023`

  const isInViewport = useVisibility(footerRef)

  useEffect(() => {
    contactsInViewport && setAboutInViewport(!isInViewport) // eslint-disable-next-line
  }, [isInViewport])

  return (
    <div className="py-12 text-center text-gray-400">
      <div ref={footerRef}>{text}</div>
    </div>
  )
}

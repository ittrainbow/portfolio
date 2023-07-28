import { useRef, useEffect, useContext } from 'react'

import ittr from '../assets/ittr.jpg'
import { Context } from '../context/Context'
import { useVisibility } from '../hooks/useVisibility'
import { pStyle, fadeStyle } from '../helpers/styles'

export const About = () => {
  const aboutHeaderRef = useRef<HTMLDivElement>(null)
  const aboutTextRef = useRef<HTMLDivElement>(null)
  const aboutPictureRef = useRef<HTMLDivElement>(null)

  const isHeaderInViewport = useVisibility(aboutHeaderRef)
  const isTextInViewport = useVisibility(aboutTextRef)
  const isPictureInViewport = useVisibility(aboutPictureRef)

  const { aboutInViewport, projectsInViewport, setAboutInViewport, setProjectsInViewport, mobile } =
    useContext(Context)

  useEffect(() => {
    !aboutInViewport && projectsInViewport && isHeaderInViewport && setProjectsInViewport(false)
    setAboutInViewport(isTextInViewport)
    // eslint-disable-next-line
  }, [isTextInViewport])

  const headerClass = `${fadeStyle(isHeaderInViewport)}`
  const textClass = `${fadeStyle(isTextInViewport && (mobile || aboutInViewport))} ${pStyle(mobile)}`
  const pictureClass = `${fadeStyle(
    isPictureInViewport && (mobile || aboutInViewport)
  )} rounded-[50px]`

  return (
    <div className="py-16" id="aboutme">
      <h2 ref={aboutHeaderRef} className="mb-5 text-4xl font-bold text-center">
        <div className={headerClass}>About me</div>
      </h2>
      <div className="grid py-5 place-items-center">
        <div className="grid w-11/12 grid-cols-1 gap-10 sm:w-3/4 sm:grid-cols-7">
          <div ref={aboutTextRef} className="text-left sm:col-span-4">
            <p className={textClass}>Few more words to introduce myself.</p>
            <p className={textClass}>
              I was born in Moscow in 1984 and lived in suburbs of a city ever since. Single.
            </p>
            <p className={textClass}>
              Besides mentioned before i spent my years working as sports journalist, technical
              writer at project institution and crypto-trader. Love bike-traveling and tech. After
              fully realising that my major speciality does not fit my life goals decided to switch
              into software engineering.
            </p>
            <p className={textClass}>
              Personal interests are sports (football, soccer, cycling), sci-fi and space,
              video-editing.
            </p>
          </div>
          <div ref={aboutPictureRef} className="sm:col-span-3">
            <img src={ittr} alt="" className={pictureClass} />
          </div>
        </div>
      </div>
    </div>
  )
}

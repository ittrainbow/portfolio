import { useRef, useEffect, useContext } from 'react'

import ittr from '../assets/ittr.jpg'
import { Context } from '../context/Context'
import { useVisibility } from '../hooks/useVisibility'
import { pStyle, fadeStyle } from '../helpers/styles'

export const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null)
  const isInViewport = useVisibility(aboutRef)
  const { aboutInViewport, projectsInViewport, setAboutInViewport, setProjectsInViewport, mobile } =
    useContext(Context)

  useEffect(() => {
    !aboutInViewport && projectsInViewport && isInViewport && setProjectsInViewport(false)
    setAboutInViewport(isInViewport)
    // eslint-disable-next-line
  }, [isInViewport])

  const fadeClass = `${fadeStyle(aboutInViewport)} py-16`

  return (
    <div ref={aboutRef} className={fadeClass} id="aboutme">
      <h2 className="mb-5 text-4xl font-bold text-center">About me</h2>
      <div className="grid py-5 place-items-center">
        <div className="grid w-11/12 grid-cols-1 gap-10 sm:w-3/4 sm:grid-cols-7">
          <div className="text-left sm:col-span-4">
            <p className={pStyle(mobile)}>Few more words to introduce myself.</p>
            <p className={pStyle(mobile)}>
              I was born in Moscow in 1984 and lived in suburbs of a city ever since. Single.
            </p>
            <p className={pStyle(mobile)}>
              Besides mentioned before i spent my years working as sports journalist, technical
              writer at project institution and crypto-trader. Love bike-traveling and tech. After
              fully realising that my major speciality does not fit my life goals decided to switch
              into software engineering.
            </p>
            <p className={pStyle(mobile)}>
              Personal interests are sports (football, soccer, cycling), sci-fi and space,
              video-editing.
            </p>
          </div>
          <div className="sm:col-span-3">
            <img src={ittr} alt="" className="rounded-[50px] opacity-95" />
          </div>
        </div>
      </div>
    </div>
  )
}

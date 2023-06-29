import { useRef, useEffect, useContext } from 'react'

import ittr from '../assets/ittr-min.png'
import { Context } from '../context/Context'
import { useVisibility } from '../hooks/useVisibility'
import { pStyle } from '../helpers/styles'

export const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null)
  const isInViewport = useVisibility(aboutRef)
  const { aboutInViewport, projectsInViewport, setAboutInViewport, setProjectsInViewport } =
    useContext(Context)

  useEffect(() => {
    !aboutInViewport && projectsInViewport && isInViewport && setProjectsInViewport(false)
    setAboutInViewport(isInViewport)
    // eslint-disable-next-line
  }, [isInViewport])

  const fadeClass = `${aboutInViewport ? 'animate-fade-up' : 'animate-fade-down opacity-0'} py-16`

  return (
    <div ref={aboutRef} className={fadeClass} id="aboutme">
      <h2 className="mb-5 text-4xl font-bold text-center">About me</h2>
      <div className="grid py-5 place-items-center">
        <div className="grid w-11/12 grid-cols-1 gap-10 sm:w-3/4 sm:grid-cols-7">
          <div className="text-center sm:col-span-4 sm:text-left">
            <span className="py-2 font-sans text-3xl text-white">
              Few more words to introduce myself.
            </span>
            <p className={pStyle}>
              I was born in Moscow in 1984 and lived in suburbs of a city ever since. Single.
            </p>
            <p className={pStyle}>
              Besides mentioned before i spent my years working as sports journalist, technical
              writer at project institution and crypto-trader. Love bike-traveling and tech. After
              fully realising that my major speciality does not fit my life goals decided to switch
              into software engineering.
            </p>
            <p className={pStyle}>
              Personal interests are sports (football, soccer, cycling), sci-fi, cosmology and
              video-editing.
            </p>
          </div>
          <div className="sm:col-span-3">
            <img src={ittr} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

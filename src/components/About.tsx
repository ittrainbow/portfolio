import { useRef, useEffect, useContext } from 'react'
import { Container } from 'react-bootstrap'

import ittr from '../assets/img/ittr-min.png'
import { Context } from '../context/Context'
import { useVisibility } from '../hooks/useVisibility'
import { pStyle } from '../helpers/styles'

export const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null)
  const isInViewport = useVisibility(aboutRef)
  const { setAboutInViewport } = useContext(Context)

  useEffect(() => {
    setAboutInViewport(isInViewport)
  }, [isInViewport])

  return (
    <section className="pt-20" id="about">
      <Container>
        <div ref={aboutRef} className={isInViewport ? 'animate-fade-up' : 'opacity-0'}>
          <h2 className="mb-5 text-4xl font-bold text-center">About me</h2>
          <div className="flex flex-row gap-5">
            <div>
              <span className="py-2 font-sans text-3xl text-white">
                Few more words to introduce myself.
              </span>
              <p className={pStyle}>
                I was born in Moscow in 1984 and lived in suburbs of a city ever since. Single.
              </p>
              <p className={pStyle}>
                Besides mentioned before i spent my years working as sports journalist, technical
                writer at project institution and crypto-trader. Love bike-traveling and tech. After
                fully realising that my major speciality does not fit my life goals decided to
                switch into software engineering.
              </p>
              <p className={pStyle}>
                Personal interests are sports (football, soccer, cycling), sci-fi, cosmology and
                video-editing.
              </p>
            </div>
            <div className="grow">
              <img src={ittr} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

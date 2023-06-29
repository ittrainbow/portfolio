import { useRef, useState, useEffect, useContext } from 'react'
import blackHole from '../assets/blackhole.png'
import { FiArrowRightCircle } from 'react-icons/fi'

import { Context } from '../context/Context'
import { useVisibility } from '../hooks/useVisibility'
import { pStyle } from '../helpers/styles'

export const Home = () => {
  const { homeInViewport, setHomeInViewport, mobile } = useContext(Context)
  const [hover, setHover] = useState<boolean>(false)
  const homeRef = useRef<HTMLDivElement>(null)
  const homeHeaderRef = useRef<HTMLDivElement>(null)
  const isHomeInViewport = useVisibility(homeRef)
  const isHomeHeaderInViewport = useVisibility(homeHeaderRef)

  useEffect(() => {
    setHomeInViewport(isHomeInViewport) // eslint-disable-next-line
  }, [isHomeInViewport])

  const smoothScroll = () =>
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  const buttonStyle = `ease-in-out duration-300 text-violet-500 text-5xl font-bold ${
    hover ? 'ml-8' : 'ml-3'
  } `

  const fadeHomeClass = `${homeInViewport ? 'animate-fade-up' : 'animate-fade-down opacity-0'} ${
    mobile ? 'pt-12' : 'pt-24'
  } pb-16`

  const fadeTextClass = `${
    isHomeInViewport ? 'animate-fade-up' : 'animate-fade-down opacity-0'
  } grid text-center place-items-center sm:place-items-start sm:col-span-3 sm:text-left"`

  return (
    <div className={fadeHomeClass} id="home">
      <div className="grid place-items-center">
        <div className="grid w-11/12 grid-cols-1 gap-10 sm:w-3/4 sm:grid-cols-5">
          <div  className={fadeTextClass}>
            <div ref={homeHeaderRef} className="py-2 font-sans text-3xl text-white">I'm Andrey Gordienko</div>
            <div className={pStyle}>Front-end developer.</div>
            <p ref={homeRef}  className={pStyle}>
              Gratuated from Bauman Moscow State Technical University. Spent 10 years working as
              electronics engineer, my high school specialization. Also experienced as technical
              support specialist and network administrator.
            </p>
            <p className={pStyle}>
              Nowadays i'm looking for new stint of my career as software engineer. Let me share
              some examples of my code with you.
            </p>
            <div
              onClick={smoothScroll}
              className="flex flex-row items-center pt-5 no-underline cursor-pointer"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <div className="text-2xl font-semibold text-gray-200">Move Further</div>
              <FiArrowRightCircle size={30} className={buttonStyle} />
            </div>
          </div>
          <div className="sm:col-span-2 grid place-items-center">
            <img src={blackHole} alt="Header Img" />
          </div>
        </div>
      </div>
    </div>
  )
}
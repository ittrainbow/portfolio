import { useRef, useState, useEffect, useContext } from 'react'
import headerImg from '../assets/img/header-img.svg'
import { FiArrowRightCircle } from 'react-icons/fi'

import { Context } from '../context/Context'
import { useVisibility } from '../hooks/useVisibility'
import { pStyle } from '../helpers/styles'

export const Greeting = () => {
  const { setGreetingInViewport } = useContext(Context)
  const [hover, setHover] = useState<boolean>(false)
  const greetingRef = useRef(null)
  const isInViewport = useVisibility(greetingRef)

  useEffect(() => {
    setGreetingInViewport(isInViewport) // eslint-disable-next-line
  }, [isInViewport])

  const buttonStyle = `ease-in-out duration-300 text-violet-500 text-5xl font-bold ${
    hover ? 'ml-8' : 'ml-3'
  } `

  const fadeClass = `${isInViewport ? 'animate-fade-up' : 'opacity-0'} pt-24 py-16`

  return (
    <div ref={greetingRef} className={fadeClass} id="home">
      <div className="grid place-items-center">
        <div className="grid w-11/12 grid-cols-1 gap-10 sm:w-3/4 sm:grid-cols-5">
          <div className="grid text-center place-items-center sm:place-items-start sm:col-span-3 sm:text-left">
            <div className="py-2 font-sans text-3xl text-white">I'm Andrey Gordienko</div>
            <p className={pStyle}>Front-end developer.</p>
            <p className={pStyle}>
              Gratuated from Bauman Moscow State Technical University. Spent 10 years working as
              electronics engineer, my high school specialization. Also experienced as technical
              support specialist and network administrator.
            </p>
            <p className={pStyle}>
              Nowadays i'm looking for new stint of my career as software engineer. Let me share
              some examples of my code with you.
            </p>
            <a
              href="#projects"
              className="flex flex-row items-center pt-5 no-underline"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <div className="text-2xl font-semibold text-gray-200">Move Further</div>
              <FiArrowRightCircle size={30} className={buttonStyle} />
            </a>
          </div>
          <div className="sm:col-span-2">
            <img src={headerImg} alt="Header Img" />
          </div>
        </div>
      </div>
    </div>
  )
}

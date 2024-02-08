import { useRef, useState, useEffect, useContext } from 'react'
import { FiArrowRightCircle } from 'react-icons/fi'

import { fadeStyle } from '../helpers/styles'
import { useVisibility } from '../hooks/useVisibility'
import { Context } from '../context/Context'
import home from '../assets/home.png'

export const Home = () => {
  const { setHomeInViewport, mobile } = useContext(Context)
  const [hover, setHover] = useState<boolean>(false)
  const homeRef = useRef<HTMLDivElement>(null)
  const isHomeInViewport = useVisibility(homeRef)

  useEffect(() => {
    setHomeInViewport(isHomeInViewport) // eslint-disable-next-line
  }, [isHomeInViewport])

  const smoothScroll = () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  const buttonStyle = `ease-in-out duration-300 text-violet-500 text-5xl font-bold ${hover ? 'ml-8' : 'ml-3'} `
  const pStyle = `py-2 mt-3 font-sans text-2xl text-gray-300 ${mobile ? 'text-center' : 'text-start'}`
  const fadeHomeClass = `${fadeStyle(isHomeInViewport)} ${mobile ? 'pt-12' : 'pt-24'} pb-16`

  const fadeTextClass = `${fadeStyle(
    isHomeInViewport
  )} grid text-center place-items-center sm:place-items-start sm:col-span-3 sm:text-left"`

  return (
    <div className={fadeHomeClass} id="home">
      <div className="grid place-items-center">
        <div className="grid w-11/12 grid-cols-1 gap-10 sm:w-3/4 sm:grid-cols-5">
          <div className={fadeTextClass}>
            <div className={`py-2 font-sans text-3xl text-white ${mobile ? 'text-center' : 'text-start'}`}>
              Hi! I'm Andrey Gordienko.
            </div>
            <p className={pStyle}>Front-end developer.</p>
            <p ref={homeRef} className={pStyle}>
              Gratuated from Bauman MSTU. Spent 10 years working as electronics engineer, my high school specialization.
            </p>
            <p ref={homeRef} className={pStyle}>
              As a software engineer I'm familiar with Javascript & Typescript. React & React Native. Redux, Sagas,
              Thunk & Toolkit. Sass, Tailwind, MobX, WebSockets, WebRTC, Jest. Firebase, PostgreSQL, MongoDB, Apollo,
              GraphQL.
            </p>
            <p className={pStyle}>
              Nowadays i'm looking for new stint of my career. Let me share some examples of my code with you.
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
          {!mobile && (
            <div className="grid sm:col-span-2 place-items-center">
              <img src={home} alt="Header Img" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

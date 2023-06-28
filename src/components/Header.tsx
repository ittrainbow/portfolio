import { useState, useEffect, useContext } from 'react'
import { BsTelegram, BsGithub } from 'react-icons/bs'
import { isMobile } from 'react-device-detect'

import { Context } from '../context/Context'

console.log(1, isMobile)

export const Header = () => {
  const { greetingInViewport, projectsInViewport, aboutInViewport, contactsInViewport } =
    useContext(Context)
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    greetingInViewport && setActiveLink('home')
    projectsInViewport && setActiveLink('projects')
    aboutInViewport && setActiveLink('about')
    contactsInViewport && setActiveLink('contacts')
  }, [greetingInViewport, projectsInViewport, aboutInViewport, contactsInViewport])

  const styleTransition = 'transition-all ease-in-out duration-400 mr-5'

  const styleScrolled = `p-0 fixed px-4 w-full z-10 ${scrolled ? 'bg-gray-800' : ''}  ${
    scrolled ? 'bg-opacity-95' : 'bg-opacity-0'
  } ease-in flex flex-row items-center ${styleTransition}`

  const styleLinks = `${
    scrolled ? 'h-12' : 'h-20'
  } flex flex-row mr-5 ms-auto items-center ${styleTransition}`

  const styleTab = (activeLink: boolean) =>
    `${activeLink ? 'text-white' : 'text-gray-500'} ${styleTransition} text-2xl mr-5 items-center`

  const styleIcons = `${
    scrolled ? 'text-3xl' : 'text-5xl'
  } ${styleTransition} flex justify-center gap-2 w-20 `
  

  return (
    <div className={styleScrolled}>
      <div className={styleLinks}>
        <a href="#home">
          <div className={styleTab(activeLink === 'home')}>Home</div>
        </a>
        <a href="#projects">
          <div className={styleTab(activeLink === 'projects')}> Projects</div>
        </a>
        <a href="#about">
          <div className={styleTab(activeLink === 'about')}>About Me</div>
        </a>
        <a href="#contacts">
          <div className={styleTab(activeLink === 'contacts')}>Contacts</div>
        </a>
      </div>
      <div className={styleIcons}>
        <a href="https://github.com/ittrainbow">
          <BsGithub className="text-gray-200 cursor-pointer bg-zinc-950 rounded-3xl" />
        </a>
        <a href="https://t.me/ittrainbow">
          <BsTelegram className="bg-white cursor-pointer rounded-3xl text-sky-500" />
        </a>
      </div>
    </div>
  )
}

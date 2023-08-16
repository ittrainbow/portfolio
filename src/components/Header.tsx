import { useState, useEffect, useContext, MouseEvent } from 'react'
import { AiOutlineDoubleLeft } from 'react-icons/ai'
import * as icon from '../helpers/icons'
import {
  navbarDesktopStyle,
  navbarDesktopLinksStyle,
  navbarMobileLinksStyle,
  navbarMobileMenuToggler,
  navbarTabStyle,
  navbarIconStyle,
  commonTransitionStyle
} from '../helpers/styles'

import { Context } from '../context/Context'

export const Header = () => {
  const { homeInViewport, projectsInViewport, aboutInViewport, contactsInViewport, mobile } = useContext(Context)
  const [activeLink, setActiveLink] = useState<string>('home')
  const [open, setOpen] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [drawNavbar, setDrawNavbar] = useState<boolean>(false)

  useEffect(() => {
    const onPageLoad = () => {
      setTimeout(() => setDrawNavbar(true), 200)
      window.removeEventListener('load', onPageLoad)
    }

    document.readyState === 'complete' && onPageLoad()
    window.addEventListener('load', onPageLoad, false)
  }, [])

  useEffect(() => {
    const listener = () => {
      const y1 = window.scrollY
      setTimeout(() => {
        const y2 = window.scrollY
        y2 !== y1 && drawNavbar && mobile && setDrawNavbar(false)
        y2 === y1 && !drawNavbar && mobile && setDrawNavbar(true)
      }, 750)
    }
    window.addEventListener('scroll', listener)
    return () => window.removeEventListener('scroll', listener) // eslint-disable-next-line
  }, [drawNavbar])

  window.onscroll = () => {
    if (drawNavbar) {
      setDrawNavbar(false)
      setOpen(false)
    }
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    contactsInViewport && setActiveLink('contacts')
    aboutInViewport && setActiveLink('aboutme')
    projectsInViewport && setActiveLink('projects')
    homeInViewport && setActiveLink('home')
  }, [homeInViewport, projectsInViewport, aboutInViewport, contactsInViewport])

  const smoothScroll = (e: MouseEvent) => {
    const button = e.currentTarget as HTMLButtonElement
    const link = button.textContent?.replace(/\s+/g, '').toLowerCase() as string
    e.preventDefault()
    mobile && setOpen(false)

    if (link !== 'github') {
      const anchor = document.getElementById(link)
      anchor?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.location.href = 'https://github.com/ittrainbow'
    }
  }

  const tabs = ['Home', 'Projects', 'About me', 'Contacts', 'Github']
  const buttonClass = `${commonTransitionStyle} opacity-70 ${open ? '' : 'rotate-180'}`
  const buttonParentClass = `${open ? '' : 'pl-1'} ${commonTransitionStyle}`
  const button = (
    <div className={buttonParentClass}>
      <AiOutlineDoubleLeft onClick={() => setOpen(!open)} className={buttonClass} />
    </div>
  )

  return (
    <div className={mobile ? '' : navbarDesktopStyle(scrolled)}>
      {mobile ? <div className={navbarMobileMenuToggler(open, drawNavbar)}>{button}</div> : ''}
      <div className={mobile ? navbarMobileLinksStyle(open, drawNavbar) : navbarDesktopLinksStyle(scrolled)}>
        {tabs.map((el, index) => {
          const link = el.replace(/\s+/g, '').toLowerCase()
          return (
            <button key={index} className={navbarTabStyle(link, activeLink, mobile)} onClick={smoothScroll}>
              {el.replace(/ /g, '\u00A0')}
              {el === 'Github' && !mobile && <div className={navbarIconStyle}>{icon.github}</div>}
            </button>
          )
        })}
      </div>
    </div>
  )
}

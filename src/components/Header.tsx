import { useState, useEffect, useContext, MouseEvent } from 'react'
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from 'react-icons/ai'
import * as icon from '../helpers/icons'
import {
  navbarDesktopStyle,
  navbarDesktopLinksStyle,
  navbarMobileLinksStyle,
  navbarMobileMenuToggler,
  navbarTabStyle,
  navbarIconStyle
} from '../helpers/styles'

import { Context } from '../context/Context'

export const Header = () => {
  const { homeInViewport, projectsInViewport, aboutInViewport, contactsInViewport, mobile } =
    useContext(Context)
  const [activeLink, setActiveLink] = useState<string>('home')
  const [open, setOpen] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [drawNavbar, setDrawNavbar] = useState<boolean>(false)

  useEffect(() => {
    const onPageLoad = () => {
      setTimeout(() => setDrawNavbar(true), 500)
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
      }, 1000)
    }
    window.addEventListener('scroll', listener)
    return () => window.removeEventListener('scroll', listener)
  }, [drawNavbar])

  window.onscroll = () => drawNavbar && setDrawNavbar(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    homeInViewport && setActiveLink('home')
    projectsInViewport && setActiveLink('projects')
    aboutInViewport && setActiveLink('aboutme')
    contactsInViewport && setActiveLink('contacts')
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

  return (
    <div className={mobile ? '' : navbarDesktopStyle(scrolled)}>
      {mobile ? (
        <div className={navbarMobileMenuToggler(open, drawNavbar)}>
          {open ? (
            <AiOutlineDoubleLeft onClick={() => setOpen(false)} />
          ) : (
            <AiOutlineDoubleRight onClick={() => setOpen(true)} />
          )}
        </div>
      ) : (
        ''
      )}
      <div
        className={
          mobile ? navbarMobileLinksStyle(open, drawNavbar) : navbarDesktopLinksStyle(scrolled)
        }
      >
        {tabs.map((el, index) => {
          const link = el.replace(/\s+/g, '').toLowerCase()

          return (
            <button
              key={index}
              className={navbarTabStyle(link, activeLink, mobile)}
              onClick={smoothScroll}
            >
              {el.replace(/ /g, '\u00A0')}
              {el === 'Github' && !mobile && (
                <div className={navbarIconStyle(mobile, scrolled)}>{icon.github}</div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

import { useState, useEffect, useContext } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { BsTelegram, BsGithub } from 'react-icons/bs'
import { BrowserRouter as Router } from 'react-router-dom'

import { Context } from '../context/Context'

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
    greetingInViewport && !projectsInViewport && setActiveLink('home')
    projectsInViewport && !aboutInViewport && setActiveLink('projects')
    aboutInViewport && !contactsInViewport && setActiveLink('about')
    contactsInViewport && setActiveLink('contacts')
  }, [greetingInViewport, projectsInViewport, aboutInViewport, contactsInViewport])

  const styleScrolled = 'p-0 bg-gray-800'

  const styleTransition = 'transition-all duration-200 mr-5'

  const styleTab = (activeLink: boolean) =>
    `${activeLink ? 'text-white' : 'text-gray-500'} ${styleTransition} text-2xl mr-5`

  const styleIcons = `${
    scrolled ? 'text-3xl' : 'text-5xl'
  } ${styleTransition} flex justify-center gap-2 w-20 `

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? styleScrolled : ''}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse>
            <Nav className="mr-5 ms-auto">
              <Nav.Link href="#home">
                <div className={styleTab(activeLink === 'home')}>Home</div>
              </Nav.Link>
              <Nav.Link href="#projects">
                <div className={styleTab(activeLink === 'projects')}> Projects</div>
              </Nav.Link>
              <Nav.Link href="#about">
                <div className={styleTab(activeLink === 'about')}>About Me</div>
              </Nav.Link>
              <Nav.Link href="#contacts">
                <div className={styleTab(activeLink === 'contacts')}>Contacts</div>
              </Nav.Link>
            </Nav>
            <div className={styleIcons}>
              <a href="https://github.com/ittrainbow">
                <BsGithub className="text-gray-200 cursor-pointer bg-zinc-950 rounded-3xl" />
              </a>
              <a href="https://t.me/ittrainbow">
                <BsTelegram className="bg-white cursor-pointer rounded-3xl text-sky-500" />
              </a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}

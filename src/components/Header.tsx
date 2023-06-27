import { useState, useEffect, useContext } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { BsTelegram, BsGithub } from 'react-icons/bs'
// import { HashLink } from 'react-router-hash-link'
import { BrowserRouter as Router } from 'react-router-dom'

import { Context } from '../context/Context'

export const Header = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const { setContactsInViewport } = useContext(Context)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value)
  }

  const styleScrolled = 'p-0 bg-gray-800'

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? styleScrolled : ''}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse>
            <Nav className="mr-5 ms-auto">
              <Nav.Link
                href="#home"
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('home')}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('projects')}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#about"
                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('about')}
              >
                About Me
              </Nav.Link>
              <Nav.Link
                href="#contacts"
                className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => {
                  onUpdateActiveLink('contacts')
                  setContactsInViewport(true)
                }}
              >
                Contacts
              </Nav.Link>
            </Nav>
            {/* <span className='border-red-100 bg-slate-100'> */}
            <div className="flex justify-center gap-2 text-5xl">
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

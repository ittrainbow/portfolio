import { useState, useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { BsTelegram, BsGithub } from 'react-icons/bs'
// import { HashLink } from 'react-router-hash-link'
import { BrowserRouter as Router } from 'react-router-dom'

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)

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
            <Nav className="ms-auto">
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
                href="#skills"
                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('about')}
              >
                Skills
              </Nav.Link>
            </Nav>
            {/* <span className='bg-slate-100 border-red-100'> */}
            <div className="flex justify-center gap-2 text-5xl">
              <a href="https://github.com/ittrainbow">
                <BsGithub className="cursor-pointer" />
              </a>
              <a href="https://t.me/ittrainbow">
                <BsTelegram className="cursor-pointer" />
              </a>
            </div>
            {/* <HashLink to="#connect">
                <button className="vvd">
                  <span>Let’s Connect</span>
                </button>
              </HashLink> */}
            {/* </span> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}

import { useRef, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import headerImg from '../assets/img/header-img.svg'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import { useVisibility } from '../hooks/useVisibility'

export const Banner = () => {
  const [hover, setHover] = useState<boolean>(false)
  const bannerRef = useRef(null)
  const isInViewport = useVisibility(bannerRef)

  const pStyle = 'py-2 mt-3 font-sans text-2xl text-gray-300'
  const buttonStyle = `ml-${hover ? 8 : 3} ease-in-out duration-300 text-cyan-300`

  return (
    <section className="bg-center bg-repeat bg-cover pt-36 bg-space" id="home">
      <Container>
        <div className="flex flex-row max-w-4xl aligh-items-center">
          <div ref={bannerRef} className={isInViewport ? 'animate-fade-in' : ''}>
            <span className="py-2 font-sans text-3xl text-white">I'm Andrey Gordienko.</span>
            <p className={pStyle}>Front-end developer.</p>
            <p className={pStyle}>
              I am alumni Bauman Moscow State Technical University. Spent 10 years working as
              electronics engineer, my high school specialization. Also experienced as technical
              support specialist and network administrator.
            </p>
            <p className={pStyle}>
              Nowadays i'm looking for new stint of my career as software engineer. Let me share
              some examples of my code with you.
            </p>
            <a href="#projects" className="no-underline">
              <button
                className="flex flex-row items-center text-2xl font-bold text-white"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <div>Move Further</div>
                <ArrowRightCircle size={25} className={buttonStyle} />
              </button>
            </a>
          </div>
          <div className={isInViewport ? 'animate__animated animate__zoomIn' : ''}>
            <img src={headerImg} alt="Header Img" />
          </div>
        </div>
      </Container>
    </section>
  )
}

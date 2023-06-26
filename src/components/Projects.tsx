import { Container, Row, Col, Tab } from 'react-bootstrap'
import { useRef } from 'react'
import { ProjectCard } from './ProjectCard'
import { projects } from '../helpers/projects'
import colorSharp2 from '../assets/img/color-sharp2.png'
// import 'animate.css'
import { useVisibility } from '../hooks/useVisibility'

export const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null)
  const isInViewport = useVisibility(projectsRef)

  return (
    <section className="project" id="projects">
      <Container>
        <div ref={projectsRef} className={isInViewport ? 'animate-fadeIn' : ''}>
          <h2 className="mb-5">{isInViewport ? 'My Projects' : ''}</h2>
          <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <div
              // data-te-animation="[slide-right_1s_fade-in-up]"
              id="slideInUp"
              className={isInViewport ? 'animate-fade-up' : ''}
            >
              <Row>
                {projects.map((project, index) => {
                  return isInViewport ? <ProjectCard key={index} {...project} /> : ''
                })}
              </Row>
            </div>
          </Tab.Container>
        </div>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

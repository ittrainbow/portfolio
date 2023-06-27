import { Container, Row } from 'react-bootstrap'
import { useRef, useContext } from 'react'

import { Context } from '../context/Context'
import { Card } from './Card'
import { projects } from '../helpers/projects'
import { useVisibility } from '../hooks/useVisibility'

export const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null)
  const { aboutInViewport } = useContext(Context)
  const isInViewport = useVisibility(projectsRef)

  return (
    <section className="relative pt-20" id="projects">
      <Container>
        <div ref={projectsRef}>
          <div className={isInViewport || aboutInViewport ? 'animate-fade-up' : ''}>
            <h2 className="text-4xl font-bold text-center">
              {isInViewport ? 'My Projects' : ''}
            </h2>
            <Row className='pt-10'>
              {projects.map((project, index) => {
                return isInViewport || aboutInViewport ? <Card key={index} {...project} /> : ''
              })}
            </Row>
          </div>
        </div>
      </Container>
    </section>
  )
}

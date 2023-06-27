import { Container, Row } from 'react-bootstrap'
import { useRef, useEffect, useContext } from 'react'

import { Context } from '../context/Context'
import { Card } from './Card'
import { projects } from '../helpers/projects'
import { useVisibility } from '../hooks/useVisibility'

export const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null)
  const isInViewport = useVisibility(projectsRef)
  const { setProjectsInViewport } = useContext(Context)

  useEffect(() => {
    setProjectsInViewport(isInViewport)
  }, [isInViewport])

  return (
    <section className="relative pt-20" id="projects">
      <Container>
        <div ref={projectsRef} className={isInViewport ? 'animate-fade-up' : 'opacity-0'}>
          <h2 className="text-4xl font-bold text-center">My Projects</h2>
          <Row className="pt-10">
            {projects.map((project, index) => {
              return <Card key={index} {...project} />
            })}
          </Row>
        </div>
      </Container>
    </section>
  )
}

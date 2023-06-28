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
    setProjectsInViewport(isInViewport) // eslint-disable-next-line
  }, [isInViewport])

  return (
    <div
      ref={projectsRef}
      className={isInViewport ? 'animate-fade-up pt-20' : 'opacity-0 pt-20'}
      id="projects"
    >
      <h2 className='mb-5 text-4xl font-bold text-center'>My Projects</h2>
      <div className="grid place-items-center">
        <div className="grid w-11/12 grid-cols-1 gap-10 sm:w-3/4 sm:grid-cols-2">
          {projects.map((project, index) => {
            return (
              <div key={index} className="grid place-items-center">
                <Card {...project} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

import { useRef, useEffect, useContext } from 'react'

import { Context } from '../context/Context'
import { Card } from './Card'
import { projects } from '../helpers/projects'
import { useVisibility } from '../hooks/useVisibility'

export const Projects = () => {
  const componentRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const isComponentInViewport = useVisibility(componentRef)
  const isTitleInViewport = useVisibility(titleRef)
  const { setProjectsInViewport } = useContext(Context)

  useEffect(() => {
    setProjectsInViewport(isComponentInViewport) // eslint-disable-next-line
  }, [isComponentInViewport])

  const fadeComponentClass = `${isComponentInViewport ? 'animate-fade-up' : 'opacity-0'} py-16`
  const fadeTitleClass = `${
    isTitleInViewport ? 'animate-fade-up' : 'opacity-0'
  } mb-5 text-4xl font-bold text-center`

  return (
    <div ref={componentRef} className={fadeComponentClass} id="projects">
      <h2 ref={titleRef} className={fadeTitleClass}>
        My Projects
      </h2>
      <div className="grid place-items-center py-5">
        <div className="grid w-11/12 grid-cols-1 gap-10 sm:w-3/4 sm:grid-cols-2 lg:grid-cols-3">
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

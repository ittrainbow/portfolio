import { useRef, useEffect, useContext } from 'react'

import { Context } from '../context/Context'
import { Card } from './Card'
import { apps } from '../helpers/apps'
import { useVisibility } from '../hooks/useVisibility'
import { fadeStyle } from '../helpers/styles'

export const Projects = () => {
  const headerRef = useRef<HTMLDivElement>(null)

  const isHeaderInViewport = useVisibility(headerRef)
  const { setProjectsInViewport } = useContext(Context)

  useEffect(() => {
    setProjectsInViewport(isHeaderInViewport) // eslint-disable-next-line
  }, [isHeaderInViewport])

  const fadeClass = `${fadeStyle(isHeaderInViewport)} mb-5 text-4xl font-bold text-center`

  return (
    <div className="py-16" id="projects">
      <h2 ref={headerRef}>
        <div className={fadeClass}>My Projects</div>
      </h2>
      <div className="grid py-5 place-items-center">
        <div className="grid w-11/12 grid-cols-1 gap-10 sm:w-3/4 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app, index) => {
            return (
              <div key={index} className="grid place-items-center">
                <Card {...app} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

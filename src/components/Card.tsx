import { useContext, useRef, useEffect } from 'react'

import * as icon from '../helpers/icons'
import { useVisibility } from '../hooks/useVisibility'
import { Context } from '../context/Context'

type CardPropsType = {
  title: string
  description: string
  stack: string
  imgUrl: string
  git: string
  url: string
  icons: JSX.Element[]
  apk?: string
}

const stackStyles =
  'text-4xl font-bold flex flex-row p-2 gap-1 rounded-lg bg-opacity-50 bg-slate-100'

export const Card = ({
  title,
  description,
  stack,
  git,
  imgUrl,
  url,
  icons,
  apk = ''
}: CardPropsType) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInViewport = useVisibility(cardRef)
  const { aboutInViewport, projectsInViewport, homeInViewport, setProjectsInViewport } =
    useContext(Context)

  useEffect(() => {
    !aboutInViewport &&
      !homeInViewport &&
      !projectsInViewport &&
      isInViewport &&
      setProjectsInViewport(isInViewport)
  }, [isInViewport])

  const onHover = `hover:top-1/2 hover:opacity-95`
  const transitionClass = `transition-all duration-500 ease-in-out`
  const cardContentClass = `${onHover} ${transitionClass} px-2 py-5 min-w-xs -translate-x-1/2 -translate-y-1/2 absolute top-2/3 left-1/2 flex flex-col h-full opacity-0 w-full min-w-[300px]`
  const cardBgClass = `${onHover} ${transitionClass} relative max-w-md overflow-hidden rounded-xl card-bg`
  const subClass = 'text-sm text-center opacity-70 mt-1'

  return (
    <div ref={cardRef}>
      <div className={isInViewport ? 'animate-fade-up' : 'opacity-0'}>
        <div className={cardBgClass}>
          <img src={imgUrl} alt="" />
          <div className={cardContentClass}>
            <div className="flex flex-col text-center grow ">
              <h4 className="grid px-5 mb-2 text-3xl font-bold place-items-center grow">{title}</h4>
              <div className="grid px-5 text-lg place-items-center grow">{description}</div>
              <div className="grid px-5 text-xl place-items-center grow">{stack}</div>
            </div>
            <div className="bottom-0 flex flex-row justify-between px-4 mt-3">
              <div>
                <div className={stackStyles}>
                  {icons.map((el: JSX.Element, index: number) => {
                    return <div key={index}>{el}</div>
                  })}
                </div>
                <div className={subClass}>Tech</div>
              </div>
              <div>
                <div className={stackStyles + ' text-right'}>
                  {apk && apk.length > 0 && icon.downloadLink(apk)}
                  {url && url.length > 0 && icon.externalLink(url)}
                  {git && git.length > 0 && icon.githubLink(git)}
                </div>
                <div className={subClass}>Links</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

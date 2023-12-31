import { useContext, useRef, useEffect, useState } from 'react'
import { getStorage, ref, getDownloadURL } from 'firebase/storage'

import { fadeStyle, commonTransitionStyle } from '../helpers/styles'
import { useVisibility } from '../hooks/useVisibility'
import { Context } from '../context/Context'
import * as icon from '../helpers/icons'
import { app } from '../db/firebase'

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

const stackStyles = 'text-4xl font-bold flex flex-row p-2 gap-1 rounded-lg bg-opacity-50 bg-slate-100'

export const Card = ({ title, description, stack, git, imgUrl, url, icons, apk }: CardPropsType) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [hover, setHover] = useState(false)
  const isInViewport = useVisibility(cardRef)
  const { aboutInViewport, projectsInViewport, homeInViewport, setProjectsInViewport } = useContext(Context)
  const storage = getStorage(app)

  useEffect(() => {
    if (!aboutInViewport && !homeInViewport && !projectsInViewport && isInViewport) {
      setProjectsInViewport(isInViewport)
    } // eslint-disable-next-line
  }, [isInViewport])

  useEffect(() => {
    const card = cardRef.current
    card?.addEventListener('mouseenter', () => setHover(true))
    card?.addEventListener('mouseleave', () => setHover(false))
    return () => {
      card?.removeEventListener('mouseEnter', () => setHover(true))
      card?.removeEventListener('mouseleave', () => setHover(false))
    }
  }, [])

  const clickHandler = () => getDownloadURL(ref(storage, apk)).then((url) => (window.location.href = url))
  const flex = `flex flex-col`

  const onHover = `hover:opacity-95 w-full h-full`
  const cardContentClass = `${onHover} ${commonTransitionStyle} 
    px-2 py-5 absolute top-1 flex flex-col opacity-0 min-w-[320px]`
  const cardBgClass = `${commonTransitionStyle} ${flex} relative max-w-md overflow-hidden rounded-xl card-bg`
  const subTextClass = 'text-sm text-center opacity-70 mt-1'

  return (
    <div ref={cardRef} className="card">
      <div className={fadeStyle(isInViewport)}>
        <div className={cardBgClass}>
          {icon.info(hover)}
          <img src={imgUrl} alt=""></img>
          <div className={cardContentClass}>
            <div className="flex flex-col justify-center text-center grow">
              <h4 className="px-5 text-2xl font-bold">{title}</h4>
              <div className="px-5 text-md ">{description}</div>
              <div className="px-5 text-lg">{stack}</div>
              <div className="bottom-0 flex flex-row px-2 mt-3 justify-evenly">
                <div>
                  <div className={stackStyles}>
                    {icons.map((el: JSX.Element, index: number) => {
                      return <div key={index}>{el}</div>
                    })}
                  </div>
                  <div className={subTextClass}>Tech</div>
                </div>
                <div>
                  <div className={stackStyles + ' text-right'}>
                    <div onClick={clickHandler}>{apk && icon.downloadLink}</div>
                    {url && url.length > 0 && icon.externalLink(url)}
                    {git && git.length > 0 && icon.githubLink(git)}
                  </div>
                  <div className={subTextClass}>Links</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

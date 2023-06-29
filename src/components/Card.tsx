import { useRef } from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaExternalLinkAlt, FaFileDownload } from 'react-icons/fa'

import { useVisibility } from '../hooks/useVisibility'

type IconType = {
  alt: string
  icon: JSX.Element
}

type CardPropsType = {
  title: string
  description: string
  stack: string
  imgUrl: string
  github: string
  url: string
  icons: IconType[]
  apk?: string
}

const stackStyles =
  'text-4xl font-bold flex flex-row p-2 gap-1 rounded-lg bg-opacity-50 bg-slate-100'
const linkIconStyles = 'pr-1 cursor-pointer text-slate-900'

export const Card = ({
  title,
  description,
  stack,
  github,
  imgUrl,
  url,
  icons,
  apk = ''
}: CardPropsType) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInViewport = useVisibility(cardRef)

  return (
    <div ref={cardRef} className="relative max-w-md overflow-hidden rounded-3xl proj-imgbx">
      <div className={isInViewport ? 'animate-fade-up' : 'opacity-0'}>
        <img src={imgUrl} alt=""/>
        <div className="px-2 min-w-xs proj-txtx">
          <h4>{title}</h4>
          <h5>{description}</h5>
          <div className="grow">{stack}</div>
          <div className="bottom-0 flex flex-row justify-between mt-3">
            <div>
              <div className={stackStyles}>
                {icons.map((el: IconType, index: number) => {
                  const { icon, alt } = el
                  return (
                    <div key={index} title={alt}>
                      {icon}
                    </div>
                  )
                })}
              </div>
              <div className="text-sm">Stack</div>
            </div>
            <div>
              <div className={stackStyles + ' text-right'}>
                <a href={apk} className={linkIconStyles}>
                  {apk && apk.length > 0 && <FaFileDownload />}
                </a>
                <a href={url} className={linkIconStyles}>
                  {url && url.length > 0 && <FaExternalLinkAlt />}
                </a>
                <a href={github} className={linkIconStyles}>
                  <BsGithub className=" text-slate-950 rounded-3xl" />
                </a>
              </div>
              <div className="text-sm">Links</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

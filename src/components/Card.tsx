import { useRef } from 'react'
import * as icon from '../helpers/icons'
import { FaExternalLinkSquareAlt, FaFileDownload } from 'react-icons/fa'

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
  git: string
  url: string
  icons: IconType[]
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

  return (
    <div ref={cardRef}>
      <div className={isInViewport ? 'animate-fade-up' : 'opacity-0'}>
        <div className="relative max-w-md overflow-hidden rounded-3xl proj-imgbx">
          <img src={imgUrl} alt="" />
          <div className="px-2 py-5 min-w-xs proj-txtx flex flex-col h-full">
            <div className="flex flex-col grow">
              <h4 className="mb-3">{title}</h4>
              <div className="grid place-items-center grow">{description}</div>
              <div className="grid place-items-center grow">{stack}</div>
            </div>
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
                  {apk && apk.length > 0 && icon.downloadLink(apk)}
                  {url && url.length > 0 && icon.externalLink(url)}
                  {git && git.length > 0 && icon.githubLink(git)}
                </div>
                <div className="text-sm">Links</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

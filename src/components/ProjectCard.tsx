import { Col } from 'react-bootstrap'
import { BsGithub } from 'react-icons/bs'
import { FaExternalLinkAlt, FaFileDownload } from 'react-icons/fa'

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

export const ProjectCard = ({
  title,
  description,
  stack,
  github,
  imgUrl,
  url,
  icons,
  apk = ''
}: CardPropsType) => {
  return (
    <Col size={2} sm={6} md={4}>
      <div className="relative mb-16 overflow-hidden rounded-3xl proj-imgbx">
        <img src={imgUrl} />
        <div className="px-2 proj-txtx">
          <h4>{title}</h4>
          <h5>{description}</h5>
          <span>{stack}</span>
          <div className="flex flex-row justify-between mt-3">
            <div>
              <div className="text-sm">Stack</div>
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
            </div>
            <div>
              <div className="text-sm">Links</div>

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
            </div>
          </div>
        </div>
      </div>
    </Col>
  )
}

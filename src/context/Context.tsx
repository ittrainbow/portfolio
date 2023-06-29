import { createContext, Dispatch, SetStateAction, useState, useEffect } from 'react'
import { isMobile } from 'react-device-detect'

type ContextType = {
  homeInViewport: boolean
  setHomeInViewport: Dispatch<SetStateAction<boolean>>
  aboutInViewport: boolean
  setAboutInViewport: Dispatch<SetStateAction<boolean>>
  projectsInViewport: boolean
  setProjectsInViewport: Dispatch<SetStateAction<boolean>>
  contactsInViewport: boolean
  setContactsInViewport: Dispatch<SetStateAction<boolean>>
  mobile: boolean
}

type ContextChildren = {
  children: React.ReactNode
}

export const Context = createContext({} as ContextType)

export const ContextProvider = ({ children }: ContextChildren) => {
  const [homeInViewport, setHomeInViewport] = useState<boolean>(true)
  const [aboutInViewport, setAboutInViewport] = useState<boolean>(false)
  const [contactsInViewport, setContactsInViewport] = useState<boolean>(false)
  const [projectsInViewport, setProjectsInViewport] = useState<boolean>(false)
  const [mobile, setMobile] = useState<boolean>(true)

  useEffect(() => {
    setMobile(isMobile)
  }, [])

  return (
    <Context.Provider
      value={{
        homeInViewport,
        setHomeInViewport,
        aboutInViewport,
        setAboutInViewport,
        contactsInViewport,
        setContactsInViewport,
        projectsInViewport,
        setProjectsInViewport,
        mobile
      }}
    >
      {children}
    </Context.Provider>
  )
}

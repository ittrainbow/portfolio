import { createContext, Dispatch, SetStateAction, useState } from 'react'

type ContextType = {
  aboutInViewport: boolean
  setAboutInViewport: Dispatch<SetStateAction<boolean>>
  projectsInViewport: boolean
  setProjectsInViewport: Dispatch<SetStateAction<boolean>>
  contactsInViewport: boolean
  setContactsInViewport: Dispatch<SetStateAction<boolean>>
}

type ContextChildren = {
  children: React.ReactNode
}

export const Context = createContext({} as ContextType)

export const ContextProvider = ({ children }: ContextChildren) => {
  const [aboutInViewport, setAboutInViewport] = useState<boolean>(false)
  const [contactsInViewport, setContactsInViewport] = useState<boolean>(false)
  const [projectsInViewport, setProjectsInViewport] = useState<boolean>(false)

  return (
    <Context.Provider
      value={{
        aboutInViewport,
        setAboutInViewport,
        contactsInViewport,
        setContactsInViewport,
        projectsInViewport,
        setProjectsInViewport
      }}
    >
      {children}
    </Context.Provider>
  )
}

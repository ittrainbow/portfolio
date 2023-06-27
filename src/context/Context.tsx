import { createContext, Dispatch, SetStateAction, useState } from 'react'

type ContextType = {
  greetingInViewport: boolean
  setGreetingInViewport: Dispatch<SetStateAction<boolean>>
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
  const [greetingInViewport, setGreetingInViewport] = useState<boolean>(true)
  const [aboutInViewport, setAboutInViewport] = useState<boolean>(false)
  const [contactsInViewport, setContactsInViewport] = useState<boolean>(false)
  const [projectsInViewport, setProjectsInViewport] = useState<boolean>(false)

  return (
    <Context.Provider
      value={{
        greetingInViewport,
        setGreetingInViewport,
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

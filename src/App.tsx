import { useState, useEffect } from 'react'

import { Header, Home, Projects, About, Contacts, Footer } from './components'

const App = () => {
  const [loaded, setLoaded] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 250)
  }, [])

  const appClass = `${
    loaded ? '' : 'opacity-0'
  } gap-2 bg-black text-slate-100 scroll-pt-10 scroll-smooth bg-space`

  return (
    <div className={appClass}>
      <Header />
      <Home />
      <Projects />
      <About />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App

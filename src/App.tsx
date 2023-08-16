import { useState, useEffect } from 'react'

import { Header, Home, Projects, About, Contacts, Footer } from './components'

const App = () => {
  const [loaded, setLoaded] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 250)
  }, [])

  const appClass = `gap-2 bg-black text-slate-100 scroll-pt-10 scroll-smooth bg-space ${loaded ? '' : 'opacity-0'}`

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

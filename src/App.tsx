import { useState, useEffect, useContext } from 'react'

import { Header, Home, Projects, About, Contacts, Footer } from './components'
import { Context } from './context/Context'

const App = () => {
  const { mobile } = useContext(Context)
  const [loaded, setLoaded] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 250)
  }, [])

  const appClass = `gap-2 bg-black text-slate-100 scroll-pt-10 scroll-smooth ${mobile ? 'bg-carbonmob' : 'bg-carbon'} ${
    loaded ? '' : 'opacity-0'
  }`

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

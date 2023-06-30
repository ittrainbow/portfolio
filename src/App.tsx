import { Header, Home, Projects, About, Contacts, Footer } from './components'

const App = () => {
  return (
    <div className="gap-2 bg-black text-slate-100 scroll-pt-10 scroll-smooth bg-space">
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

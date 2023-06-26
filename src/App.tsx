import './App.css'
import './styles/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/NavBar'
import { Banner } from './components/Banner'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

const App = () => {
  return (
    <div className="gap-2 text-slate-100 scroll-pt-20 scroll-smooth">
      <NavBar />
      <Banner />
      {/* <Skills /> */}
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </div>
  )
}

export default App

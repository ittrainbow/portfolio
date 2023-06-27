import './App.css'
import './styles/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header, Greeting, Projects, About, Footer, Contacts } from './components'

const App = () => {
  return (
    <div className="gap-2 bg-black text-slate-100 scroll-pt-20 scroll-smooth bg-space">
      <Header />
      <Greeting />
      <Projects />
      <About />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App

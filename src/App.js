
import './App.css';
import Navbar from './components/navbar/Navbar.jsx'
import Intro from './components/intro/Intro.js'
import Services from './components/services/Services.js'
import About from './components/about/About.js'
import Work from './components/work/Work.js'
import Footer from './components/footer/Footer.js'

function App() {
  return (
   <div>
      <Navbar />
      <Intro />
      <Services />
      <About />
      <Work />
      <Footer />
   </div>
  )
}

export default App;

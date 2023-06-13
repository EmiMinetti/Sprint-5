import  NavBar  from './components/Header/Navbar'
import Hero from './components/Header/Hero'
import Features from './components/FeaturesCarp/Features'
import Productive from './components/Productive'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'

 
function App() {
  return (
    <>
      <header>
        <NavBar/>
        <Hero/>
      </header>
      <main>
        <Features/>
        <Productive/>
        <Testimonials/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App

/* 
      <header>
        <NavBar/>
        <Hero/>
      </header>
      <main>
        <Features/>
        <Productive/>
        <Testimonials/>
      </main>
      <footer>
        <Footer/>
      </footer>
*/
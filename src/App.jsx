import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Projects from './components/Projects.jsx'
import Entrepreneurship from './components/Entrepreneurship.jsx'
import Research from './components/Research.jsx'
import Certifications from './components/Certifications.jsx'
import Blog from './components/Blog.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Entrepreneurship />
        <Research />
        <Certifications />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

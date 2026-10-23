import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { Education } from './components/sections/Education'
import { Experience } from './components/sections/Experience'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { Writing } from './components/sections/Writing'

function App() {
  return (
    <div className="min-h-screen bg-bg">
      <a
        href="#main"
        className="sr-only rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60]"
      >
        Skip to content
      </a>

      <Header />

      <main id="main" tabIndex={-1} className="pt-16 focus:outline-none">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Writing />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App

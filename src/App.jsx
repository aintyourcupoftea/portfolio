import { Nav } from './components/site/Nav'
import { Hero } from './components/site/Hero'
import { Metrics } from './components/site/Metrics'
import { Experience } from './components/site/Experience'
import { Work } from './components/site/Work'
import { Skills } from './components/site/Skills'
import { Credentials } from './components/site/Credentials'
import { Meme } from './components/site/Meme'
import { Contact } from './components/site/Contact'
import { Footer } from './components/site/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Metrics />
        <Experience />
        <Work />
        <Meme />
        <Skills />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

import { Nav } from './components/site/Nav'
import { Light } from './components/site/light'
import { Hero } from './components/site/Hero'
import { Operate } from './components/site/Operate'
import { Experience } from './components/site/Experience'
import { Work } from './components/site/Work'
import { Meme } from './components/site/Meme'
import { Skills } from './components/site/Skills'
import { Credentials } from './components/site/Credentials'
import { Contact } from './components/site/Contact'
import { Footer } from './components/site/Footer'

export default function App() {
  return (
    <Light>
      <Nav />
      <main>
        <Hero />
        <Operate />
        <Experience />
        <Work />
        <Meme />
        <Skills />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </Light>
  )
}

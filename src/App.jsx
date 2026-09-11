import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'




function App() {
  const [language, setLanguage] = useState("en");
  return(
  <>
    <Navbar 
      language={language}
      setLanguage={setLanguage}
    />
    <Hero language={language}/>
    <TechStack language={language}/>
    <Projects language={language}/>
    <Contact language={language}/>
    <Footer language={language}/>
  </>
  );
}

export default App

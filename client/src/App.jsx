import React from 'react'
import Hero from './components/Hero'
import ChatWidget from './components/ChatWidget'
import Headers from './components/Headers'
import ServicesIntro from './components/ServicesIntro'
import ProcessSection from './components/ProcessSection'
import FaqSection from './components/FaqSection'
import ContactFormSection from './components/ContactFormSection'
import Footer from './components/Footer'
import HeroVideo from './components/HeroVideo'

const App = () => {
  return (
    <>
      <Headers />
      <Hero />
      <ServicesIntro />
      <ProcessSection />
      <HeroVideo />
      <ChatWidget />
      <FaqSection />
      <ContactFormSection />
      <Footer />
    </>
  )
}

export default App

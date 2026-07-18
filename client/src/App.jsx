import React from 'react'
import Hero from './components/Hero'
import ChatWidget from './components/ChatWidget'
import Headers from './components/Headers'
import ServicesIntro from './components/ServicesIntro'

const App = () => {
  return (
    <>
      <Headers />
      <Hero />
      <ServicesIntro />
      <ChatWidget />
    </>
  )
}

export default App

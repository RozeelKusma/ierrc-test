import React from 'react'
import Nav from './components/nav/Nav'
import './App.css'
import Ras from './components/ras/Ras'
import Teachers from './components/tt/Teachers'
import JuniorChef from './components/junior/JuniorChef'
import Arcane from './components/kitchen/Arcane'
import Bottom from './components/bottomtwo/Bottom'
import Contact from './components/contact/Contact'
const App = () => {
  return (
    <>
      <Nav/>
      <div className="contents">
        <Ras/>
        <Teachers/>
        <JuniorChef/>
        <Arcane/>
        <Bottom/>
        <Contact/>
      </div>      
    </>
  )
}

export default App

import React from 'react'
import Nav from './components/nav/Nav'
import './App.css'
import Ras from './components/ras/Ras'
import Teachers from './components/tt/Teachers'
import JuniorChef from './components/junior/JuniorChef'
import Arcane from './components/kitchen/Arcane'
import Bottom from './components/bottomtwo/Bottom'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import MessengerCustomerChat from 'react-messenger-customer-chat'
const App = () => {
  return (
    <>
     <MessengerCustomerChat
    pageId="100161405092658"
    appId="1326291934532407"
    
  />
      <Nav/>
      <div className="contents">
        <Ras/>
        <Teachers/>
        <JuniorChef/>
        <Arcane/>
        <Bottom/>
        <Contact/>
        <Footer/>
      </div>      
    </>
  )
}

export default App

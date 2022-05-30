import React from 'react'
import Nav from './components/nav/Nav'
import './App.css'
import Services from './components/body/tt-content/Services'
import MessengerCustomerChat from 'react-messenger-customer-chat'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Footer from './components/home/footer/Footer'
import Contact from './components/home/contact/Contact'
import Ramailo from './components/body/ramailo/Ramailo'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/teachers-training' element={<Services/>}/>
        <Route path='/ramailo-after-school' element={<Ramailo/>}/>
        </Routes>
        <Contact/>
        <Footer/>
     <MessengerCustomerChat
    pageId="100161405092658"
    appId="1326291934532407"
    
    />
     
    </BrowserRouter>
      
    </>
  )
}

export default App

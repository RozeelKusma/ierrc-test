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
import Enquire from './components/home/ras/Enquire'
import GreenAfter from './components/body/green/GreenAfter'
import VolunteerForm from './components/body/green/volunteer/VolunteerForm'
import Experience from './components/body/green/experience/Experience'
import Empowerment from './components/body/empowerment/Empowerment'
import ArcInfo from './components/home/kitchen/arcinfo/ArcInfo'
import ArcBooking from './components/home/kitchen/arcbooking/ArcBooking'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/teachers-training' element={<Services/>}/>
        <Route path='/ramailo-after-school' element={<Ramailo/>}/>
        <Route path='/ramailo-after-school/enquiry' element={<Enquire/>}/>
        <Route path='/green-after-school-&-farm-stay' element={<GreenAfter/>}/>
        <Route path='/green-after-school-&-farm-stay/volunteer' element={<VolunteerForm/>}/>
        <Route path='/green-after-school-&-farm-stay/experience-farm' element={<Experience/>}/>
        <Route path='/eopwhasd' element={<Empowerment/>}/>
        <Route path='/arcane-quest/info' element={<ArcInfo/>}/>
        <Route path='/arcane-quest/booking' element={<ArcBooking/>}/>
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

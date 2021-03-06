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
import Sunday from './components/home/kitchen/arcbooking/sunday/Sunday'
import Wednesday from './components/home/kitchen/arcbooking/wednesday/Wednesday'
import Friday from './components/home/kitchen/arcbooking/friday/Friday'
import Choice from './components/home/kitchen/arcbooking/choice/Choice'
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
        <Route path='/arcane-quest/booking/sunday-menu' element={<Sunday/>}/>
        <Route path='/arcane-quest/booking/wednesday-menu' element={<Wednesday/>}/>
        <Route path='/arcane-quest/booking/friday-menu' element={<Friday/>}/>
        <Route path='/arcane-quest/choose' element={<Choice/>}/>
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

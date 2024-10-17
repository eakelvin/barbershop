import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import About from './pages/About'
import Blog from './pages/Blog'
import Service from './pages/Service'
import ContactPage from './pages/ContactPage'
import Appointment from './pages/Appointment'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/blog' element={<Blog />} />
          <Route exact path='/contact' element={<ContactPage />} />
          <Route exact path='/service' element={<Service />} />
          <Route exact path='/appointment' element={<Appointment />} />
        </Routes>
      </Router>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>
  )
}

export default App

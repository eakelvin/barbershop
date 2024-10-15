import React from 'react'
import Navbar from '../components/Navbar'
import Barbers from '../components/Barbers'
import Stats from '../components/Stats'
import Discount from '../components/Discount'
import Brands from '../components/Brands'
import Contact from '../components/Contact'

const About = () => {
  return (
    <div>
        <Navbar />

        <div class="py-5 hero-header">
          <h1 class="text-center text-white fw-semibold display-4">ABOUT US</h1>
        </div>

        <Barbers />
        <Stats />
        <Discount />
        <Brands />
        <Contact />
      
    </div>
  )
}

export default About

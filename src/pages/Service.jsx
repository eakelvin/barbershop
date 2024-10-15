import React from 'react'
import Navbar from '../components/Navbar'
import ServiceComp from '../components/ServiceComp'
import OtherService from '../components/OtherService'
import Review from '../components/Review'
import News from '../components/News'
import Contact from '../components/Contact'

const Service = () => {
  return (
    <div>
        <Navbar />

        <div class="py-5 hero-header">
          <h1 class="text-center text-white fw-semibold display-4">SERVICES</h1>
        </div>

        <ServiceComp  />
        <OtherService />
        <Review />
        <News />
        <Contact />
      
    </div>
  )
}

export default Service

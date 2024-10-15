import React from 'react'
import Navbar from '../components/Navbar'
import Form from '../components/Form'
import Discount from '../components/Discount'
import Brands from '../components/Brands'
import Contact from '../components/Contact'

const ContactPage = () => {
  return (
    <div>
        <Navbar />

        <div class="py-5 hero-header">
          <h1 class="text-center text-white fw-semibold display-4">
              CONTACT US
          </h1>
        </div>

        <Form />
        <Discount />
        <Brands />
        <Contact />
      
    </div>
  )
}

export default ContactPage

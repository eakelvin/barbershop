import React from 'react'
import Navbar from '../components/Navbar'
import Stats from '../components/Stats'
import Discount from '../components/Discount'
import Review from '../components/Review'
import Brands from '../components/Brands'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
        <Navbar />

        <div class="py-5 hero-header">
            <div class="d-flex justify-content-center p-5">
                <img src="./src/assets/Logo.png" class="img-fluid" alt="Logo" width="500" height="500" />
            </div>
        </div>

        <img src="./src/assets/Services.png" class="img-fluid" alt="Logo" />

        <Stats />
        <Discount />
        <Review />
        <Brands />
        <Contact />
    </div>
  )
}

export default Home

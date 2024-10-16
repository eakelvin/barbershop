import React from 'react'
import Stats from '../components/Stats'
import Discount from '../components/Discount'
import Review from '../components/Review'
import Brands from '../components/Brands'
import Contact from '../components/Contact'
import NavigationBar from '../components/Navbar'

const Home = () => {
  return (
    <div>
        <NavigationBar />

        <div className="py-5 hero-header">
            <div className="d-flex justify-content-center p-5">
                <img src="/Logo.png" className="img-fluid" alt="Logo" width="500" height="500" />
            </div>
        </div>

        <img src="/Services.png" className="img-fluid" alt="Logo" />

        <Stats />
        <Discount />
        <Review />
        <Brands />
        <Contact />
    </div>
  )
}

export default Home

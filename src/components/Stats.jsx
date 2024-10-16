import React from 'react'
import { TiScissorsOutline } from "react-icons/ti";
import { BsShop } from "react-icons/bs";
import { FaCuttlefish } from "react-icons/fa";

const Stats = () => {
  return (
    <div className="bg-dark">
        <div className="container p-5 row mx-auto">
            <div className="col-4 text-center text-white">
                <FaCuttlefish size={50} className='text-sec' />
                <h1 className="text-sec fw-semibold">2500</h1>
                <p className="text-white">SHAVES</p>
            </div>
            <div className="col-4 px-sm-5 text-center text-white">
                <TiScissorsOutline size={50} className="text-sec" />
                <h1 className="text-sec fw-semibold">4500</h1>
                <p className="text-white">HAIRCUTS</p>
            </div>
            <div className="col-4 text-center text-white">
                <BsShop size={50} className="text-sec" />
                <h1 className="text-sec fw-semibold">23</h1>
                <p className="text-white">OPEN SHOPS</p>
            </div>
        </div>
    </div>
  )
}

export default Stats

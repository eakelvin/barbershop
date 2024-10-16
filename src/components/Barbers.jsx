import React from 'react'
import { MdFacebook } from "react-icons/md";
import { BsTwitterX, BsInstagram } from "react-icons/bs";

const Barbers = () => {
  return (
    <section className="py-5">
        <div className="text-center"> 
            <h2 className="text-brighter">MEET THE FAMILY</h2>
            <h1>OUR BARBERS</h1>
        </div>
    
        <div className="mt-5 container">
            <div className="row g-3">
                <div className="col-sm-6 col-md-4">
                    <div className="card text-center text-bg-dark">
                        <img src="./src/assets/b1.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">MARLON MACDONALD</h5>
                            <div className="my-2">
                                <MdFacebook className='toggle-icon' size={25} />
                                <BsTwitterX className='mx-1 toggle-icon' size={20} />
                                <BsInstagram className='toggle-icon' size={20} />
                            </div>
                            <button type="button" className="btn btn-outline-warning rounded-0">
                                BOOK
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="card text-center text-bg-dark">
                        <img src="./src/assets/b2.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">JERRY BANKS</h5>
                            <div className="my-2">
                                <MdFacebook className='toggle-icon' size={25} />
                                <BsTwitterX className='mx-1 toggle-icon' size={20} />
                                <BsInstagram className='toggle-icon' size={20} />
                            </div>
                            <button type="button" className="btn btn-outline-warning rounded-0">
                                BOOK
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="card text-center text-bg-dark">
                        <img src="./src/assets/b3.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">JOHN BAILEY</h5>
                            <div className="my-2">
                                <MdFacebook className='toggle-icon' size={25} />
                                <BsTwitterX className='mx-1 toggle-icon' size={20} />
                                <BsInstagram className='toggle-icon' size={20} />
                            </div>
                            <button type="button" className="btn btn-outline-warning rounded-0">
                                BOOK
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="card text-center text-bg-dark">
                        <img src="./src/assets/b4.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">DAVID BROOKS</h5>
                            <div className="my-2">
                                <MdFacebook className='toggle-icon' size={25} />
                                <BsTwitterX className='mx-1 toggle-icon' size={20} />
                                <BsInstagram className='toggle-icon' size={20} />
                            </div>
                            <button type="button" className="btn btn-outline-warning rounded-0">
                                BOOK
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="card text-center text-bg-dark">
                        <img src="./src/assets/b5.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">SAINT MOORE</h5>
                            <div className="my-2">
                                <MdFacebook className='toggle-icon' size={25} />
                                <BsTwitterX className='mx-1 toggle-icon' size={20} />
                                <BsInstagram className='toggle-icon' size={20} />
                            </div>
                            <button type="button" className="btn btn-outline-warning rounded-0">
                                BOOK
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="card text-center text-bg-dark">
                        <img src="./src/assets/b6.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">JEFF BAILEY</h5>
                            <div className="my-2">
                                <MdFacebook className='toggle-icon' size={25} />
                                <BsTwitterX className='mx-1 toggle-icon' size={20} />
                                <BsInstagram className='toggle-icon' size={20} />
                            </div>
                            <button type="button" className="btn btn-outline-warning rounded-0">
                                BOOK
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Barbers

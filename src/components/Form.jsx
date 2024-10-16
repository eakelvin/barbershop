import React from 'react'
import { Button } from 'react-bootstrap'

const Form = () => {
  return (
    <div className="service-header p-5">
        <div className="row g-5 align-items-center">
            <div className="col-md-6 text-white text-center">
                <h1 className="text-white mb-4">COME VISIT US</h1>
                <h4>OFFICE</h4>
                <p className="">15 HARDING AVENUE NORTH YORK M6M 0A4</p>
                
                <div>
                    <h4>CONTACT</h4>
                    <p>info@company.com <br /> contact@company.com</p>
                </div>

                <div>
                    <h4>WORKING HOURS</h4>
                    <p>Monday - Saturday: 10am - 6pm <br /> Sunday: 10am - 7pm</p>
                </div>
            </div>
            <div className="col-md-6">
                <form action="">
                    <div className="row g-3">

                    <div className="col-md-6">
                        <div className="form-floating">
                        <input type="text" className="form-control rounded-0" id="name" placeholder="Your Name" />
                        <label htmlFor="name">Your Name</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-floating">
                        <input type="email" className="form-control rounded-0" id="email" placeholder="Your Email" />
                        <label htmlFor="email">Your Email</label>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-floating" id="date3">
                        <input type="text" className="form-control rounded-0" id="subject" placeholder="Subject" />
                        <label htmlFor="subject">Subject</label>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="form-floating">
                        <textarea 
                            className="form-control rounded-0" 
                            placeholder="Special Request"
                            id="message"
                            style={{height: '8rem'}}>
                        </textarea>
                        <label htmlFor="message">Special Request</label>
                        </div>
                    </div>

                    <div className="col-12">
                        <Button className="bg-brighter rounded-0 w-100" variant="outline-warning">
                            BOOK APPOINTMENT
                        </Button>
                    </div>

                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Form

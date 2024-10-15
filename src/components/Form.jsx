import React from 'react'

const Form = () => {
  return (
    <div class="service-header p-5">
        <div class="row g-5 align-items-center">
            <div class="col-md-6 text-white text-center">
                <h1 class="text-white mb-4">COME VISIT US</h1>
                <h4>OFFICE</h4>
                <p class="">15 HARDING AVENUE NORTH YORK M6M 0A4</p>
                
                <div>
                    <h4>CONTACT</h4>
                    <p>info@company.com <br /> contact@company.com</p>
                </div>

                <div>
                    <h4>WORKING HOURS</h4>
                    <p>Monday - Saturday: 10am - 6pm <br /> Sunday: 10am - 7pm</p>
                </div>
            </div>
            <div class="col-md-6">
                <form action="">
                    <div class="row g-3">

                    <div class="col-md-6">
                        <div class="form-floating">
                        <input type="text" class="form-control rounded-0" id="name" placeholder="Your Name" />
                        <label for="name">Your Name</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                        <input type="email" class="form-control rounded-0" id="email" placeholder="Your Email" />
                        <label for="email">Your Email</label>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-floating" id="date3">
                        <input type="text" class="form-control rounded-0" id="subject" placeholder="Subject" />
                        <label for="subject">Subject</label>
                        </div>
                    </div>

                    <div class="col-12">
                        <div class="form-floating">
                        <textarea class="form-control rounded-0" placeholder="Special Request" id="message" style="height: 100px;"></textarea>
                        <label for="message">Special Request</label>
                        </div>
                    </div>

                    <div class="col-12">
                        <button type="button" class="btn btn-outline-warning bg-brighter text-dark rounded-0 w-100">
                            BOOK APPOINTMENT
                        </button>
                    </div>

                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Form

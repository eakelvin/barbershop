import React from 'react'
import NavigationBar from '../components/Navbar'

const Appointment = () => {
  return (
    <div>
      <NavigationBar />
      <div className="py-5 booking">
        <div className="p-5">
          <div className="row g-5 align-items-center">
            <div className="col-md-6 text-white">
              <h6 className="text-white text-uppercase">Book an Appointment</h6>
              <h1 className="text-white mb-4">Online Booking</h1>
              <p className="mb-4">
                Book your appointment online now! Choose your preferred time and barber, and we'll confirm your booking.
                {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi adipisci voluptas in ex est. Consequuntur labore nihil unde dolorem sapiente, impedit aspernatur iusto, molestiae fugit ea fuga voluptatem deserunt vero. */}
              </p>
              <p className="mb-4">
              Skip the waitlist! Book your haircut online at your convenience. Our easy-to-use booking system makes it hassle-free.
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis suscipit temporibus enim deleniti cumque, accusantium autem recusandae repellat nostrum dolor ea, amet, aliquid natus nihil in. Debitis, vero quaerat? Deserunt. */}
              </p>
              <p className='mb-4'>
                Book online and enjoy: Flexible scheduling, personalized service, and no more waiting in line.
              </p>
              {/* <a href="" className="btn btn-outline-light py-3 px-5 mt-2">Read More</a> */}
            </div>
            <div className="col-md-6">
              <h2 className="text-white mb-4">Book Your Appointment Now</h2>

              <form action="">
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" placeholder="Your Name" />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" placeholder="Your Email" />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating" id="date3">
                      <input type="text" className="form-control" id="datetime" />
                      <label htmlFor="datetime">Date & Time</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <select name="" id="select1" className="form-select">
                        <option value="1">Destination 1</option>
                        <option value="2">Destination 2</option>
                        <option value="3">Destination 3</option>
                      </select>
                      <label htmlFor="select1">Destination</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea 
                        className="form-control" 
                        placeholder="Special Request" 
                        id="message" 
                        style={{height: "100px"}}>
                      </textarea>
                      <label htmlFor="message">Special Request</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <button className="btn btn-outline-light w-100 py-3" type="submit">
                      Book Now
                    </button>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appointment

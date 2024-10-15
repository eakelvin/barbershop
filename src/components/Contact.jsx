import React from 'react'

const Contact = () => {
  return (
    <div>
        <section class="p-5 text-center">
            <div class="container">
                <h2>CONTACT US</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, sequi architecto consequuntur velit quo in.
                </p>

                <div class="row mt-5 mx-auto">
                    <div class="col text-center">
                        <i class="text-sec bi bi-geo-alt"></i>
                        <h4 class="fw-semibold">ADDRESS</h4>
                        <p class="">15 Harding Avenue North York M6M 0A4</p>
                    </div>
                    <div class="col text-center">
                        <i class="text-sec bi bi-alarm"></i>
                        <h4 class="fw-semibold">WORKING HOURS</h4>
                        <p class="">Mon-Fri: 10am - 6pm <br /> Sat-Sun: 10am - 6pm</p>
                    </div>
                    <div class="col text-center">
                        <i class="text-sec bi bi-envelope"></i>
                        <h4 class="fw-semibold">EMAIL</h4>
                        <p class="">info@company.com</p>
                    </div>
                    <div class="col text-center">
                        <i class="text-sec bi bi-telephone"></i>
                        <h4 class="fw-semibold">PHONE</h4>
                        <p class="">(+63) 555 1212</p>
                    </div>
                    
                </div>
            </div>
        </section>

        <div class="container">
            <hr class="sec" />
        </div>

        <footer class="text-center">
            <p class="">&copy; Barbershop 2024</p>
        </footer>
      
    </div>
  )
}

export default Contact

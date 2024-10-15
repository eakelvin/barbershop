import React from 'react'

const Review = () => {
  return (
    <section class="py-5">
        <div class="text-center"> 
            <h2 class="text-brighter">WHAT PEOPLE SAY ABOUT US</h2>
            <h1>CLIENTS REVIEWS</h1>
        </div>
    
        <div class="container">
            <div class="mt-5 row justify-content-between">
                <div class="col-sm-6 col-md-4 mx-auto text-center">
                    <img class="rounded-circle mb-4" loading="lazy" src="./src/assets/p1.avif" alt="Profile" height="100" width="100" />
                    <p class="">We were so impressed with the work they did for us. They were able to take our vision and turn it into a reality, and they did it all on time and within budget.</p>
                    <p class="fw-bold text-brighter">LUNA JOHN - TORONTO</p>
                </div>
                <div class="col-sm-6 col-md-4 mx-auto text-center">
                    <img class="rounded-circle mb-4" loading="lazy" src="./src/assets/p-2.avif" alt="Profile" height="100" width="100" />
                    <p class="">We were so impressed with the work they did for us. They were able to take our vision and turn it into a reality, and they did it all on time and within budget.</p>
                    <p class="fw-bold text-brighter">MARK SMITH - BRAMPTON</p>
                </div>
                <div class="col-sm-6 col-md-4 mx-auto text-center">
                    <img class="rounded-circle mb-4" loading="lazy" src="./src/assets/p-3.avif" alt="Profile" height="100" width="100" />
                    <p class="">We were so impressed with the work they did for us. They were able to take our vision and turn it into a reality, and they did it all on time and within budget.</p>
                    <p class="fw-bold text-brighter">MICHAEL WILSON - VAUGHAN</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Review

import React from 'react'

const Stats = () => {
  return (
    <div class="bg-dark">
        <div class="container p-5 row mx-auto">
            <div class="col-4 text-center text-white">
                <i class="text-sec bi bi-rulers"></i>
                <h1 class="text-sec fw-semibold">2500</h1>
                <p class="text-white">SHAVES</p>
            </div>
            <div class="col-4 px-sm-5 text-center text-white">
                <i class="text-sec bi bi-scissors"></i>
                <h1 class="text-sec fw-semibold">4500</h1>
                <p class="text-white">HAIRCUTS</p>
            </div>
            <div class="col-4 text-center text-white">
                <i class="text-sec bi bi-shop"></i>
                <h1 class="text-sec fw-semibold">23</h1>
                <p class="text-white">OPEN SHOPS</p>
            </div>
        </div>
    </div>
  )
}

export default Stats

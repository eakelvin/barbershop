import React from 'react'

const OtherService = () => {
  return (
    <div class="bg-dark text-white p-5">
        <div class="container text-center">
            <div class="row gx-5 mx-auto">
                <div class="col-sm-6">
                    <div class="">
                        <div class="d-flex align-items-center gap-2">
                            HAIRCUT
                            <div class="horizontal px-1"></div>
                            $20
                        </div>
                        <p class="d-flex">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="">
                        <div class="d-flex align-items-center gap-2">
                            TRIMMING
                            <div class="horizontal px-1"></div>
                            $13
                        </div>
                        <p class="d-flex">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
            </div>

            <div class="row gx-5 mx-auto">
                <div class="col-sm-6">
                    <div class="">
                        <div class="d-flex align-items-center gap-2">
                            SHAVINGS
                            <div class="horizontal px-1"></div>
                            $13
                        </div>
                        <p class="d-md-flex">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="">
                        <div class="d-flex align-items-center gap-2">
                            FACIAL
                            <div class="horizontal px-1"></div>
                            $20
                        </div>
                        <p class="d-flex">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-5 d-flex justify-content-center overflow-x-hidden">
            <div class="col-md-7">
                <div class="bg-warning p-5">
                    <h6>THIS WEEKS NEW PRODUCT</h6>
                    <h1 class="fw-bold">25% DISCOUNT</h1>
                    <p class="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis pariatur itaque fuga
                    </p>
                    <button type="button" class="btn btn-dark rounded-0">
                        BOOK NOW
                    </button>
                </div>
            </div>
            <div class="col-md-5 d-none d-md-block">
                <div class="">
                    <img src="./images/img.png" class="" alt="" height="280" width="400" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default OtherService

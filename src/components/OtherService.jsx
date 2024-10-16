import React from 'react'

const OtherService = () => {
  return (
    <div className="bg-dark text-white p-5">
        <div className="container text-center">
            <div className="row gx-5 mx-auto">
                <div className="col-sm-6">
                    <div className="">
                        <div className="d-flex align-items-center gap-2">
                            HAIRCUT
                            <div className="horizontal px-1"></div>
                            $20
                        </div>
                        <p className="d-flex">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="">
                        <div className="d-flex align-items-center gap-2">
                            TRIMMING
                            <div className="horizontal px-1"></div>
                            $13
                        </div>
                        <p className="d-flex">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
            </div>

            <div className="row gx-5 mx-auto">
                <div className="col-sm-6">
                    <div className="">
                        <div className="d-flex align-items-center gap-2">
                            SHAVINGS
                            <div className="horizontal px-1"></div>
                            $13
                        </div>
                        <p className="d-md-flex">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="">
                        <div className="d-flex align-items-center gap-2">
                            FACIAL
                            <div className="horizontal px-1"></div>
                            $20
                        </div>
                        <p className="d-flex">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-5 d-flex justify-content-center overflow-x-hidden">
            <div className="col-md-7">
                <div className="bg-warning p-5">
                    <h6>THIS WEEKS NEW PRODUCT</h6>
                    <h1 className="fw-bold">25% DISCOUNT</h1>
                    <p className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis pariatur itaque fuga
                    </p>
                    <button type="button" className="btn btn-dark rounded-0">
                        BOOK NOW
                    </button>
                </div>
            </div>
            <div className="col-md-5 d-none d-md-block">
                <div className="">
                    <img src="./images/img.png" className="" alt="" height="280" width="400" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default OtherService

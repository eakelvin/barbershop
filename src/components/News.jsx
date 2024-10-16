import React from 'react'

const News = () => {
  return (
    <section className="py-5 bg-dark text-white">
        <div className="text-center"> 
            <h2 className="text-brighter">OUR BLOG</h2>
            <h1>LATEST NEWS</h1>
        </div>
    
        <div className="mt-5 container">
            <div className="row">
                <div className="col-sm-6 col-md-3">
                    <div className="card text-bg-dark">
                        <img src="./images/c1.avif" className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <button type="button" className="btn text-brighter" data-bs-toggle="button">READ MORE</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="card text-bg-dark">
                        <img src="./images/c2.avif" className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <button type="button" className="btn text-brighter" data-bs-toggle="button">READ MORE</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="card text-bg-dark">
                        <img src="./images/c3.avif" className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <button type="button" className="btn text-brighter" data-bs-toggle="button">READ MORE</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="card text-bg-dark">
                        <img src="./images/c4.avif" className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <button type="button" className="btn text-brighter" data-bs-toggle="button">READ MORE</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default News

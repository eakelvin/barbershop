import React from 'react'

const News = () => {
  return (
    <section class="py-5 bg-dark text-white">
        <div class="text-center"> 
            <h2 class="text-brighter">OUR BLOG</h2>
            <h1>LATEST NEWS</h1>
        </div>
    
        <div class="mt-5 container">
            <div class="row">
                <div class="col-sm-6 col-md-3">
                    <div class="card text-bg-dark">
                        <img src="./images/c1.avif" class="card-img-top" alt="..." />
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <button type="button" class="btn text-brighter" data-bs-toggle="button">READ MORE</button>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="card text-bg-dark">
                        <img src="./images/c2.avif" class="card-img-top" alt="..." />
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <button type="button" class="btn text-brighter" data-bs-toggle="button">READ MORE</button>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="card text-bg-dark">
                        <img src="./images/c3.avif" class="card-img-top" alt="..." />
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <button type="button" class="btn text-brighter" data-bs-toggle="button">READ MORE</button>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="card text-bg-dark">
                        <img src="./images/c4.avif" class="card-img-top" alt="..." />
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <button type="button" class="btn text-brighter" data-bs-toggle="button">READ MORE</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default News

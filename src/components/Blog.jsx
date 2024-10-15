import React from 'react'

const BlogNews = () => {
  return (
    <section class="py-5 bg-dark text-white">
        <div class="text-center"> 
            <h2 class="text-brighter">OUR BLOG</h2>
            <h1>LATEST NEWS</h1>
        </div>
    
        <div class="mt-5 container">
            <div class="row g-3">
                <div class="col-sm-6 col-md-3">
                    <div class="card text-center text-bg-dark">
                        <img src="./images/c1.avif" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">MARLON MACDONALD</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button type="button" class="btn text-brighter" data-bs-toggle="button">READ MORE</button>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="card text-center text-bg-dark">
                        <img src="./images/c2.avif" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">JERRY BANKS</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button type="button" class="btn text-brighter" data-bs-toggle="button">READ MORE</button>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="card text-center text-bg-dark">
                        <img src="./images/c3.avif" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">JOHN BAILEY</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button type="button" class="btn text-brighter" data-bs-toggle="button">READ MORE</button>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="card text-center text-bg-dark">
                        <img src="./images/c4.avif" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">DAVID BROOKS</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button type="button" class="btn text-brighter" data-bs-toggle="button">READ MORE</button>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="card text-center text-bg-dark">
                        <img src="./images/c1.avif" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">SAINT MOORE</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button type="button" class="btn text-brighter" data-bs-toggle="button">READ MORE</button>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="card text-center text-bg-dark">
                        <img src="./images/c2.avif" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">JEFF BAILEY</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button type="button" class="btn text-brighter" data-bs-toggle="button">READ MORE</button>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="card text-center text-bg-dark">
                        <img src="./images/c3.avif" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">JEFF BAILEY</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button type="button" class="btn text-brighter" data-bs-toggle="button">READ MORE</button>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="card text-center text-bg-dark">
                        <img src="./images/c4.avif" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">JEFF BAILEY</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button type="button" class="btn text-brighter" data-bs-toggle="button">READ MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <nav class="d-flex justify-content-center mt-5 rounded-0" aria-label="...">
            <ul class="pagination pagination-md">
              <li class="page-item active" aria-current="page">
                <span class="page-link">1</span>
              </li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">
                <i class="bi bi-chevron-right"></i>
              </a></li>
            </ul>
        </nav>
    </section>
  )
}

export default BlogNews

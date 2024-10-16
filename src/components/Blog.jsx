import React from 'react'

const BlogNews = () => {
  return (
    <section className="py-5 bg-dark text-white">
        <div className="text-center"> 
            <h2 className="text-brighter">OUR BLOG</h2>
            <h1>LATEST NEWS</h1>
        </div>
    
        <div className="mt-5 container">
            <div className="row g-3">
                <div className="col-sm-6 col-md-3">
                    <div className="card text-center text-bg-dark">
                        <img src="./images/c1.avif" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">MARLON MACDONALD</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button type="button" className="btn text-brighter" data-bs-toggle="button">READ MORE</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="card text-center text-bg-dark">
                        <img src="./images/c2.avif" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">JERRY BANKS</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button type="button" className="btn text-brighter" data-bs-toggle="button">READ MORE</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="card text-center text-bg-dark">
                        <img src="./images/c3.avif" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">JOHN BAILEY</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button type="button" className="btn text-brighter" data-bs-toggle="button">READ MORE</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="card text-center text-bg-dark">
                        <img src="./images/c4.avif" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">DAVID BROOKS</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button type="button" className="btn text-brighter" data-bs-toggle="button">READ MORE</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="card text-center text-bg-dark">
                        <img src="./images/c1.avif" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">SAINT MOORE</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button type="button" className="btn text-brighter" data-bs-toggle="button">READ MORE</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="card text-center text-bg-dark">
                        <img src="./images/c2.avif" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">JEFF BAILEY</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button type="button" className="btn text-brighter" data-bs-toggle="button">READ MORE</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="card text-center text-bg-dark">
                        <img src="./images/c3.avif" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">JEFF BAILEY</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button type="button" className="btn text-brighter" data-bs-toggle="button">READ MORE</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="card text-center text-bg-dark">
                        <img src="./images/c4.avif" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">JEFF BAILEY</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button type="button" className="btn text-brighter" data-bs-toggle="button">READ MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <nav className="d-flex justify-content-center mt-5 rounded-0" aria-label="...">
            <ul className="pagination pagination-md">
              <li className="page-item active" aria-current="page">
                <span className="page-link">1</span>
              </li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">
                <i className="bi bi-chevron-right"></i>
              </a></li>
            </ul>
        </nav>
    </section>
  )
}

export default BlogNews

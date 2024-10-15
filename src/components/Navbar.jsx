import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav 
            class="navbar navbar-expand-lg bg-body-tertiary hero-header"
            data-bs-theme="dark" 
        >
            <div class="container">
                <Link to={'/'} class="navbar-brand">BARBERSHOP</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="toggle-icon bi-list"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to={'/'} class="nav-link active" aria-current="page">
                                Home
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'/service'} class="nav-link">
                                Services
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'/about'} class="nav-link">
                                About Us
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'/blog'} class="nav-link">
                                Blog
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'/contact'} class="nav-link">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                    <span class="navbar-text">
                        <button type="button" class="btn btn-outline-warning text-bright rounded-0">
                            BOOK APPOINTMENT
                        </button>
                    </span>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar

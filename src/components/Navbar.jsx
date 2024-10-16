import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavigationBar = () => {
  return (
    <div>
        {/* <nav 
            className="navbar navbar-expand-lg bg-body-tertiary hero-header"
            data-bs-theme="dark" 
        >
            <div className="container">
                <Link to={'/'} className="navbar-brand">BARBERSHOP</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="toggle-icon bi-list"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link active" aria-current="page">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/service'} className="nav-link">
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/about'} className="nav-link">
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/blog'} className="nav-link">
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/contact'} className="nav-link">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <button type="button" className="btn btn-outline-warning text-bright rounded-0">
                            BOOK APPOINTMENT
                        </button>
                    </span>
                </div>
            </div>
        </nav> */}

        <Navbar 
            expand="lg" 
            className="bg-body-tertiary hero-header" 
            data-bs-theme="dark"
        >
            <Container>
                <Navbar.Brand href="#home">BARBERSHOP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='justify-content-center' id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
                        <NavLink to="/service" className="nav-link" activeClassName="active">Services</NavLink>
                        <NavLink to="/about" className="nav-link" activeClassName="active">About Us</NavLink>
                        <NavLink to="/blog" className="nav-link" activeClassName="active">Blog</NavLink>
                        <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
                    </Nav>

                    <span className="navbar-text">
                        <button type="button" className="btn btn-outline-warning text-bright rounded-0">
                            BOOK APPOINTMENT
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavigationBar

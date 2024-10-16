import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavigationBar = () => {
  return (
    <div>
        {/* <nav 
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
        </nav> */}

        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavigationBar

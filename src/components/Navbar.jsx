import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Stack } from 'react-bootstrap';

const NavigationBar = () => {
    const [auth, isAuth] = useState(false);

  return (
    <div>
        <Navbar 
            expand="lg" 
            className="bg-body-tertiary hero-header" 
            data-bs-theme="dark"
        >
            <Container>
                <Navbar.Brand href="/">BARBERSHOP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='justify-content-center' id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <NavLink exact to="/" className="nav-link" activeclassName="active">Home</NavLink>
                        <NavLink to="/service" className="nav-link" activeclassName="active">Services</NavLink>
                        <NavLink to="/about" className="nav-link" activeclassName="active">About Us</NavLink>
                        <NavLink to="/blog" className="nav-link" activeclassName="active">Blog</NavLink>
                        <NavLink to="/contact" className="nav-link" activeclassName="active">Contact</NavLink>
                    </Nav>

                    <Stack className="col-12 d-lg-none" gap={3}>
                        {auth ? (
                            <p className='!text-white'>HI</p>
                        ): (
                            <Link to={'/login'}>
                                <Button variant='dark' className='w-100 rounded-0'>
                                    Login
                                </Button>
                            </Link>
                        )}
                        <Link to={'/appointment'}>
                            <button type="button" className="w-100 btn btn-outline-warning text-bright rounded-0">
                                BOOK APPOINTMENT
                            </button>
                        </Link>
                    </Stack>

                    <Stack className='d-none d-lg-block' direction="horizontal">
                        {auth ? (
                            <p className='!text-white'>HI</p>
                        ): (
                            <Link to={'/login'}>
                                <Button variant='dark' className='rounded-0'>
                                    Login
                                </Button>
                            </Link>
                        )}
                        <Link to={'/appointment'}>
                            <button type="button" className="btn btn-outline-warning text-bright rounded-0">
                                BOOK APPOINTMENT
                            </button>
                        </Link>
                    </Stack>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavigationBar

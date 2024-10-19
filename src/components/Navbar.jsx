import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Stack } from 'react-bootstrap';
import axios from 'axios';

const NavigationBar = () => {
    const apiUrl = import.meta.env.VITE_PUBLIC_API_BASE_URL;
    const [user, setUser] = useState(null);
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axios.get(
                    `${apiUrl}/auth/user`, 
                    { withCredentials: true }
                )
                console.log('User Data:', response)
                setUser(response.data)
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        }
        getUser()
    }, [])

    useEffect(() => {
        console.log("Fulfilled Promise:", user);
    }, [user])

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
                        <NavLink exact="true" to="/" className="nav-link">Home</NavLink>
                        <NavLink to="/service" className="nav-link">Services</NavLink>
                        <NavLink to="/about" className="nav-link">About Us</NavLink>
                        <NavLink to="/blog" className="nav-link">Blog</NavLink>
                        <NavLink to="/contact" className="nav-link">Contact</NavLink>
                    </Nav>

                    <Stack className="col-12 d-lg-none" gap={3}>
                        {user ? (
                            <p className='!text-white'>{user?.name}</p>
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
                        {user ? (
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

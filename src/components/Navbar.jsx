import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Dropdown, Spinner, Stack } from 'react-bootstrap';
import axios from 'axios';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavigationBar = () => {
    const apiUrl = import.meta.env.VITE_PUBLIC_API_BASE_URL;
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const getInitial = (name) => {
        return name ? name.charAt(0) : ''
    }
    
    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axios.get(
                    `${apiUrl}/auth/user`, 
                    { withCredentials: true }
                )
                // console.log('User Data:', response.data)
                setUser(response.data)
            } catch (error) {
                console.error('Error fetching profile:', error);
            } finally {
                setLoading(false)
            }
        }
        getUser()
    }, [])

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
                        {loading ? (
                            <Spinner animation="border" variant='light' />
                        ): user ? (
                            <Dropdown align={'start'}>
                                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="success">
                                    {getInitial(user?.name)}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item active>
                                        <Link className='text-white' to={'/appointment'}>Book Appointment</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="/">Dashboard</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="">Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        ):(
                            <div>
                                <Link to={'/login'}>
                                    <Button variant='dark' className='w-100 rounded-0'>
                                        Login
                                    </Button>
                                </Link>
                                <Link to={'/appointment'}>
                                    <button type="button" className="w-100 btn btn-outline-warning text-bright rounded-0">
                                        BOOK APPOINTMENT
                                    </button>
                                </Link>
                            </div>
                        )}
                    </Stack>

                    <Stack className='d-none d-lg-block' direction="horizontal">
                        {loading ? (
                            <Spinner animation="border" variant='light' />
                        ): user ? (
                            <NavDropdown 
                                title={user?.name} 
                                id="basic-nav-dropdown" 
                                className='text-white my-2'
                            >
                                <NavDropdown.Item>
                                    <Link className='text-white' to={'/appointment'}>
                                        Book Appointment
                                    </Link>
                                </NavDropdown.Item>
                                    <NavDropdown.Item href="/">Dashboard</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={''}>Logout</NavDropdown.Item>
                                </NavDropdown>
                        ):(
                            <div>
                                <Link to={'/login'}>
                                    <Button variant='dark' className='rounded-0'>
                                        Login
                                    </Button>
                                </Link>
                                <Link to={'/appointment'}>
                                    <button type="button" className="btn btn-outline-warning text-bright rounded-0">
                                        BOOK APPOINTMENT
                                    </button>
                                </Link>
                            </div>
                        )}
                    </Stack>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavigationBar

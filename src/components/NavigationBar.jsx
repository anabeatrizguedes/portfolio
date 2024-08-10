import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
    return (
        <Navbar expand='lg' className='bg-white w-100 fixed-top z-1' data-bs-theme='dark'>
            <Container>
                <Navbar.Brand href='#' className='fs-4'><span className='text-dark'>Ana Guedes</span></Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto w-100 d-flex justify-content-end'>
                        <Nav.Link href='#header'><span className='text-dark'>HOME</span></Nav.Link>
                        <Nav.Link href='#projects'><span className='text-dark'>PROJECTS</span></Nav.Link>
                        <Nav.Link href='#contact'><span className='text-dark'>CONTACT</span></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;
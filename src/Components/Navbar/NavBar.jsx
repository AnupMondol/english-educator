import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib} from '@fortawesome/free-solid-svg-icons'

// Bootstrap Navbat

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import style from "./NavBar.css";
import { Link } from 'react-router-dom';





const NavBar = () => {


    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

    return (
        <div className='fixed-top'>
            <Navbar expand="lg" className={navbar ? 'nav active' : 'nav'}>
                <Container>
                    <Navbar.Brand href="#"><h3> <FontAwesomeIcon icon={faPenNib} /> English Educator</h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className='phone-nav'>
                    <Nav
                        className="justify-content-end flex-grow-1 pe-3"
                        style={{ maxHeight: '250px', margin: '5px'}}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to='/home' ><h5><b>Home</b></h5></Nav.Link>
                        <Nav.Link as={Link} to='/courses'><h5>Our Courses</h5></Nav.Link>
                        <Nav.Link as={Link} to='/teachers'><h5>Our Teachers</h5></Nav.Link>
                        <Nav.Link as={Link} to ='/aboutUs'><h5>About Us</h5></Nav.Link>

                    </Nav>
                    <Form>
                        <Button variant="outline-danger">Sighn Up</Button>
                    </Form>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
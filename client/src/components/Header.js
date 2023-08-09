import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import jhmedical from '../assets/images/jhmedical.jpg';
import Auth from '../utils/auth';

export default function Header() {

    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <header className="header-container">
            <div>
                <img src={jhmedical} alt="Logo " className="logo">

                </img>
            </div>

            <div>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Nav className="nav-link">
                            <Nav.Link to="/"> Home </Nav.Link>

                            {Auth.loggedIn() ? (
                                <Nav.Link to="/Products"> Products </Nav.Link>
                            ) : (

                                <Nav.Link to="/ProductsLogin"> Products </Nav.Link>
                            )}

                            <Nav.Link to="/Review"> Review </Nav.Link>
                            {Auth.loggedIn() ? (
                                <Nav.Link onClick={logout}> Sign Out </Nav.Link>
                            ) : (
                                <Nav.Link to="/Signin"> Sign In </Nav.Link>
                            )}
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </header>


    )
}
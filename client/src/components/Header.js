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
                            <Nav.Link href="./"> Home </Nav.Link>

                            {Auth.loggedIn() ? (
                                <Nav.Link href="./ProductsLogin"> Products </Nav.Link>
                            ) : (

                                <Nav.Link href="./Products"> Products </Nav.Link>
                            )}

                            <Nav.Link href="./Review"> Review </Nav.Link>
                            {Auth.loggedIn() ? (
                                <Nav.Link onClick={logout}> Sign Out </Nav.Link>
                            ) : (
                                <Nav.Link href="./Signin"> Sign In </Nav.Link>
                            )}
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </header>


    )
}
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import jhmedical from '../assets/images/jhmedical.jpg';
import Auth from '../utils/auth';

import { Link } from 'react-router-dom';

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
                            <Link to="/"> Home </Link>

                            {Auth.loggedIn() ? (
                                <Link to="/ProductsLogin"> Products </Link>
                            ) : (
                                <Link to="/Products"> Products </Link>

                            )}

                            <Link to="/Review"> Review </Link>
                            {Auth.loggedIn() ? (
                                <Link onClick={logout}> Sign Out </Link>
                            ) : (
                                <Link to="/Signin"> Sign In </Link>
                            )}
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </header>


    )
}
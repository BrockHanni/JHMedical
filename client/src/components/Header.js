import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import jhmedical from '../assets/images/jhmedical.jpg';

export default function Header() {
    return(
        <header className="header">
            <div className="container">
                <img src={jhmedical}>

                </img>
            </div>

            <div>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <h1>JHMedical</h1>
                        <Nav className="me-auto">
                            <Nav.Link href="./"> Home </Nav.Link>

                            <Nav.Link href="./Products"> Products </Nav.Link>

                            <Nav.Link href="./Review"> Review </Nav.Link>
                            
                            <Nav.Link href="./Signin"> Sign In </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </header>


    )
}
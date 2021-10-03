import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap";
import {GiWitchFlight} from 'react-icons/gi';

export const Header = () => {
    return (
        <Navbar bg="light" expand="lg" style={{marginTop:"-1em"}}>
            <Navbar.Brand href="#home" className="">EzJobs</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Annonces</Nav.Link>
                <Nav.Link href="#link">Contact</Nav.Link>
                <Nav.Link href="wtf">C'est quoi cette app ?</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
// import react and other required components

import React from "react";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import LogoutButton from "../LogoutButton";

import Logo from "../Logo";

import logoImage from "../../images.json";


// navbar component search, database and edit pages with sign out button

function PagesNavBar (props) {
    return (
    <Navbar bg="light" expand="lg" className="mb-n4 sticky-top">
        <Logo image={logoImage[0].image} name={logoImage[0].name} />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ml-5">
                <Nav.Link className="ml-5 mr-2" href="/view/jobs">Home</Nav.Link>
                <Nav.Link className="ml-5 mr-2" href="/view/pesa">Saved Jobs</Nav.Link>
                <Nav.Link className="ml-5 mr-2" href="/pesa">Add Jobs</Nav.Link>
                <NavDropdown className="ml-5 mr-2" title="|||||" id="basic-nav-dropdown">
                <NavDropdown.Item href="/view/jobs">Search For Jobs</NavDropdown.Item>
                <NavDropdown.Item href="/view/pesa">Saved Jobs</NavDropdown.Item>
                <NavDropdown.Item href="/pesa">Add Jobs</NavDropdown.Item>
                <NavDropdown.Divider />
                </NavDropdown>
            </Nav>
            <LogoutButton signOut={props.signOut}/>
        </Navbar.Collapse>
    </Navbar>
)}

export default PagesNavBar;
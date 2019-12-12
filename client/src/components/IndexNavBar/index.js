// import react and required components

import React from "react";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import GoogleButton from "../GoogleButton";

import Logo from "../Logo";

import logoImage from "../../images.json";


// navbar component for index page with the google sign in button

function IndexNavBar () {
    
  return (
  
    <Navbar bg="light" expand="lg" className="sticky-top d-flex justify-content-between">
      <Logo image={logoImage[0].image} name={logoImage[0].name} />
        <GoogleButton />
    </Navbar>
  );
}


export default IndexNavBar;
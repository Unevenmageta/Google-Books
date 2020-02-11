import React from 'react';
import './Navbar.css';

// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'


const NavBar = () => {
  return (
  <Navbar expand="lg" variant="light" bg="light">
    <Navbar.Brand href="/">Books by Google</Navbar.Brand>
    
    <Nav.Link href="/">Search</Nav.Link>
    <Nav.Link href="/saved">Saved</Nav.Link>
  </Navbar>
  );
};

export default NavBar;
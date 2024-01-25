import React from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from './assets/logo.png'
const Header = () => {
  return (
    <Navbar bg="warning" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="coding ninjas"
            width="150"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;

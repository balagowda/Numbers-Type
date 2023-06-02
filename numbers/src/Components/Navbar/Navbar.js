import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{height:'100%'}}>
        <Container>
          <Navbar.Brand>
            Number<span className="text-danger">Type</span>
          </Navbar.Brand>
          <Nav className="ms-auto justify-content-end">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Headers() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="justify-content-center">
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="justify-content-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">Formulaire</Nav.Link>
            <Nav.Link href="#programme">Programme</Nav.Link>
            <Nav.Link href="#pricing">Info Pratique</Nav.Link>
            <Nav.Link href="#pricing">Cagnotte</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

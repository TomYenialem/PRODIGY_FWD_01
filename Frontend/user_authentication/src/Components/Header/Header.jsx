import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

import { CiMenuFries } from "react-icons/ci";
import { TiSpanner } from "react-icons/ti";

function Header() {
  return (
    <div className="header">
      <Navbar
        expand="lg"
        variant="dark"
        className="header_container px-3 d-flex justify-content-between "
      >
        <Container>
          {" "}
          <Navbar.Brand href="#">
            <TiSpanner size={32} color="white" />
          </Navbar.Brand>{" "}
          <Navbar.Brand href="#">My Utils</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            {/* <FaBars color="white" size={24} /> */}
            <CiMenuFries size={32} color="white" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-end gap-4">
              {" "}
              <Nav.Link href="#home" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#contact" className="text-white">
                Admin
              </Nav.Link>
              <Nav.Link href="#contact" className="text-white">
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header
import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

import { CiMenuFries } from "react-icons/ci";
import { TiSpanner } from "react-icons/ti";
import logout from '../../Services/Logout.service'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useContextApi } from '../../Contexts/UseContext';
import { Link } from "react-router-dom";

function Header() {
  const navigate=useNavigate()
  const {isAdmin}=useContextApi()

  const HandleLogout =()=>{
    try {
    logout().then((res)=>{
      // toast.success(res.data.message)
      navigate('/login')
    })
      
    } catch (error) {
      console.log(error)
    }
  }
  const handleAdmin=()=>{
    if(isAdmin){
      navigate('/admin')
    }else{
      toast.error('You are not authorized to access this page')
    }
  }
  return (
    <div className="header">
      <Navbar
        expand="lg"
        variant="dark"
        className="header_container px-3 d-flex justify-content-between "
      >
        <Container>
          {" "}
          <Link to ='/'>
          <Navbar.Brand >
            <TiSpanner size={32} color="white" />
          </Navbar.Brand>{" "}
          </Link>
          <Link to ='/'>
          <Navbar.Brand  className='text-dark'>My Utils</Navbar.Brand>
          </Link>
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
              <Nav.Link className="text-white" onClick={handleAdmin}>
                Admin
              </Nav.Link>
              <Nav.Link className="text-white"
                onClick={HandleLogout}
              >
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
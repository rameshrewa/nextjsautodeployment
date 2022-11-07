
import React, { useRef, useEffect } from "react";

import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import Image from 'next/image'
import Link from 'next/link'




import Logo from "../public/assets/images/header/header-logo.png";

export default function Header({  }) {
  return (
    <>
    <header id="header" className="header-section sticky" >
      <div className="top-menu">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand>
                  <a href="/">
                    <Image src={Logo} alt="Logo" className="lazyload" />
                  </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav className="ms-auto">
                    <NavDropdown title="Home" id="basic-nav-dropdown">
                      <NavDropdown.Item  to="/">
                        <span className="header-link">Heartfulness</span>
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item  to="/aboutus">
                        <span className="header-link">About Us</span>
                      </NavDropdown.Item>
                    </NavDropdown>
                   
                 
                    <Link href="/nursery" className="nav-link">
                    Nursery
                    </Link>
                    <Link href="/faq" className="nav-link">
                    FAQ
                    </Link>

                    {/* <Link to="/submitQuery" className="nav-link">
                      Submit queries
                    </Link> */}

                  

                    <Button
                      variant="primary"
                      className="donate-btn"
                    >
                      Donate
                    </Button>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}
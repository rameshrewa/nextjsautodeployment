
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import Image from 'next/image'
import Link from 'next/link'
import Logo from "../public/assets/images/header/header-logo.png";

export default function Header({Header}) {
  const { attributes } = Header
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
                  {attributes.Menu_Item?.map((item) => {
                    return(
                      <Link key ={item.id} href={item.Page_Url} className="nav-link">
                    {item.Page_Title}
                    </Link>
                    )
                  })}  
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


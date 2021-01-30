import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../images/toggle.svg';
import './Navbar.css';
import { StoreContext } from '../../store';

function AppNavbar() {

  const { state } = React.useContext(StoreContext);
  console.log(state.user);

  return (
    <Navbar className="colour-nav" fixed="top">
      <Navbar.Brand className="brand" {... (state.user) ? { href: "/#/home" } : {}}>
        <img
          alt=""
          src={logo}
          width="80"
          height="80"
          className="image"
        /><span className="name">Toggle</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
        <Nav variant="pills">
          <Nav.Item >
            <Nav.Link href="/#/home"><span id="txt">Home</span></Nav.Link>
          </Nav.Item>
          <Nav.Item >
            {
              (state.user) ?
                <Nav.Link disabled href="/#/login"><span id="txt-disabled">Login</span></Nav.Link>
                :
                <Nav.Link href="/#/login"><span id="txt">Login</span></Nav.Link>
            }
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default AppNavbar;
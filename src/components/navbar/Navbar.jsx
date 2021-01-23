import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../images/toggle.svg';
import './Navbar.css';

function navbar() {
  return (
    <Navbar className="colour-nav" fixed="top">
      <Navbar.Brand href="home">
        <img
          alt=""
          src={logo}
          width="50"
          height="50"
          className="image"
        /><span className="name"> Toggle </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
        <Nav variant="pills">
          <Nav.Item >
            <Nav.Link href="login">Login</Nav.Link>
          </Nav.Item>
          <Nav.Item >
            <Nav.Link href="login">Create New Item</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default navbar;
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import React, {Fragment, useState} from 'react';
import Error from './Error'

const NavBar = () => {

  

   return ( 
<Fragment>
<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Navbar.Brand href="#home">Club Social y Deportivo Moron</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="tabla.html">Tabla de Posiciones</Nav.Link>
     <Nav.Link href="tribuna.html">Buscate En La Tribuna</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link eventKey={2} href="#memes">
        Centro de ayuda
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

</Fragment>


  );
}
export default NavBar;
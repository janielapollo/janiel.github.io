import {Nav, Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation(){
    const gitUrl = 'https://github.com/janielapollo';
    return(
      <Navbar bg="dark" data-bs-theme="dark" className="sticky-md-top" style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
      <Container>
        <Nav className="mx-auto">
          <Nav.Link href="#process">Process</Nav.Link>
          <Nav.Link href="#work">Work</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href={gitUrl}>Github</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    );
}


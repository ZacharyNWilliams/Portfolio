import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import "../css/Header.css";

function NavBar(){
    return (
        <Navbar className='color-nav' id='Nav' bg="light" expand="lg">
        <Container id='nav-container'>
          
          <h1 id='Nav-Name'>Zachary Williams</h1>
          
         
          <div id='nav-group'>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
           
            <Nav id='nav-bar-id' className="me-auto">
              
              <Nav.Link  href="#Home-Section" as={Link} to = "/">Home</Nav.Link>
              <Nav.Link  href="#About-Section">About</Nav.Link>
              <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="#Projects-Section">GraveBook</NavDropdown.Item>
                <NavDropdown.Item href="#Projects-Section">Movie App</NavDropdown.Item>
                <NavDropdown.Item href="#Projects-Section">POS Shopping Website</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
              <Nav.Link  href="#Experience-Section">Experience</Nav.Link>
              <Nav.Link href="#Skills-Section">Skills</Nav.Link>
              <Nav.Link href="#Education-Section">Education</Nav.Link>
              <Nav.Link href="#Contact-Section">Contact</Nav.Link>

            </Nav>
            
          </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    )
}

export default NavBar
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import siteData from "../../siteData.json";

function Navbarr() {
  return (
    <Navbar expand="lg" className="navbarMain navbar navbar-expand-lg p-0">
      <Container className="navbarSub">
        <img src={siteData.Navbar[0].image} alt="" className="brandLogo img-fluid" />
        <Navbar.Toggle aria-controls="navbarScroll" className="custom-toggle"/>
        <Navbar.Collapse id="navbarScroll" className="NavbarCollaps custom-collapse">
          <Nav
            className="me-auto my-2 my-lg-0 navLinks"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
          {siteData.Navbar[1].navLinks.map((link, index) => (
              <Nav.Link key={index} href={link.href}>{link.text}</Nav.Link>
            ))}
          </Nav>
          <Button variant="outline-success" className="btn11">Log In</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;

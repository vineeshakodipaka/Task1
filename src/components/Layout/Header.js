import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar expand="lg" className="navbarcls pt-2 pb-2 px-3 px-lg-5 ">
      <Navbar.Brand className="d-lg-none" href="#home">
        Navbrand
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-lg-5 ps-lg-5 fw-bold gap-lg-4 justify-content-center flex-grow-1 ">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">About</Nav.Link>
          <Nav.Link href="#pricing">Schedules</Nav.Link>
          <Nav.Link href="#pricing">Membership</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Nav className="ms-auto gap-lg-3 ps-lg-5">
          <Nav.Link href="#deets">Offers</Nav.Link>
          <Button
            className="rounded-5"
            style={{ background: "#F27A44", border: "none" }}
          >
            Course
          </Button>
          {/* <Nav.Link eventKey={2} href="#memes">
              <Button>Course</Button>
            </Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;

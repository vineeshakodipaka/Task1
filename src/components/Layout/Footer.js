import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="text-black footercls fs-6 text-center py-4">
      <Navbar className="justify-content-center ">
        <Nav className="text-black">
          <Nav.Link href="/privacy-policy">Privacy Policy</Nav.Link>
          <Nav.Link href="/terms-of-use">Terms of Use</Nav.Link>
          <Nav.Link href="/sales-and-refunds">Sales and Refunds</Nav.Link>
          <Nav.Link href="/legal">Legal</Nav.Link>
          <Nav.Link href="/about" className="fw-bold">
            About
          </Nav.Link>
          <Nav.Link href="/schedules" className="fw-bold">
            Schedules
          </Nav.Link>
          <Nav.Link href="/pricing" className="fw-bold">
            Pricing
          </Nav.Link>
          <Nav.Link href="/membership" className="fw-bold">
            Membership
          </Nav.Link>
          <Nav.Link href="/joins" className="fw-bold">
            Joins
          </Nav.Link>
          <p className="mt-1 text-black">|</p>
        </Nav>
      </Navbar>
    </footer>
  );
};

export default Footer;

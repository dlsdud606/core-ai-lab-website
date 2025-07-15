'use client';

import { Navbar, Nav, Container } from "react-bootstrap";
import Link from "next/link";

export default function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link href="/" passHref legacyBehavior>
          <Navbar.Brand>코어에이아이랩</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/about" passHref legacyBehavior>
              <Nav.Link>연구소 소개</Nav.Link>
            </Link>
            <Link href="/courses" passHref legacyBehavior>
              <Nav.Link>교육 과정</Nav.Link>
            </Link>
            <Link href="/consulting" passHref legacyBehavior>
              <Nav.Link>컨설팅/자문</Nav.Link>
            </Link>
            <Link href="/contact" passHref legacyBehavior>
              <Nav.Link>수강 문의</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

import React, { useContext } from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import logo from "../logo.png";
import { ThemeContext } from "../context/theme";

function Home_Nav() {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  return (
    <>
      <Navbar expand="lg" className="transparent-navbar">
        <Container>
          <Navbar.Brand href="/">
            <Image src={logo} width={130} height={45} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link eventKey={2}>
                <Form>
                  <Form.Check
                    variant="success" // prettier-ignore
                    type="switch"
                    size={"25px"}
                    id="custom-switch"
                    onClick={toggleTheme}
                  />
                </Form>
              </Nav.Link>
              <Nav.Link href="/register">sign up</Nav.Link>
              <Button href="/login" variant="dark">
                sign in
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Home_Nav;

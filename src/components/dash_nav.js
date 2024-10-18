import React, { useContext } from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import logo from "../logo.png";
import { CiLight } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { Context } from "../App";
import { ThemeContext } from "../context/theme";
import { Navigate } from "react-router-dom";

function Dash_Nav() {
  const [signedIn, setSignedIn] = useContext(Context);
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  //logout
  const onLogout = () => {
    setSignedIn(false);
    //clear saved user
    localStorage.removeItem("items");
  };
  return (
    <>
      <Navbar expand="lg" className="transparent-navbar">
        <Container>
          <Navbar.Brand href="/dashboard">
            <Image src={logo} width={130} height={46} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="/dashboard">home</Nav.Link>
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
              <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                  <FaUserCircle />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={onLogout}> Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Dash_Nav;

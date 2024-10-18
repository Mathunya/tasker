import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../logo.png";
import Image from "react-bootstrap/Image";
import { MdArrowBack } from "react-icons/md";
import Toast from "react-bootstrap/Toast";

function Register() {
  //get nevigation
  const navigate = useNavigate();
  //form states
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);
  //registration method
  const onSubmitRegister = (e) => {
    //prevent loading
    e.preventDefault();
    //create iser obj
    const user = { name, email, password };
    //save user
    localStorage.setItem("items", JSON.stringify(user));
    //show success toast
    setShow(!show);
    //console.log(name, email, password);
  };
  const redirectToLogin = () => {
    //close toats
    setShow(!show);
    //redirect user to login
    navigate("/login");
  };
  return (
    <div>
      <Container className="mt-3 mb-5">
        <Row>
          <Col md={3} xs={12}></Col>
          <Col md={6} xs={12}>
            <Row className="mt-5 mb-5">
              <Col
                md={3}
                xs={3}
                style={{ justifyContent: "center", alignContent: "center" }}
              >
                <Button
                  variant="outline-none"
                  className="bg-transparent"
                  onClick={() => navigate("/")}
                >
                  <MdArrowBack size={30} />
                </Button>
              </Col>
              <Col md={6} xs={9} className="text-center">
                <Image src={logo} width={160} height={60} />
              </Col>
              <Col md={3} xs={12}></Col>
            </Row>
            <Row className="text-center">
              <Col md={3} xs={12}></Col>
              <Col md={6} xs={12}>
                <Toast
                  onClose={redirectToLogin}
                  show={show}
                  delay={3000}
                  bg="success"
                  autohide
                >
                  <Toast.Body className="text-white">
                    Account created successfully, You will now be redirected to
                    Login
                  </Toast.Body>
                </Toast>
              </Col>
              <Col md={3} xs={12}></Col>
            </Row>
            <Row
              className="shadow-sm p-5 mb-5"
              style={{ backgroundColor: "#f1f1f1", borderRadius: 25 }}
            >
              <h4>Register</h4>
              <Form
                className="text-center needs-validation"
                onSubmit={onSubmitRegister}
              >
                <Form.Group
                  className="mb-3 was-validated"
                  controlId="formBasicName"
                >
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    className="p-3"
                    placeholder="Enter first name"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                  <div className="invalid-feedback">Please type your name</div>
                </Form.Group>
                <Form.Group
                  className="mb-3 was-validated"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    className="p-3"
                    placeholder="Enter email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="invalid-feedback">
                    Please type a valid email address
                  </div>
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group
                  className="mb-3 was-validated"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    className="p-3"
                    type="password"
                    placeholder="Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="invalid-feedback">
                    Please type your password
                  </div>
                </Form.Group>

                <Button variant="dark" className="p-3 w-50" type="submit">
                  Submit
                </Button>
              </Form>
              <small className="mt-5 text-center">
                Already have an account?{" "}
                <a href="/login" variant="dark" style={{ cursor: "pointer" }}>
                  {" "}
                  click here to login
                </a>
              </small>
            </Row>
          </Col>
          <Col md={3} xs={12}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Register;

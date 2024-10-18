import React, { useContext, useState } from "react";
//get navigation
import { useNavigate } from "react-router-dom";
//get bootstrap controls
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Toast from "react-bootstrap/Toast";
//import context
import { Context } from "../App";
//get logo
import logo from "../logo.png";
//get icons
import { MdArrowBack } from "react-icons/md";
import Items from "../components/Items";

function Login() {
  const navigate = useNavigate();
  //context state
  const [signedIn, setSignedIn] = useContext(Context);
  //form states
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [resultText, setResultText] = useState();
  const [bgclass, setBgClass] = useState();
  const [show, setShow] = useState(false);
  //when loggining
  const onSubmitLogin = (e) => {
    e.preventDefault();
    const item = JSON.parse(localStorage.getItem("items"));
    if (item) {
      if (item.email === email && item.password === password) {
        //sign in using context
        setSignedIn(true);
        //show success toast
        setShow(!show);
        //configure toast
        setResultText("Login Successfull.. you are now being redirected");
        setBgClass("success");
      } else {
        //show error toast
        setShow(!show);
        //configure toast
        setResultText("Login Failed.. Please try again.");
        setBgClass("danger");
      }
    } else {
      //show error toast
      setShow(!show);
      //configure toast
      setResultText("No records found.. Please register.");
      setBgClass("danger");
    }
  };
  //close toast
  const closeToast = () => {
    //close toast
    setShow(!show);
  };

  return (
    <div style={{ height: "100vh" }}>
      <Container className="mt-2">
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
                  onClose={closeToast}
                  show={show}
                  delay={3000}
                  bg={bgclass}
                  autohide
                >
                  <Toast.Body className="text-white">{resultText}</Toast.Body>
                </Toast>
              </Col>
              <Col md={3} xs={12}></Col>
            </Row>
            <Row
              className="shadow-sm p-5 mb-5"
              style={{ backgroundColor: "#f1f1f1", borderRadius: 25 }}
            >
              <h4>Login</h4>
              <Form
                className="text-center needs-validation"
                onSubmit={onSubmitLogin}
              >
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
                  <div className="invalid-feedback text-sm">
                    Please type a your password
                  </div>
                </Form.Group>
                <Button variant="dark" className="p-3 w-50" type="submit">
                  Submit
                </Button>
              </Form>
              <small className="mt-5 text-center">
                Don't have an account yet?{" "}
                <a
                  variant="dark"
                  href="/register"
                  style={{ cursor: "pointer" }}
                >
                  {" "}
                  click here to register
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

export default Login;

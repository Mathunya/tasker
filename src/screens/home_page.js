import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Home_Illustration from "../1-designate.png";

function Home_Page() {
  const navigate = useNavigate();
  return (
    <div style={{ height: "90vh" }}>
      <Container className="mt-5">
        <Container>
          <Row>
            <Col md={6} xs={12}>
              <h1
                style={{
                  fontSize: "42px",
                  marginTop: "10px",
                  marginBottom: "10px",
                  fontWeight: "bold",
                }}
              >
                tasker - A to-do app that helps
                <br /> you organise your
                <br /> daily life
              </h1>
              <p className="m-5" style={{ color: "gray" }}>
                Tasker is a to-do list app designed to simplify and organize
                your
                <br />
                daily tasks, making your life more manageable and efficient. It
                helps
                <br />
                you stay on top of your responsibilities by offering tools that
                <br />
                streamline planning and task completion
              </p>
              <Button
                className="p-3 mt-5 mb-5"
                variant="dark"
                onClick={() => navigate("/register")}
              >
                Sign Up Now
              </Button>
            </Col>
            <Col
              md={6}
              xs={12}
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <Image
                src={Home_Illustration}
                width={550}
                height={500}
                style={{ alignSelf: "center" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Home_Page;

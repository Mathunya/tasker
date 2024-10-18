import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Dash_Data_Block = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={3}>
          <Card className="shadow-sm" style={{ borderRadius: 15 }}>
            <Card.Body>
              <Card.Title style={{ fontSize: "15px", color: "gray" }}>
                Total Tasks
              </Card.Title>
              <h4 style={{ fontWeight: "bold" }}>50</h4>
              <small>
                <b className="text-success">&uarr; 0.00%</b> Compared to last
                month
              </small>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="shadow-sm rounded-15" style={{ borderRadius: 15 }}>
            <Card.Body>
              <Card.Title style={{ fontSize: "15px", color: "gray" }}>
                Upcoming to-dos
              </Card.Title>
              <h4 style={{ fontWeight: "bold" }}>15</h4>
              <small>
                <b className="text-warning">&uarr; 0.10%</b> Compared to last
                month
              </small>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="shadow-sm rounded-15" style={{ borderRadius: 15 }}>
            <Card.Body>
              <Card.Title style={{ fontSize: "15px", color: "gray" }}>
                Completed to-dos
              </Card.Title>
              <h4 style={{ fontWeight: "bold" }}>20</h4>
              <small>
                <b className="text-danger">&uarr; -0.00%</b> Compared to last
                month
              </small>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="shadow-sm rounded-15" style={{ borderRadius: 15 }}>
            <Card.Body>
              <Card.Title style={{ fontSize: "15px", color: "gray" }}>
                Passed
              </Card.Title>
              <h4 style={{ fontWeight: "bold" }}>15%</h4>
              <small>
                <b className="text-success">&uarr; 0.01%</b> Compared to last
                month
              </small>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Dash_Data_Block;

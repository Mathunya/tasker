import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { RiListSettingsLine } from "react-icons/ri";
import { MdEditDocument } from "react-icons/md";
import { MdCheckCircle } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";

export const Items = ({ todo, onDelete, onComplete, onEdit, isComplete }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(todo.title);

  const handleDelete = (id) => {
    onDelete(id);
  };
  const handleComplete = (id) => {
    console.log(id);
    onComplete(id);
  };
  const handleEdit = (id) => {
    // console.log(title, id);
    setIsEdit(!isEdit);
    onEdit(title, id);
  };
  return (
    <div>
      <Row className="p-2">
        <Card className="shadow-sm" style={{ borderRadius: 10 }}>
          <Card.Body>
            <Row>
              <Col md={10} xs={12}>
                {!isEdit ? (
                  //show titlw
                  <Card.Title
                    style={{
                      fontSize: "15px",
                      color: "gray",
                      fontWeight: "bold",
                    }}
                  >
                    {todo.title}
                  </Card.Title>
                ) : (
                  //show edit title input
                  <Row>
                    <Col md={8} xs={12} className="m-0">
                      <input
                        type="input"
                        className="w-100 rounded border-1"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        variant="outline-success"
                      />
                    </Col>
                    <Col md={4} xs={12} className="m-0">
                      <Button
                        variant="dark"
                        className="btn btn-sm"
                        onClick={() => {
                          handleEdit(todo.id);
                        }}
                      >
                        <FaCheck /> Edit
                      </Button>
                    </Col>
                  </Row>
                )}
                <small>
                  <b className="text-dark">&#11042;</b>
                  Completed :{todo.completed.toString()}
                </small>
              </Col>
              <Col md={2} xs={12} style={{ alignItems: "end" }}>
                {isComplete ? (
                  <FaCheckDouble />
                ) : (
                  <Dropdown>
                    <Dropdown.Toggle variant="dark" id="dropdown-basic">
                      <RiListSettingsLine />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => {
                          setIsEdit(!isEdit);
                        }}
                      >
                        {" "}
                        <MdEditDocument />
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          handleComplete(todo.id);
                        }}
                      >
                        <MdCheckCircle />
                        Complete
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          handleDelete(todo.id);
                        }}
                      >
                        <MdDeleteForever />
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                )}
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
};

export default Items;

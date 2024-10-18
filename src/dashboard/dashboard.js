import React, { useEffect } from "react";
import { Card } from "../components/Card";
import { useState } from "react";
import { Items } from "../components/Items";
import Container from "react-bootstrap/Container";
import Collapse from "react-bootstrap/Collapse";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import Dash_Data_Block from "../components/dash_data_block";

function Dashboard() {
  //states

  const [todos, setTodos] = useState([]);
  const [open, setOpen] = useState(false);
  //useeffect
  useEffect(() => {
    getTodos();
  }, []);
  //load todos
  const getTodos = async () => {
    await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data.slice(0, 10));
      })
      .catch((error) => console.log("error fetching todos", error));
  };
  const onSubmitTodo = async (e) => {
    e.preventDefault();
    const title = e.target.todotitle.value;
    await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        completed: false,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTodos((todos) => [...todos, data]);
      })
      .catch((error) => console.log("error when inserting todo", error))
      .finally(() => {
        //reset form
        e.target.todotitle.value = "";
        //collapse add form
        setOpen(!open);
      });
  };
  const onDeleteTodo = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        setTodos(
          todos.filter((todo) => {
            return todo.id != id;
          })
        );
      })
      .catch((error) => console.log("error when deleting todo", error));
  };
  const onEditTodo = async (title, id) => {
    const newId = id - 1;
    console.log(newId);
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: title,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const newItem = { ...todos[newId], title: data.title };
        // Remove the old item and insert the new one in the same position
        const updatedList = [...todos];
        updatedList.splice(newId, 1, newItem);
        //update todos
        setTodos(updatedList);
      })
      .catch((error) => console.log("error when editing todo", error));
  };
  const onCompleteTodo = async (id) => {
    console.log(id);
    //new id to locate the item
    const newId = id - 1;
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        completed: true,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const newItem = { ...todos[newId], completed: data.completed };

        // Remove the old item and insert the new one in the same position
        const updatedList = [...todos];
        updatedList.splice(newId, 1, newItem);
        //update todos
        setTodos(updatedList);
      })
      .catch((error) => console.log("error when completing todo", error));
  };
  return (
    <div>
      <Container>
        <Dash_Data_Block />
        <Row>
          <Col md={4}>
            <Row>
              <div>
                <div className="d-flex justify-content-between mx-5 mt-2 mb-4">
                  <h4 className="fw-bold">New to do task</h4>
                  <Button variant="dark" onClick={() => setOpen(!open)}>
                    <FaPlus /> Add Task
                  </Button>
                </div>
              </div>
            </Row>
            <Container className="pb-5">
              <Collapse in={open}>
                <Form
                  onSubmit={onSubmitTodo}
                  className="text-center"
                  style={{ backgroundColor: "#f1f1f1", borderRadius: 15 }}
                >
                  <Form.Group className="mb-3 p-3">
                    <Form.Label>Type To-do title</Form.Label>
                    <Form.Control
                      type="text"
                      id="todotitle"
                      placeholder="Enter to-do title"
                    />
                    <Button variant="dark" className="my-3 w-50" type="submit">
                      Submit
                    </Button>
                  </Form.Group>
                </Form>
              </Collapse>
            </Container>
          </Col>

          <Col md={8}>
            <div className="container">
              <Card header="To Do">
                {todos.map(
                  (todo, index) =>
                    todo.completed === false && (
                      <Items
                        todo={todo}
                        key={index}
                        onDelete={onDeleteTodo}
                        onEdit={onEditTodo}
                        onComplete={onCompleteTodo}
                        isComplete={false}
                      />
                    )
                )}
              </Card>
            </div>
          </Col>
          {/* <Col md={4}>
            <Container>
              <div>
                <div className="d-flex justify-content-between  mt-2 mb-4">
                  <h4 className="fw-bold">Completed</h4>
                </div>
              </div>
            </Container>
            <Container>
              <Card header="Completed">
                {todos &&
                  todos.map(
                    (todo, index) =>
                      todo.completed === true && (
                        <Items todo={todo} key={index} isComplete={true} />
                      )
                  )}
              </Card>
            </Container>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;

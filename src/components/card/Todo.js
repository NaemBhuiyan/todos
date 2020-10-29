import React, { useEffect, useState } from "react";
import { Badge, Button, Col, Form, Input, Row } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import TodosCard from "./TodosCard";

import { addTodo, allTodo, clearTodo } from "../redux";

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const setTodos = useDispatch();
  const setClearTodo = useDispatch();
  const [todoText, setTodoText] = useState("");
  const [showTodos, setShowTodos] = useState(todos);
  const leftTask = todos.filter((todo) => !todo.complete).length;
  const activeTask = todos.filter((todo) => !todo.complete);
  const completeTask = todos.filter((todo) => todo.complete);
  useEffect(() => {
    setShowTodos(todos);
  }, [todos]);
  return (
    <div className="container">
      <h2 className="text-center mt-6">ToDo</h2>
      <Row className="mb-5 mt-6 d-flex justify-content-center ">
        <Col xs="8">
          <h4 className="d-inline-block mr-4">
            Left Task <Badge color="primary"> {leftTask}</Badge>
          </h4>
          <Button
            className="  mr-4"
            onClick={() => {
              setTodos(allTodo());
            }}>
            All Task
          </Button>
          <Button
            className="mr-4"
            onClick={() => {
              setShowTodos(activeTask);
            }}>
            Active Task
          </Button>
          <Button
            className="mr-4"
            onClick={() => {
              setShowTodos(completeTask);
            }}>
            Complete Task
          </Button>
          {completeTask.length > 0 && (
            <Button
              onClick={() => {
                setClearTodo(clearTodo(activeTask));
              }}>
              Clear complete
            </Button>
          )}
        </Col>
      </Row>
      <Row className="justify-content-center mb-4">
        <Col xs="6">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              todoText && setTodos(addTodo(todoText));
              setShowTodos(todos);
              setTodoText("");
            }}>
            <Row form>
              <Col>
                <Input
                  bsSize="lg"
                  placeholder="Enter your Todo"
                  value={todoText}
                  onChange={({ target }) => {
                    setTodoText(target.value);
                  }}
                />
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <div className="col-7">
          {showTodos.map((todo, index) => (
            <TodosCard key={index} todo={todo}></TodosCard>
          ))}
        </div>
      </Row>
    </div>
  );
};

export default Todo;

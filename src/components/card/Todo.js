import React, { useEffect, useState } from "react";
import { Badge, Button, Col, Form, Input, Row } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import TodosCard from "./TodosCard";

import { addTodo, activeTodo, allTodo } from "../redux";

const Layout = () => {
  const todos = useSelector((state) => state.todos);
  const setTodos = useDispatch();
  const [todoText, setTodoText] = useState("");
  const [showTodos, setShowTodos] = useState(todos);
  const leftTask = todos.filter((todo) => !todo.complete).length;
  const activeTask = todos.filter((todo) => !todo.complete);
  useEffect(() => {
    setShowTodos(todos);
  }, [todos]);
  console.log(todos);
  return (
    <div className="container">
      <Row className="mb-5 mt-6 ">
        <Col xs="auto">
          <h4>
            leftTask <Badge color="primary"> {leftTask}</Badge>
          </h4>
        </Col>
        <Col>
          <Button
            className="  mr-4"
            onClick={() => {
              setTodos(allTodo());
              setShowTodos(todos);
            }}>
            All Task
          </Button>
          <Button
            onClick={() => {
              setShowTodos(activeTask);
            }}>
            Active Task
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-center mb-4">
        <Col xs="5">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              setTodos(addTodo(todoText));
              setShowTodos(todos);
              setTodoText("");
            }}>
            <Row form>
              <Col>
                <Input
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
        <div className="col-6">
          {showTodos.map((todo, index) => (
            <TodosCard key={index} todo={todo}></TodosCard>
          ))}
        </div>
      </Row>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     todos: state.todos,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addTodo: () => dispatch(addTodo()),
//   };
// };

export default Layout;

import React, { useState } from "react";
import { Col, Form, Input, Row } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import TodosCard from "./TodosCard";

import { addTodo } from "../redux";

const Layout = () => {
  const todos = useSelector((state) => state.todos);
  const setTodos = useDispatch();
  console.log(todos);
  const [todoText, setTodoText] = useState("");
  return (
    <div>
      <Row className="justify-content-center mb-4">
        <Col xs="5" className="text-center">
          <h1 className="mb-6 mt-3">Todo</h1>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              setTodos(addTodo(todoText));
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
      <div className="row no-gutters justify-content-center">
        <div className="col-6">
          {todos.map((todo, index) => (
            <TodosCard key={index} todo={todo}></TodosCard>
          ))}
        </div>
      </div>
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

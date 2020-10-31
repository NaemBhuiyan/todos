import React, { useEffect, useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Badge,
  Button,
  Col,
  Form,
  Input,
  Row,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import classnames from "classnames";

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
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div className="container">
      <h2 className="text-center mt-6 mb-5">ToDo</h2>
      <Row>
        <Col>
          <Nav className="justify-content-center">
            <NavItem>
              <h4 className="d-inline-block mr-4">
                Left Task <Badge color="primary"> {leftTask}</Badge>
              </h4>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames("p-0", { active: activeTab === "1" })}
                onClick={() => {
                  toggle("1");
                }}>
                <Button
                  className="mr-4"
                  onClick={() => {
                    setTodos(allTodo());
                  }}>
                  All Task
                </Button>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames("p-0", { active: activeTab === "2" })}
                onClick={() => {
                  toggle("2");
                }}>
                <Button
                  className="mr-4"
                  onClick={() => {
                    setShowTodos(activeTask);
                  }}>
                  Active Task
                </Button>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames("p-0", { active: activeTab === "3" })}
                onClick={() => {
                  toggle("3");
                }}>
                <Button
                  className="mr-4"
                  onClick={() => {
                    setShowTodos(completeTask);
                  }}>
                  Complete Task
                </Button>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="p-0">
                {completeTask.length > 0 && (
                  <Button
                    onClick={() => {
                      setClearTodo(clearTodo(activeTask));
                    }}>
                    Clear complete
                  </Button>
                )}
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
      </Row>
      <Row className="justify-content-center mb-4 mt-5">
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
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row className="justify-content-center">
            <div className="col-7">
              {todos.map((todo, index) => (
                <TodosCard key={index} todo={todo}></TodosCard>
              ))}
            </div>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row className="justify-content-center">
            <div className="col-7">
              {activeTask.map((todo, index) => (
                <TodosCard key={index} todo={todo}></TodosCard>
              ))}
            </div>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row className="justify-content-center">
            <div className="col-7">
              {completeTask.map((todo, index) => (
                <TodosCard key={index} todo={todo}></TodosCard>
              ))}
            </div>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Todo;

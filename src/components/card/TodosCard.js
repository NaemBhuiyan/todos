import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Card, CardBody } from "reactstrap";
import TodoText from "./TodoText";
import { deleteTodo } from "../redux";

const TodosCard = ({ todo }) => {
  const [doubleClick, setDoubleClick] = useState(false);
  const [showDelButton, setShowDelButton] = useState(false);
  const setDeleteTask = useDispatch();
  return (
    <Card
      className="mb-4"
      onMouseEnter={() => {
        setShowDelButton(true);
      }}
      onMouseLeave={() => {
        setShowDelButton(false);
      }}
      onDoubleClick={() => {
        setDoubleClick(true);
      }}>
      <CardBody className="d-flex justify-content-between">
        <TodoText
          todo={todo}
          doubleClick={doubleClick}
          setDoubleClick={setDoubleClick}
        />
        {showDelButton && (
          <Button
            close
            aria-label="Cancel"
            onClick={() => {
              setDeleteTask(deleteTodo(todo.id));
            }}>
            <span aria-hidden>&ndash;</span>
          </Button>
        )}
      </CardBody>
    </Card>
  );
};

export default TodosCard;

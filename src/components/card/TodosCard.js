import React, { useContext, useState } from "react";
import { Button, Card, CardBody } from "reactstrap";
import AppContext from "../context";
import TodoText from "./TodoText";

const TodosCard = ({ todo }) => {
  const { editTodoText, setEditTodoText, isShow, setIsShow } = useContext(
    AppContext
  );
  const { text, id } = todo;

  const [editId, setEditId] = useState(id);

  return (
    <Card className="mb-4">
      <CardBody className="d-flex justify-content-between">
        <TodoText todo={todo} editId={editId} />
        <Button
          onClick={() => {
            setIsShow(true);
            setEditId(id);
          }}>
          Edit
        </Button>
      </CardBody>
    </Card>
  );
};

export default TodosCard;

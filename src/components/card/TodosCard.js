import React, { useContext, useState } from "react";
import { Button, Card, CardBody } from "reactstrap";
import TodoText from "./TodoText";

const TodosCard = ({ todo }) => {
  return (
    <Card className="mb-4">
      <CardBody className="d-flex justify-content-between">
        <TodoText todo={todo} />
        <Button>Edit</Button>
      </CardBody>
    </Card>
  );
};

export default TodosCard;

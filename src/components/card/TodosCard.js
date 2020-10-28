import React, { useContext, useState } from "react";
import { Button, Card, CardBody } from "reactstrap";
import TodoText from "./TodoText";

const TodosCard = ({ todo }) => {
  const [doubleClick, setDoubleClick] = useState(false);
  return (
    <Card
      className="mb-4"
      onDoubleClick={() => {
        console.log("duble");
        setDoubleClick(true);
      }}>
      <CardBody className="d-flex justify-content-between">
        <TodoText
          todo={todo}
          doubleClick={doubleClick}
          setDoubleClick={setDoubleClick}
        />
      </CardBody>
    </Card>
  );
};

export default TodosCard;

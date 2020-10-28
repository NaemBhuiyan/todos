import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { CustomInput, Form, Input } from "reactstrap";
import { completeTodo, editTodo } from "../redux";

const TodoText = ({ todo, doubleClick, setDoubleClick }) => {
  const setCompleteTodos = useDispatch();
  const setEditTodos = useDispatch();
  const [changeText, setChangedText] = useState("");

  const { text, id, complete } = todo;
  return (
    <>
      <div className="row no-gutters">
        <div className="col-auto align-middle">
          {!doubleClick && (
            <CustomInput
              type="checkbox"
              id={id}
              onChange={({ target }) => {
                setCompleteTodos(completeTodo(id, target.checked));
              }}
              checked={complete}
            />
          )}
        </div>
        <div className="col align-top">
          {!doubleClick ? (
            <h5 className="mb-0">{complete ? <del>{text}</del> : text}</h5>
          ) : (
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                setDoubleClick(false);
                setEditTodos(editTodo(id, changeText));
              }}>
              <Input
                defaultValue={text}
                onChange={({ target }) => {
                  setChangedText(target.value);
                }}
              />
            </Form>
          )}
        </div>
      </div>
    </>
  );
};

TodoText.propTypes = {
  todo: PropTypes.object,
  doubleClick: PropTypes.bool,
  setDoubleClick: PropTypes.func,
};

export default TodoText;

import React, { useState, memo } from "react";
import { useSelector, useDispatch } from "react-redux";

import { CustomInput, Input } from "reactstrap";
import PropTypes from "prop-types";
import { completeTodo } from "../redux";

const TodoText = memo(function TodoText({ todo }) {
  const todos = useSelector((state) => state.todos);
  const setCompleteTodos = useDispatch();

  console.log(todos);

  const { text, id, complete } = todo;
  return (
    <>
      <div className="row no-gutters">
        <div className="col-auto align-middle">
          <CustomInput
            type="checkbox"
            id={id}
            onChange={({ target }) => {
              setCompleteTodos(completeTodo(target.checked, id, todos));
            }}
            checked={complete}
          />
        </div>
        <div className="col align-top">
          <h5 className="mb-0">{complete ? <del>{text}</del> : text}</h5>
          {/* {!isComplete ? (
            
          ) : (
            <Input defaultValue={text}></Input>
          )} */}
        </div>
      </div>
    </>
  );
});

TodoText.propTypes = {};

export default TodoText;

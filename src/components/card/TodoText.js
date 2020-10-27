import React, { useContext, useState, memo } from "react";

import { CustomInput, Input } from "reactstrap";
import AppContext from "../context";
import PropTypes from "prop-types";

const TodoText = memo(function TodoText({ todo, editId }) {
  const [isCheck, setIsCheck] = useState(false);
  const { handleDelete, handleEdit, setIsShow, isShow } = useContext(
    AppContext
  );
  const { text, id } = todo;
  return (
    <>
      <div className="row no-gutters">
        <div className="col-auto align-middle">
          <CustomInput
            type="checkbox"
            id={id}
            onChange={({ target }) => {
              setIsCheck(target.checked);
            }}
          />
        </div>
        <div className="col align-top">
          {!isShow ? (
            <h5 className="mb-0">{isCheck ? <del>{text}</del> : text}</h5>
          ) : (
            <Input defaultValue={text}></Input>
          )}
        </div>
      </div>
    </>
  );
});

TodoText.propTypes = {};

export default TodoText;

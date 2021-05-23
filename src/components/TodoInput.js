import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/app.actions";
import { Button, Input } from "antd";
import { v1 as uuid } from "uuid";

const TodoInput = () => {
  const [name, setName] = useState("");
  let dispatch = useDispatch();
  const handleAddTodo = () => {
    dispatch(
      addTodo({
        id: uuid(),
        name: name,
      })
    );
    setName("");
  };
  return (
    <div>
      <div className="input-group mb-3">
        <Input
          className="form-control m-1"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button
          className="btn btn-primary m-1"
          onClick={name ? handleAddTodo : null}
          size="medium"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoInput;

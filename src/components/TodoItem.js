import React, { useState } from "react";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/app.actions";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(todo.name);
  return (
    <div>
      <div className="input-group mb-3 align-items-center">
        <div className="col">
          {edit ? (
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              value={name}
            />
          ) : (
            <h4>{todo.name}</h4>
          )}
        </div>
        <Button
          type="primary"
          className="m-1"
          onClick={() => {
            if (edit) {
              setName(todo.name);
              dispatch(
                updateTodo({
                  ...todo,
                  name: name,
                })
              );
            }
            setEdit(!edit);
          }}
        >
          {edit ? "Update" : "Edit"}
        </Button>
        <Button
          type="danger"
          className="m-1"
          onClick={() => dispatch(deleteTodo({ id: todo.id }))}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default TodoItem;

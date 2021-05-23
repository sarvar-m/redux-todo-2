import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.app);
  return (
    <div>
      <div className="my-3">
        <ol>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                <TodoItem todo={todo} />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default TodoList;

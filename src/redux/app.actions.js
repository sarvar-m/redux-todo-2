export const addTodo = (todo) => {
  return {
    type: "ADD_TODO",
    payload: todo,
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
};

export const updateTodo = (todo) => {
  return {
    type: "UPDATE_TODO",
    payload: todo,
  };
};

export const addTodoSaga = (todo) => {
  return {
    type: "ADD_TODO_SAGA",
    payload: todo,
  };
};

export const deleteTodoSaga = (id) => {
  return {
    type: "DELETE_TODO_SAGA",
    payload: id,
  };
};

export const updateTodoSaga = (todo) => {
  return {
    type: "UPDATE_TODO_SAGA",
    payload: todo,
  };
};

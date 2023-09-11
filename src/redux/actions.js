// Action types
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

// Action creators
export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: { content },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id },
});

export const editTodo = (id, content) => ({
  type: EDIT_TODO,
  payload: { id, content },
});

export const completeTodo = (id) => ({
  type: COMPLETE_TODO,
  payload: { id },
});

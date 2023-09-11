import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

// Component to display a list of todo items
const TodoList = () => {
  // Access the 'data' slice of the Redux state
  const todos = useSelector((state) => state.data);

  // Render the list of todo items
  return (
    <div className="todo-list">
      {Object.keys(todos).map((id) => (
        <TodoItem key={id} id={id} {...todos[id]} />
      ))}
    </div>
  );
};

// Export the TodoList component
export default TodoList;

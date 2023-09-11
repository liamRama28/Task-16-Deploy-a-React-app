import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo, completeTodo } from '../redux/actions';

// Component to display a single todo item
const TodoItem = ({ id, content, completed }) => {
  const dispatch = useDispatch();

  // Function to handle deletion of the todo item
  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  // Function to handle editing the todo item
  const handleEdit = () => {
    const newContent = prompt('Edit task:', content); // Prompt user for new content
    if (newContent !== null) { // Check if user provided new content
      dispatch(editTodo(id, newContent)); // Dispatch action to edit the task
    }
  };

  // Function to handle marking the todo item as completed
  const handleComplete = () => {
    dispatch(completeTodo(id)); // Dispatch action to mark task as completed
  };

  // Render the todo item with appropriate buttons
  return (
    <div className={`todo-item ${completed ? 'completed' : ''}`}>
      <p>{content}</p>
      <div className="button-container">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
        {!completed && <button onClick={handleComplete}>Completed</button>}
      </div>
    </div>
  );
};

// Export the TodoItem component
export default TodoItem;

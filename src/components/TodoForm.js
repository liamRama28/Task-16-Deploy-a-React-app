// Import necessary dependencies
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';

// Component for adding new tasks
const TodoForm = () => {
  // State to manage the input field for new tasks
  const [newTodo, setNewTodo] = useState('');

  // Access the Redux dispatch function
  const dispatch = useDispatch();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page from refreshing
    if (newTodo.trim() !== '') { // Check if input is not empty
      dispatch(addTodo(newTodo)); // Dispatch action to add new task
      setNewTodo(''); // Clear input field after submission
    }
  };

  // Render the form for adding tasks
  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Enter new task"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)} // Update newTodo state on input change
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

// Export the TodoForm component
export default TodoForm;

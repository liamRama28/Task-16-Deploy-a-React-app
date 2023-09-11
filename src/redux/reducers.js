import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
} from './actions';

// Initial state for todo items
const initialTodoState = {
  nextId: 2, // Initial nextId value
  data: {
    1: {
      content: 'Content 1',
      completed: false,
    },
  },
};

// Reducer function for managing todo items
const todoReducer = (state = initialTodoState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const newId = state.nextId;
      return {
        ...state,
        nextId: newId + 1,
        data: {
          ...state.data,
          [newId]: {
            content: action.payload.content,
            completed: false,
          },
        },
      };
    }
    case DELETE_TODO: {
      const newData = { ...state.data };
      delete newData[action.payload.id];
      return {
        ...state,
        data: newData,
      };
    }
    case EDIT_TODO: {
      const id = action.payload.id;
      return {
        ...state,
        data: {
          ...state.data,
          [id]: {
            ...state.data[id],
            content: action.payload.content,
          },
        },
      };
    }
    case COMPLETE_TODO: {
      const id = action.payload.id;
      return {
        ...state,
        data: {
          ...state.data,
          [id]: {
            ...state.data[id],
            completed: true,
          },
        },
      };
    }
    default:
      return state; // Return current state if action type is unknown
  }
};

export default todoReducer;

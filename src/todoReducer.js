import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO } from './types';

const initialState = {
  nextId: 1, // Start with ID 1
  data: {}, // Start with an empty object
};

const todoReducer = (state = initialState, action) => {
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
      const updatedData = { ...state.data };
      delete updatedData[action.payload.id];
      return {
        ...state,
        data: updatedData,
      };
    }
    case EDIT_TODO: {
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: {
            ...state.data[action.payload.id],
            content: action.payload.content,
          },
        },
      };
    }
    case COMPLETE_TODO: {
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: {
            ...state.data[action.payload.id],
            completed: true,
          },
        },
      };
    }
    default:
      return state;
  }
};

export default todoReducer;

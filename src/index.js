import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';  // Import Provider
import { createStore } from 'redux';    // Import createStore
import todoReducer from './redux/reducers';  // Import your reducer

const store = createStore(todoReducer);  // Create a Redux store using your reducer

ReactDOM.render(
  <Provider store={store}>  {/* Wrap your App component with Provider and pass the store */}
    <App />
  </Provider>,
  document.getElementById('root')
);

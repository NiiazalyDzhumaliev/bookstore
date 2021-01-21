import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/books';
import App from './components/App';

const initialState = {
  books: [
    {
      title: 'War and Piece',
      category: 'novel',
      id: 1,
    },
    {
      title: 'War and Piece',
      category: 'novel',
      id: 2,
    },
  ],
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

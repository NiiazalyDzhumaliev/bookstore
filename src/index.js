import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import booksReducer from './reducers/books';
import filterReducer from './reducers/filter';
import App from './components/App';

const rootReducer = combineReducers({
  bks: booksReducer,
  filt: filterReducer,
});

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Provider } from 'react-redux'
import rootReducer from './store/reducers/rootReducer.jsx';
import { applyMiddleware, createStore, compose } from 'redux'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store} >
      <App />
  </Provider>,
  document.getElementById('app')
);

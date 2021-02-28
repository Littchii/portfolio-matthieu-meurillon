import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import themeReducer from './redux/themeReducer';
import userReducer from './redux/userReducer';

export const store = createStore(combineReducers({ themeReducer, userReducer }), applyMiddleware(thunk));
export type RootState = ReturnType<typeof store | any>;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import {createSocket, socketMiddleware} from './socket';
import * as actions from './actions';
import reducer from './reducers';
import CursorContainer from './containers';

const loggerMiddleware = createLogger();

let store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    socketMiddleware,
    loggerMiddleware
  )
);

createSocket(store);

render(
  <Provider store={store}>
    <CursorContainer />
  </Provider>,
  document.getElementById('root')
);


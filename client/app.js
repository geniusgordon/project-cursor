// import io from 'socket.io-client';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import * as actions from './actions';
import reducer from './reducers';

const loggerMiddleware = createLogger();

let store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);
store.dispatch(actions.otherMouseMove({
  x: 1, y:2, id: 12345, url: 'abcde'
}));
store.dispatch(actions.otherMouseMove({
  x: 3, y:4, id: 45678, url: 'qwert'
}));
store.dispatch(actions.otherPoke({
  id: 123
}));


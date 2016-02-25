import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io';
import CursorContainer from './cursor-container';

ReactDOM.render(
  <CursorContainer />,
  document.getElementById('root')
);


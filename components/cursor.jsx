import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io';

const style = {
  width: 10,
  height: 10,
  background: '#000',
  borderRadius: '100%',
  position: 'fixed'
};

const Cursor = ({x, y}) => (
    <div 
      className="cursor"
      style={Object.assign({}, style, {left: x, top: y})}></div>
);

export default Cursor;


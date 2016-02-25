import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io';

const style = {
  width: 10,
  height: 10,
  borderRadius: '100%',
  position: 'fixed'
};

const strHash = s => s.split("").reduce((a,b) => {
  a = ((a << 5) - a) + b.charCodeAt(0);
  return (a & a) % 0xffffff;
}, 0);

const Cursor = ({id, x, y}) => {
    return <div 
      className="cursor"
      style={Object.assign({}, style, {
        left: x,
        top: y,
        backgroundColor: '#' + strHash(id).toString(16)
      })}></div>
};

export default Cursor;


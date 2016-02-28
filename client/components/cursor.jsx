import React from 'react';

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

const Cursor = ({x, y, id, onClick}) => (
  <div
    className="cursor"
    style={Object.assign({}, style, {
      left: x,
      top: y,
      backgroundColor: '#' + strHash(id).toString(16),
    })}
    onClick={onClick}
  ></div>
);

export default Cursor;


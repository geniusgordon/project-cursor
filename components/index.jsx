import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io';

let socket = io.connect();

const CursorContainer = React.createClass({
  componentDidMount() {
    document.addEventListener('mousemove', this.handleMouseMove);
  },
  componentWillUnmount() {
    document.removeEventListener('mousemove', this.handleMouseMove);
  },
  handleMouseMove(e) {
    socket.emit('mousemove', {
      x: e.clientX,
      y: e.clientY,
      url: document.location.href
    });
  },
  render() {
    return <div></div>
  }
});

ReactDOM.render(
  <CursorContainer />,
  document.getElementById('root')
);


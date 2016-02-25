import React from 'react';
import io from 'socket.io';
import Cursor from './cursor';

let socket = io.connect();

const CursorContainer = React.createClass({
  getInitialState() {
    return {
      cursors: {}
    };
  },
  componentDidMount() {
    socket.on('othermousemove', this.handleOtherMouseMove);
    socket.on('othermouseleave',this.handleOtherMouseLeave);
    document.addEventListener('mousemove', this.handleMouseMove);
  },
  componentWillUnmount() {
    document.removeEventListener('mousemove', this.handleMouseMove);
  },
  handleMouseMove(e) {
    socket.emit('mousemove', {
      id: socket.id,
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
      url: document.location.href
    });
  },
  handleOtherMouseMove(data) {
    if (data.id && data.id != socket.id) {
      let cursors = this.state.cursors;
      cursors[data.id] = {x: data.x, y: data.y};
      this.setState({cursors: cursors});
    }
  },
  handleOtherMouseLeave(data) {
    if (data.id) {
      let cursors = this.state.cursors;
      cursors[data.id] = null;
      this.setState({cursors: cursors});
    }
  },
  render() {
    let cursors = this.state.cursors;
    let c = Object.keys(cursors).map(key => {
      if (!cursors[key]) return;
      let x = cursors[key].x * window.innerWidth;
      let y = cursors[key].y * window.innerHeight;
      return <Cursor key={key} id={key} x={x} y={y} />
    });
    return <div>{c}</div>;
  }
});

export default CursorContainer;


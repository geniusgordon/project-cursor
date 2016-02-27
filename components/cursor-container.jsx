import React from 'react';
import io from 'socket.io';
import Cursor from './cursor';

import AlertBlock from './alertblock';

let socket = io.connect();

const CursorContainer = React.createClass({
  getInitialState() {
    return {
      cursors: {},
      isPoked : false,
      poker:'',
    };
  },
  componentDidMount() {
    socket.on('othermousemove', this.handleOtherMouseMove);
    socket.on('othermouseleave',this.handleOtherMouseLeave);
    socket.on('pokeother',this.handlePokeByOther);
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
  handlePokeByOther(data){
    this._alert && clearTimeout(this._alert);
    this.setState({isPoked: true, poker : data});
    this._alert = setTimeout(() => {
      this.setState({isPoked : false});
    }, 2500);
  },
  render() {
    let cursors = this.state.cursors;
    let c = Object.keys(cursors).map(key => {
      if (!cursors[key]) return;
      let x = cursors[key].x * window.innerWidth;
      let y = cursors[key].y * window.innerHeight;
      return <Cursor key={key} id={key} x={x} y={y} />
    });
    return <div><AlertBlock poker={this.state.poker} alerton={this.state.isPoked} />{c}</div>;
  }
});

export default CursorContainer;


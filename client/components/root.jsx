import React from 'react';
import Cursor from './cursor';
import AlertBlock from './alertblock';

const Root = React.createClass({
  componentDidMount() {
    document.addEventListener('mousemove', this.props.handleMouseMove);
  },
  render() {
    let cursors = this.props.cursors;
    let c = Object.keys(cursors).map(key => {
      if (!cursors[key]) return;
      let x = cursors[key].x * window.innerWidth;
      let y = cursors[key].y * window.innerHeight;
      return <Cursor 
        key={key} 
        id={key} 
        x={x} 
        y={y} 
        onClick={(e) => {this.props.handlePoke(e, key)}}
      />
    });
    return (
      <div>
        <AlertBlock poke={this.props.poke} />
        {c}
      </div>
    );
  }
});

export default Root;


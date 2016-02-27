import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io';
import AlertBlock from './alertblock.jsx';

let socket = io.connect();

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

const Cursor = React.createClass({
    getInitialState(){
        return{
            isClicked : false, 
        };
    }, 
    handleClick(){
        socket.emit('pokeother',this.props.id);
    },
    render(){

      return(
          <div 
          className="cursor"
          style={Object.assign({}, style, {
            left: this.props.x,
            top: this.props.y,
            backgroundColor: '#' + strHash(this.props.id).toString(16),
          })}
            onClick =  {this.handleClick}
          ></div>
          );  
    }
});

export default Cursor;


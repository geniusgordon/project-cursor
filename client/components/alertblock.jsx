import React from 'react';

const styles = {
  position: 'fixed',
  padding: 5,
  background: '#B00',
  color: '#FFF',
  top: '10%',
  height: 'auto',
  width: 'auto',
  cursor: 'pointer',
  transition: 'all 0.5s ease-in-out',        
};

const AlertBlock = ({poke}) => {
  let left = poke.isPoked ? {left: 0} : {left: '-100%'};
  return (
    <div
      style={Object.assign({}, styles, left)}
    >{poke.poker} poke you ~</div>
  );
};

export default AlertBlock; 


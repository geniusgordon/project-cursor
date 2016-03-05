import React from 'react';

const styles = {
  alert_block:{
      position: 'fixed',
      padding: 5,
      background: '#FFF',
      color: '#000',
      top: '10%',
      height: 'auto',
      width: 'auto',
      cursor: 'pointer',
      transition: 'all 0.5s ease-in-out'
    },
  respond_block:{
      marginTop:'5px',
      transition: 'all 0.5s ease-in-out',
      border:'2px solid #000',
      padding:5,
    },
  check:{
      borderColor:'#0D0',
    },
  cancel:{
      borderColor:'#D00',
    },        
};

const AlertBlock = ({poke,check,cancel}) => {
  let left = poke.isPoked ? {left: 0} : {left: '-100%'};
  return (
    <div
      style={Object.assign({}, styles.alert_block, left)}
    >
        <div>{poke.poker} poke you ~</div>
        <div style={Object.assign({},styles.respond_block,styles.check)} onClick={check} >Check</div>
        <div style={Object.assign({},styles.respond_block,styles.cancel)} onClick={cancel} >Cancel</div>
    </div>
  );
};

export default AlertBlock; 


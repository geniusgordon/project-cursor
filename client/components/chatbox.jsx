import React from 'react';

const styles = {
    chatbox:{
        position:'fixed',
        bottom:'0px',
        right:'5px',
        width:'auto',
        height:'30%',
        border:'2px solid #000',
    },
    chattitle:{
        padding:'5px',
        height:'auto',
        fontWeight:'bold',
        background:'rgba(200,100,100,0.5)',
    },
    chatcontent:{
        
    },
};
const ChatBox = ({chatid,response}) =>{ 
  let chatting = response ? {display:'block'}:{display:'none'}; 
  return(
  <div
    className="chatbox"
    style = {Object.assign({},styles.chatbox,chatting)}  
    >
    <div className="chattitle" style={Object.assign({},styles.chattitle)}>
        {chatid}
    </div>
    <div className="chatcontent">
    </div>
  </div>
);

};

export default ChatBox;


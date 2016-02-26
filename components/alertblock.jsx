import React from 'react';


const styles = {

    alert_block : {
        position: 'fixed',
        padding:'5px',
        background:'#B00',
        color:'#FFF',
        top: '10%',
        height:'auto',
        width:'auto',
        cursor: 'pointer',
        transition: 'all 0.5s ease-in-out',        
    },
};

const AlertBlock=React.createClass({

    getInitialState(){
        return{
            isReplyed : false,
        }
    },

    handleMouseClick(){
        this.setState({
            isReplyed : !this.state.isReplyed,
        });
    },

    render(){
        let left_dist = this.state.isDisplay ? '-100%':'0';
        return <div className="alertblock" 
                    style={Object.assign({},styles.alert_block,{left:left_dist,})}
                >{this.props.cursorname} poke you ~ </div>
    }
});

export default AlertBlock; 

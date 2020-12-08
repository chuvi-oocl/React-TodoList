import React, { Component} from 'react';

export default class TodoItemText extends Component {
    constructor(props){
        super(props);
        this.state = {
            customStyles : { }
        }
    }
    
    shouldComponentUpdate = (newProps) =>{
        if(newProps.done !== this.props.done){
            if(newProps.done){
                this.setState({customStyles: { textDecorationLine: 'line-through', textDecorationStyle: 'solid'}});
            }
            else{
                this.setState({customStyles: {}});
            }
        }
        return true;
    }
    
    

    render(){
        const {toggleDone, text} = this.props;
        return <span style={this.state.customStyles} onClick={toggleDone} done={this.props.done}>{text}{this.props.done?"true":"false"}</span>
    }
}
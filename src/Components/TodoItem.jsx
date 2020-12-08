import React, { Component } from 'react';
import './components.css';

export default class TodoListGroup extends Component {
    constructor(props){
        super(props);
    }

    onToggleDone = () => {
        this.props.toggleDone(this.props.item.id);
    }

    deleteItem = () => {
        this.props.deleteItem(this.props.item.id);
    }

    render() {
        const {text, done, id} = this.props.item;
        const todoTextGenStyle = {backgroundColor: 'lightgray'}
        const todoTextStyle = done ? {...todoTextGenStyle,textDecorationLine: 'line-through', textDecorationStyle: 'solid'} : todoTextGenStyle;
        return (
            <div>
                <label style={todoTextStyle} onClick={this.onToggleDone}  >{text}</label>
                <input type="button" value="X" onClick={this.deleteItem}></input>
            </div>
        
        )
    }
}
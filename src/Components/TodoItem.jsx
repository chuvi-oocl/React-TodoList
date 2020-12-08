import React, { Component } from 'react';

export default class TodoListGroup extends Component {
    constructor(props){
        super(props);
    }

    shouldComponentUpdate(prevProp){
        console.log(prevProp.todoList)
        console.log(this.props.todoList)
        if(prevProp.todoList != this.props.todoList){
            console.log("testing");
        }
        return true;
    }

    onToggleDone = () => {
        this.props.toggleDone(this.props.item.id);
    }

    deleteItem = () => {
        this.props.deleteItem(this.props.item.id);
    }

    render() {
        const {text, done, id} = this.props.item;
        const todoTextStyle = done ? { textDecorationLine: 'line-through', textDecorationStyle: 'solid'} : {};
        return (
            <div className={text && done?"true":"false"} >
                <span style={todoTextStyle} onClick={this.onToggleDone} >{text}</span>
                <input type="button" value="X" onClick={this.deleteItem}></input>
            </div>
        
        )
    }
}
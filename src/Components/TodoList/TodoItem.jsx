import React, { Component } from "react";
import { deleteTodo, updateTodo } from "../../Apis/todos";

export default class TodoListGroup extends Component {
  onToggleDone = () => {
    const { item } = this.props;
    updateTodo({ ...item, done: !item.done }).then((response) => {
      this.props.toggleDone(response.data.id);
    });
  };

  deleteItem = () => {
    const { id } = this.props.item;
    deleteTodo(id).then((response) => {
      this.props.deleteItem(response.data.id);
    });
  };

  render() {
    const { text, done } = this.props.item;
    const todoTextGenStyle = { backgroundColor: "lightgray" };
    const todoTextStyle = done
      ? {
          ...todoTextGenStyle,
          textDecorationLine: "line-through",
          textDecorationStyle: "solid",
        }
      : todoTextGenStyle;
    return (
      <div>
        <label style={todoTextStyle} onClick={this.onToggleDone}>
          {text}
        </label>
        <input type="button" value="X" onClick={this.deleteItem}></input>
      </div>
    );
  }
}

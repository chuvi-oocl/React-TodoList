import React, { Component } from "react";
import { deleteTodo, updateDoneStatus } from "../../Apis/todos";

export default class TodoListGroup extends Component {
  onToggleDone = () => {
    const { id, done } = this.props.item;
    updateDoneStatus(id, !done).then(() => {
      this.props.toggleDone(id);
    });
  };

  deleteItem = () => {
    const { id } = this.props.item;
    deleteTodo(id).then(() => {
      this.props.deleteItem(id);
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

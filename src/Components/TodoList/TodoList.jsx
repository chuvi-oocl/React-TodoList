import React, { Component } from "react";
import TodoGeneratorContainer from "../../Containers/TodoGeneratorContainer";
import TodoListGroupContainer from "../../Containers/TodoListGroupContainer";

export default class TodoList extends Component {
  render() {
    return (
      <div>
        <h2>TodoList</h2>
        <TodoListGroupContainer />
        <TodoGeneratorContainer />
      </div>
    );
  }
}

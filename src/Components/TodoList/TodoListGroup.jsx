import React, { Component } from "react";
import { getTodoList } from "../../Apis/todos";
import TodoItemContainer from "../../Containers/TodoItemContainer";

export default class TodoListGroup extends Component {
  componentDidMount() {
    getTodoList().then((response) => {
      this.props.initTodoList(response.data);
    });
  }

  render() {
    const { todoList } = this.props;
    return todoList.map((item) => (
      <TodoItemContainer key={item.id} item={item} />
    ));
  }
}

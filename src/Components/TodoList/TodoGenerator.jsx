import React, { Component } from "react";
import { addNewTodo } from "../../Apis/todos";

export default class TodoGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
    };
  }

  changeTodo = (event) => {
    this.setState({ todo: event.target.value });
  };

  submitTodo = () => {
    addNewTodo(this.state.todo).then(response => {
      this.props.create(response.data);
    });
    this.setState({ todo: "" });
  };

  render() {
    const { todo } = this.state;

    return (
      <div>
        <input type="text" value={todo} onChange={this.changeTodo} />
        <input type="submit" onClick={this.submitTodo} />
      </div>
    );
  }
}

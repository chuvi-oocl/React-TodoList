import React, { Component } from "react";
import { getTodoList } from "../../Apis/todos";
import TodoItemContainer from "../../Containers/TodoItemContainer";
import TodoListFilter from "./TodoListFilter";

export default class TodoListGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      tagsOptions: ["Testing", "Buy", "Everyday"],
    };
  }
  componentDidMount() {
    getTodoList().then((response) => {
      this.props.initTodoList(response.data);
    });
  }

  changeKeyword = (event) => {
    this.setState({ keyword: event.target.value });
  };

  render() {
    const { todoList } = this.props;
    const { keyword } = this.state;
    return (
      <div>
        <TodoListFilter keyword={keyword} changeKeyword={this.changeKeyword} />
        {todoList
          .filter(function (item) {
            return keyword === ""
              ? true
              : item.text.indexOf(keyword) >= 0 || item.labels.toString().indexOf(keyword) >= 0;
          })
          .map((item) => (
            <TodoItemContainer
              key={item.id}
              item={item}
              tagsOptions={this.state.tagsOptions}
            />
          ))}
      </div>
    );
  }
}

import { connect } from "react-redux";

import TodoListGroup from "../Components/TodoList/TodoListGroup";

const mapStateToProps = (state) => ({
  todoList: state.todoList,
});

const TodoListGroupContainer = connect(mapStateToProps)(TodoListGroup);

export default TodoListGroupContainer;

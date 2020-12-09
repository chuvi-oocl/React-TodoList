import { connect } from "react-redux";
import { initTodoList } from "../action";

import TodoListGroup from "../Components/TodoList/TodoListGroup";

const mapStateToProps = (state) => ({
  todoList: state.todoList,
});

const mapDispatchToProps = dispatch => ({
  initTodoList: (todoList) =>{
    dispatch(initTodoList(todoList));
  }
})

const TodoListGroupContainer = connect(mapStateToProps, mapDispatchToProps)(TodoListGroup);

export default TodoListGroupContainer;

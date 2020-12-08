import {connect} from 'react-redux';

import TodoItem from '../Components/TodoItem'
import {deleteItem, toggleDone} from '../action'

const mapDispatchToProps = dispatch => {
    return{
        toggleDone: (id) => {
            dispatch(toggleDone(id));
        },
        deleteItem: (id) => {
            dispatch(deleteItem(id));
        }
    };
};

const TodoItemContainer = connect(null, mapDispatchToProps)(TodoItem);

export default TodoItemContainer;
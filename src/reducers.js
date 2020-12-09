import { combineReducers } from 'redux';
import { CREATE, TOGGLE_DONE, DELETE, INIT_TODO_LIST } from './actionTypes';

const todoList = (state = [], action) => {
    if (action.type === CREATE) {
        return state.concat([action.todoItem]);
    }
    else if (action.type === TOGGLE_DONE) {
        return state.map(todoItem => {
            if (todoItem.id === action.payload) {
                return { ...todoItem, done: !todoItem.done };
            }
            return { ...todoItem };
        });
    }
    else if (action.type === DELETE) {
        return state.filter(todoItem => todoItem.id !== action.payload);
    }
    else if(action.type === INIT_TODO_LIST){
        return action.todoList
    }
    return state
}

export default combineReducers({
    todoList
});

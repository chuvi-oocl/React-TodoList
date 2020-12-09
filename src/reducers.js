import { combineReducers } from 'redux';
import { CREATE, TOGGLE_DONE, DELETE, INIT_TODO_LIST } from './actionTypes';

import { v4 as uuidv4 } from 'uuid';

const todoList = (state = [], action) => {
    if (action.type === CREATE) {
        let newTodoItem = {
            id: uuidv4(),
            text: action.payload,
            done: false
        }
        return state.concat([newTodoItem]);
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
        return action.payload
    }
    return state
}

export default combineReducers({
    todoList
});

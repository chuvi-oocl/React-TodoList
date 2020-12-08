import {combineReducers} from 'redux';
import { CREATE, TOGGLE_DONE, DELETE } from './actionTypes';

import {v4 as uuidv4} from 'uuid';

const findItemIdxById = (todoList, id) =>{
    for (let i = 0; i < todoList.length; i++) {
            if(id == todoList[i].id){
                return i;
            }
    }
    return -1;
}

const todoList = (state = [], action) =>{
    if(action.type === CREATE){
        let newTodoItem = {
            id: uuidv4(),
            text: action.payload,
            done: false
        }
        return state.concat([newTodoItem]);
    }
    else if(action.type === TOGGLE_DONE){
        const newState = [];
        
        state.forEach(todoItem => {
            if (todoItem.id === action.payload) {
                newState.push({...todoItem,  done: !todoItem.done });
            }else{
                newState.push({...todoItem});
            }
        });

        return newState;
    }
    else if(action.type === DELETE){
        const newState = [];
        state.forEach(todoItem => {
            if (todoItem.id !== action.payload) {
                newState.push({...todoItem});
            }
        });
        return newState;
    }
    return state
}

export default combineReducers({
    todoList
});

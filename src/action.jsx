import { CREATE, TOGGLE_DONE, DELETE, INIT_TODO_LIST } from "./actionTypes"

export const create = (todoTask) => {
    return{
        type: CREATE,
        payload: todoTask
    }
}

export const toggleDone = (id) => {
    return {
        type: TOGGLE_DONE,
        payload: id
    }
}

export const deleteItem = (id) => {
    return {
        type: DELETE,
        payload: id
    }
}

export const initTodoList = (todoList) => {
    return {
        type: INIT_TODO_LIST,
        todoList
    }
}
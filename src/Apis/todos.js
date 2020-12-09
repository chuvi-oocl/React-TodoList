import api from "./api";

export const getTodoList = () => {
    return api.get("/todos");
}

export const addNewTodo = (text) => {
    return api.post("/todos", { text});
}
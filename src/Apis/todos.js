import api from "./api";

export const getTodoList = () => {
    return api.get("/todos");
}

export const addNewTodo = (text) => {
    return api.post("/todos", { text});
}

export const updateDoneStatus = (id, done) => {
    return api.put("/todos/" + id, { done });
}

export const deleteTodo = (id) => {
    return api.delete("/todos/" + id);
}
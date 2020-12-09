import api from "./api";

export const getTodoList = () => {
    return api.get("/todos");
}

export const addNewTodo = (text) => {
    return api.post("/todos", { text});
}

export const updateTodo = (todo) => {
    return api.put("/todos/" + todo.id, {
        text : todo.text,
        done : todo.done
    });
}

export const deleteTodo = (id) => {
    return api.delete("/todos/" + id);
}
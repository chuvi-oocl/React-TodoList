import api from "./api";

export const getTodoList = () =>{
    return api.get("/todos");
}
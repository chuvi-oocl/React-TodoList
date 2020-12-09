import axios from "axios";

const api = axios.create({
    baseURL : "https://5fd06b7e1f23740016631877.mockapi.io/api/"
});
export default api;
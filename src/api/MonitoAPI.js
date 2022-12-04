import axios from "axios";

export const MonitoApi = axios.create({
    baseURL: "http://localhost:8080/api",
})
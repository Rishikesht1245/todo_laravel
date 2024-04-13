import axios from "axios";

export const TodoAPI = axios.create({baseURL: `${import.meta.env.VITE_API_URL}/api/todo`});

export const AuthAPI = axios.create({baseURL : `${import.meta.env.VITE_API_URL}/api`})
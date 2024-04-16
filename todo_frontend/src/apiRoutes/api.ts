import { AuthAPI, TodoAPI } from "../config/api";
import { ILogin, IRegister } from "../interfaces/auth";
import { setAPIHeader } from "../utils/helpers";

export const LoginAPI = async (formData : ILogin) => {
    return await AuthAPI.post("/login", formData)
}

export const RegisterAPI = async(formData : IRegister) => {
    return await AuthAPI.post("/register", formData);
}

export const createTodoAPI = async(formData: {todo:string, user_id: string}) => {
  return await TodoAPI.post("/create", formData, setAPIHeader());
}

export const updateTodoAPI = async(formData:{todo:string}, id : number) => {
    return await TodoAPI.put(`/${id}`, formData);
}
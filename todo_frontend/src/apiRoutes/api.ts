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

// no need for set API header since we are using api middleware group.
// for that we can't use sessions or no need or csrf tokens.
export const updateTodoAPI = async(formData:{todo:string, user_id:string}, id : number) => {
    return await TodoAPI.put(`/${id}`, formData);
}

export const CompleteAPI = async(id:number, user_id : string) => {
    return await TodoAPI.patch(`/${id}`,{user_id} );
}
import { AuthAPI } from "../config/api";
import { ILogin, IRegister } from "../interfaces/auth";

export const LoginAPI = async (formData : ILogin) => {
    return await AuthAPI.post("/login", formData)
}

export const RegisterAPI = async(formData : IRegister) => {
    return await AuthAPI.post("/register", formData);
}
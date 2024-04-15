import { AuthAPI } from "../config/api";
import { ILogin } from "../interfaces/auth";

export const LoginAPI = async (formData : ILogin) => {
    return await AuthAPI.post("/login", formData)
}
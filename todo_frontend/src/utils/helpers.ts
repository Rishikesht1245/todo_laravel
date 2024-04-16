import { AuthAPI } from "../config/api";

export const saveLocally = (key: string, data:any) => {
    localStorage.setItem(key, JSON.stringify(data!))
}

export const getLocalData = (key:string) => {
    return JSON.parse(localStorage.getItem(key)!);
}

export const removeLocalData = () => {
    localStorage.clear();
}

export const getUserID = () => {
    const user = JSON.parse(localStorage.getItem("user")!);
    return user?.id;
}

export const setAPIHeader = () => {
    const token = getLocalData("csrf-token");
    console.log(token, "===token");
    return {headers : {'X-CSRF-TOKEN' : token } }
}

export const fetchAndSaveCSRFToken = async() => {
    try {
        
        const response = await AuthAPI.get("/csrf-token");
        console.log(response?.data?.token, "===token from backend")
        if(response && response?.data?.token){
            saveLocally("csrf-token", response?.data?.token);
        }
    } catch (error) {
        console.log("Erorr in retrieving token");
    }

}
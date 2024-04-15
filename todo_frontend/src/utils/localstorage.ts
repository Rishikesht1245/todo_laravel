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
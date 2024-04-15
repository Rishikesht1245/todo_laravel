export interface ILogin {
    email : string;
    password : string;
}

export interface IUser{
    id: number,
	name: string,
	email: string,
	email_verified_at?: string,
	created_at?: string,
	updated_at?: string
}

export interface ILoginResponse{
    data:{
        message: string;
        user: IUser
    }
    
}
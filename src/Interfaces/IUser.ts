

export interface IUser extends Document{
    username: string,
    email: string,
    password:string,
}


export interface IUserProfile extends Omit<IUser,'password'>{}
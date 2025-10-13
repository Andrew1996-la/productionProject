export interface IUser {
    id: number;
    name: string
    password: string
}

export interface IUserSchema {
    authData?: IUser
}

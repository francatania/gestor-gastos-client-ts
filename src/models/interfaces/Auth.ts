export interface LoginCredentials{
    email: string,
    password: string,
    [key:string]:string
}

export interface LoginResponse{
    token: string
}

export interface RegisterData extends LoginCredentials{
    first_name: string,
    last_name: string
}
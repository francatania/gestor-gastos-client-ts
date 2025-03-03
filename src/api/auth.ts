
import { LoginCredentials, LoginResponse, RegisterData } from '../models/interfaces/Auth.ts';
import ENDPOINTS from './endpoints.ts';

export const login = async(credentials: LoginCredentials): Promise<LoginResponse | null> => {
    try {
        const response = await fetch(ENDPOINTS.AUTH.LOGIN,{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
        });

        if(response.status == 401){
            return null;
        }

        if(!response.ok){
            throw new Error("Error")
        }

        return await response.json();
    } catch (error) {
        throw new Error(`Error en el login: ${error}`);
    }
}

export const register = async(credentials: RegisterData): Promise<void> =>{
    try {
        
    } catch (error) {
        
    }
}



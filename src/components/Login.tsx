import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import { LoginCredentials } from '../models/interfaces/Auth';
import { login } from '../api/auth';
import {startToastTimeOut} from '../utils/timeOut.ts'
import AuthForm from './AuthForm.tsx';

const Login : React.FC = () =>{
    
    const navigate = useNavigate();

    const handleLogin = async(credentials: LoginCredentials): Promise<void> =>{
        let timeoutId = startToastTimeOut();

        try {
            const response = await login(credentials)
            clearTimeout(timeoutId);

            if (!response) {
                toast.error("Usuario y/o contraseña incorrecto."); 
                return;
            }

            const {token} = response
            localStorage.setItem("token", token);
            const payload = jwtDecode<{first_name: string; last_name:string}>(token);

            if(payload){
                toast.success(`Bienvenido/a ${payload.first_name}`);
                navigate('/home')  
            }          

        } catch (error) {
            toast.error("Ocurrió un error inesperado al iniciar sesión.")
        }finally {
            clearTimeout(timeoutId);
        }
    }
 
    return (
        <AuthForm<LoginCredentials>
            title="Iniciar Sesión"
            buttonText="Iniciar sesión"
            linkText="Registrate"
            linkTo="/register"
            linkTitle="¿No tenés una cuenta?"
            fields={[
                { name: "email", type: "text", placeholder: "Email" },
                { name: "password", type: "password", placeholder: "Contraseña" }
            ]}
            onSubmit={handleLogin}
        />
    )
        
}

export default Login;
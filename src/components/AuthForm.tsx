import { useState } from "react";
import { BeatLoader } from 'react-spinners';
import { ToastContainer } from "react-toastify";
import { LoginResponse } from "../models/interfaces/Auth";
import { Link } from "react-router-dom";

interface AuthField{
    name:string,
    type:string,
    placeholder:string
}

interface AuthFormProps<T>{
    title: string
    fields: AuthField[],
    linkText: string,
    linkTo: string,
    linkTitle:string,
    buttonText:string,
    onSubmit:(credentials: T) => Promise<void | LoginResponse>;
}

const AuthForm = <T extends Record<string,string>>({
                                    title,
                                    fields,
                                    linkText,
                                    linkTo,
                                    linkTitle,
                                    buttonText,
                                    onSubmit
                                }:AuthFormProps<T>)=>{

    const [credentials, setCredentials] = useState({} as T);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async():Promise<void> =>{
        setLoading(true);
        await onSubmit(credentials);
        setLoading(false);
    }

    return (
        <div className='bg-black w-screen h-screen flex justify-center items-center'>
        <div className="bg-[#EAF2EF] w-4/5 h-2/5 md:w-2/6 md:h-2/5 flex flex-col rounded-lg">
            <div className='mt-4 h-1/5 flex flex-col items-center justify-around rounded-t-lg'>
                <h2 className='text-center font-bold w-full text-[1.5rem]'>Gestor de Gastos</h2>
                <h3 className='text-center font-semibold w-full text-[1rem]'>{title}</h3>
            </div>
            <div className='h-4/5 '>
                <div className=' h-full flex flex-col justify-around'>
                    <div className='flex flex-col justify-around items-center h-1/2 w-full'>
                        {fields.map((field)=>(
                            <input  
                            key={field.name}
                            type={field.type}
                            name={field.name}
                            value={credentials[field.name] || ""}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                            className="h-10 border-2 border-transparent rounded-md w-5/6 p-1 bg-[#f5f8f7]"/>
                        ))}
                    </div>

                    <div className='text-center'>
                        <h3>{linkTitle} <Link to={`${linkTo}`}> <span className='underline hover:cursor-pointer'>{linkText}</span> </Link></h3>
                    </div>
                    <div className='flex flex-col justify-center items-center h-10 w-full'>
                        {loading ?
                            <div className='flex text-center justify-center'>
                                <BeatLoader
                                     color="#188C7C"
                                        size={10}
                                />
                            </div> :

                            <input
                                type='submit'
                                onClick={handleSubmit}
                                value={buttonText}
                                className='w-5/6 bg-[#188C7C] text-[#f5f8f7] h-full rounded-md hover:cursor-pointer hover:scale-105 transition duration-150 ease-in-out'
                            />
                        }
                    </div>
                </div>
            </div>
            <section className='flex flex-col justify-center items-center w-full fixed bottom-0 left-0 right-0' >
                <div className='flex text-white text-sm cursor-pointer py-3 mb-2 gap-2' > 
                <h3>Desarrollado por Franco Catania</h3>
                <div className='flex justify-center items-center gap-2'>
                    <Link to={'https://www.linkedin.com/in/franco-catania-6758691a3/'} target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
                </div>

                </div>
            </section>
        </div>
        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='dark'
        />
    </div>
        );

}

export default AuthForm;
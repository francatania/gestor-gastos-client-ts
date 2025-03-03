import { toast } from 'react-toastify';

export const startToastTimeOut = (): NodeJS.Timeout =>{
    return setTimeout(() => {
        toast.info("Estamos procesando la solicitud, esto puede durar 1 minuto. Aguarde por favor.", {
            autoClose: 10000,
        });
    }, 5000);
};
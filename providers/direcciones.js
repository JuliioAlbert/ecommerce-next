import { ULR } from '../utils/contants';
import { authFecth } from '../utils/fetch';

export const crearDireccionApi = async (datos, logout) => {
    try {

        const url = `${URL}/addresses`;
        const params = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datos)
        }
        const result = await authFecth(url, params, logout);
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const listaDirecciones = async (idUser, logout) => {
    try {
 
        const url =`${URL}/address?user=${idUser}`;
        const result = await authFecth(url, null, logout);
        if(result.statusCode ===500) throw 'Error del servidor';
        return result;
    } catch (error) {
        console.log(error);
        return null;

    }
}
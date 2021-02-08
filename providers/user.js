import { ULR } from '../utils/contants';
import { authFecth } from '../utils/fetch';

export const registrarUsuario = async (data) => {
    try {
        const url = `${ULR}/auth/local/register`;
        const params = {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(data),
        }
        const res = await fetch(url, params);
        const result = await res.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }

}

export const loginAuth = async (data) => {
    try {
        const url = `${URL}/auth/local`;
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(url, params);
        const result = await response.json();
        console.log(result);

    } catch (error) {
        console.log(error)
        return null;
    }
}

export const resetPassword = async (email) => {
    try {
        const url = `${URL}/auth/forgot-password`;
        const params = {
            method: 'POST',
            headers: {
                "Content-Type": "applicacion/json",

            },
            body: JSON.stringify({ email })
        }
        const response = await fetch(url, params);
        const result = await response.json(response)
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}
export const getMeApi = async (logout) => {
    try {
        const url =`${ULR}/user/me`;
        const result = await authFecth(url, null,logout);
        return result? result : null;
    } catch (error) {
        return null
    }

}

export const updateNameApi = async (idUser, data, logout) =>{
    try {
        const url = `${ULR}/users/${idUser}`;
        const params = {
            method: 'PUT',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(data)
        }
        const result = await authFecth(url, params, logout);
        return result ? result : null;

    } catch (error) {
        console.log(error);
        return null;

    }

}
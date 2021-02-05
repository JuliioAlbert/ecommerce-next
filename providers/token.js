import { TOKEN } from "../utils/contants";
import jwt from 'jwt-decode';
export const setToken = (token) => {
    localStorage.setItem(TOKEN, token);
}

export const getToken = () => {
    localStorage.getItem(TOKEN);
}

export const removeToken =() => {
    localStorage.removeItem(TOKEN);
}

export const expiredToken = (token) => {
    const tokenDecode = jwt(token);
    const expiredDate = tokenDecode.exp * 1000;
    const currenDate = new Date().getTime();
    if(currenDate > expiredDate){
        return true;
    }
    return false
}
import {getToken, expiredToken} from '../providers/token';

export const authFecth = async (url, params, logout) =>{
    const token = getToken();
    if(!token){
        //Usuario no logout
        logout();
    }else{
        if(expiredToken(token)){
            //Token Caducado
            logout();
        }else{
            const paramsTemp = {
                ...params,
                headers:{
                    ...params?.headers,
                    Authorization:`Bearer ${token}`
                }
            }
            try {
                const response = await fetch(url,paramsTemp);
                const result = await response.json();
                return result;
            } catch (error) {
                return error; 
            }
        }
    }
}
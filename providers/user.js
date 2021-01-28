import {ULR} from '../utils/contants';
export const registrarUsuario= async (data) =>{
   try {
        const url= `${ULR}/auth/local/register`;
        const params={
            method:'POST',
            headers:{
                'Content-Type': "application/json"
            },
            body:JSON.stringify(data),
        }
        const res =await fetch(url, params);
        const result = await res.json();
        return result;
   } catch (error) {
    console.log(error);
    return null;
   }

}
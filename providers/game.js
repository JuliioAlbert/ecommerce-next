import { ULR } from '../utils/contants';
 
export const getGamesNuevos = (limit) => {
    try {
        const limitItems = `_limit=${limit}`;
        const sortItems = `_sort=createA:desc`;
        const url = `${ULR}/games?${limitItems}&${sortItems}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}
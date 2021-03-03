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


export const getGamesPlatform= async (platform, limit, start) => {
    try {
        const limitItem =`_limit=${limit}`;
        const sortItems = `:sort=createdAt:desc`;
        const startItems = `_start=${start}`;
        const url = `${ULR}/games?platform.url=${platform}&${limitItem}&${sortItems}&${startItems}`;
        const response = await fetch(url);
        const result = response.json();
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
}
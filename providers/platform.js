import { ULR} from '../utils/contants';

export const getPlatform = async () => {
    try {
        const url = `${ULR}/platforms?_sort=position=asc`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
;    }
}
import { TOKEN } from "../utils/contants";

export const setToken = (token) => {
    localStorage.setItem(TOKEN, token);
}
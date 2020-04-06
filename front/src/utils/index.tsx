import axios from 'axios';
import {TOKEN_KEY} from "../constants";

export const getWithAuth = (url: string) => {
    return axios.get(url, {
        headers: {
            authorization: `Bearer ${sessionStorage.getItem(TOKEN_KEY)}`
        }
    })
};

export const postWithAuth = (url: string, data: any) => {
    return axios.post(url, data, {
        headers: {
            authorization: `Bearer ${sessionStorage.getItem(TOKEN_KEY)}`
        }
    })
};
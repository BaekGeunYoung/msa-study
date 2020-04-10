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

export const getFormatDate = (date: Date) => {
    const year = date.getFullYear();              //yyyy
    const month = (1 + date.getMonth());          //M
    const monthStr = month >= 10 ? month : '0' + month;  //month 두자리로 저장
    const day = date.getDate();                   //d
    const dayStr = day >= 10 ? day : '0' + day;          //day 두자리로 저장
    return  year + '-' + monthStr + '-' + dayStr;
}
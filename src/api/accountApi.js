/* eslint-disable prettier/prettier */
import { axiosClient } from './axiosClient'

export const accountApi = {
    getAll() {
        const url = '/posts';
        var result = axiosClient.get(url);
        return result;
    },
    get(AccountName, Password) {
        const url = `/account?AccountName=${AccountName}&Password=${Password}`;
        var result = axiosClient.get(url);
        return result;
    },
    add(data) {
        var newData = {
            AccountName: data.email,
            Password: data.password,
            CreatedDate: '1/1/2000',
            Status: 1,
            ID: -1
        };
        const url = `/account/`;
        return axiosClient.post(url, newData);
    },
    getByID(ID) {
        const url = `/account?ID=${ID}`;
        var result = axiosClient.get(url);
        return result;
    }
}
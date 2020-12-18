import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '3cef8baf-ff4b-4311-bb54-af9699d41e4c'
    }

});

export const usersAPI = {
    getUsers (currentPage: number = 1, pageSize: number = 10) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    }
}


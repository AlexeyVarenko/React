import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "1366aa46-6d95-4789-861b-c03c0b369db1"
    },
})

export const getUsers = (currentPage, pageSize) => {

    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        });

}

export const followUsers = (userId) => {

    return instance.delete(`follow/${userId}`)
        .then(response => {
            return response.data;
        });

}

export const unFollowUsers = (userId) => {

    return instance.post(`follow/${userId}`, {},)
        .then(response => {
            return response.data;
        });
}

export const profileAPI = {
    getProfile  (userId)  {
        return instance.get(`profile/${userId}`);
    },
    getStatus (userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus  (status) {
        return instance.put(`profile/status`, {status: status});
    }
}



/*export const getProfile = (userId) => {
    return instance.get(`profile/${userId}`);
}

export const getStatus = (userId) => {
    return instance.get(`profile/status/${userId}`);
}

export const updateStatus = (status) => {
    return instance.put(`profile/status`, {status: status});
}
*/



export const authAPI = {
    me () {
        return instance.get(`auth/me`)
    }
}




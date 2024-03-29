import * as axios from "axios";


const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "72f2b082-5eff-47a3-9751-617b0a40d587"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },

    follow(userId) {
        return axiosInstance.post(`follow/${userId}`)
    },

    unfollow(userId) {
        return axiosInstance.delete(`follow/${userId}`)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return axiosInstance.get(`profile/${userId}`);
    },

    getStatus(userId) {
        return axiosInstance.get(`profile/status/${userId}`);
    },

    updateStatus(status) {
        return axiosInstance.put(`profile/status`, {
            status: status
        });
    }
}

export const authAPI = {
    authMe() {
        return axiosInstance.get(`auth/me`)
    }
}

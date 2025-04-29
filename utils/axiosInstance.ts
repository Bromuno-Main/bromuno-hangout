import axios, {InternalAxiosRequestConfig} from 'axios';
import TokenUtils from './TokenUtils';
import {BASE_URL} from "../constants";

let onUnauthorized: (() => void) | null = null;

export const setUnauthorizedHandler = (handler: () => void) => {
    onUnauthorized = handler;
};


const axiosInstance = axios.create({
    // baseURL: BASE_URL,
    baseURL:'https://bromuno-hangout-server.onrender.com/api/v1',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor to attach token from Redux store or AsyncStorage
axiosInstance.interceptors.request.use(
    async (config: InternalAxiosRequestConfig<any>): Promise<InternalAxiosRequestConfig<any>> => {
        try {
            const token = TokenUtils.getToken();

            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        } catch (error) {
            console.error('Error fetching token:', error);
        }
        return config;
    },
    error => Promise.reject(error)
);


axiosInstance.interceptors.response.use(
    response => response,
    async error => {
        const status = error.response?.status;
        console.log(status);
        if (status === 401 && onUnauthorized) {
            onUnauthorized();
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;

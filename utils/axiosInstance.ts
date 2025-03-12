import axios, {InternalAxiosRequestConfig} from 'axios';
import TokenUtils from './TokenUtils';

const axiosInstance = axios.create({
    // baseURL: 'https://voice-server-7zky.onrender.com',
    // baseURL: 'https://jay-rare-kindly.ngrok-free.app/api/v1',
    baseURL: 'http://localhost:3002/api/v1',
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

export default axiosInstance;

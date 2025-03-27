import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axiosInstance from "../utils/axiosInstance";
import TokenUtils from "../utils/TokenUtils";

// Define types for state
interface AuthState {
    user: any; // Replace `any` with your user type if available
    token: string | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

// Initial state
const initialState: AuthState = {
    user: null,
    token: TokenUtils.getToken() || null, // Ensure token is null if undefined
    status: 'idle',
    error: null,
};

// Async thunk for login
export const login = createAsyncThunk(
    'auth/login',
    async (credentials: { email: string; password: string }, {rejectWithValue}) => {
        try {
            const response = await axiosInstance.post('/auth/login', credentials);
            TokenUtils.setToken(response.data.token);
            console.log(response.data)
            return response.data;
        } catch (error: any) {
            console.log(error)
            return rejectWithValue(error.response?.data?.message || 'Login failed');
        }
    }
);

// Async thunk for logout
export const logout = createAsyncThunk('auth/logout', async () => {
    TokenUtils.removeToken();
});

// Async thunk for registration
export const register = createAsyncThunk(
    'auth/register',
    async (userData: {
        fullName: string;
        email: string;
        password: string,
        phoneNumber: string,
        purposeOfJoining: string[]
    }, {rejectWithValue}) => {
        try {
            const response = await axiosInstance.post('/auth/register', userData);
            TokenUtils.setToken(response.data.token);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || 'Registration failed');
        }
    }
);

// Create auth slice
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
                state.token = null;
                state.status = 'idle';
            })
            .addCase(register.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(register.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            });
    },
});

export default authSlice.reducer;

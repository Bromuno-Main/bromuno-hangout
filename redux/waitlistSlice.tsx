import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from "../utils/axiosInstance";
import {handleApiError} from "../utils/errorUtils";
import {toast} from "sonner";

// Define types for state
interface AuthState {
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

// Response shape from the backend
interface WaitlistEntryResponse {
    message: string;
    data: {
        _id: string;
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber: string;
        createdAt: string;
        updatedAt: string;
    };
}

// Data sent to the backend
interface WaitlistPayload {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    portfolioLink?: string;
    workArea?: string;
    description?: string;
    cvUrl?: string;
}

// Initial state
const initialState: AuthState = {
    status: 'idle',
    error: null,
};

// Async thunk for joining the waitlist
export const joinWaitlist = createAsyncThunk<
    WaitlistEntryResponse,      // Response type
    WaitlistPayload,            // Payload type
    { rejectValue: string }     // Error type
>(
    'waitlist/register',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post('/waitlist/register', userData); // ✅ Make sure this matches your backend route
            toast.message(response.data.message);
            return response.data;
        } catch (error: unknown) {
            const errorMessage = handleApiError(error);
            toast(errorMessage);
            return rejectWithValue(errorMessage);
        }
    }
);

// Create waitlist slice
const waitlistSlice = createSlice({
    name: 'waitlist',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(joinWaitlist.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(joinWaitlist.fulfilled, (state) => {
                state.status = 'succeeded';
                state.error = null;
            })
            .addCase(joinWaitlist.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || 'Something went wrong';
            });
    },
});

export default waitlistSlice.reducer;

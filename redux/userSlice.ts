import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axiosInstance";
import { User } from "../types/User";
import { LoadingState } from "../types/LoadingState";
import {RootState} from "./store";

interface UserState {
    user: User | null;
    status: LoadingState;
    error: string | null;
}

const initialState: UserState = {
    user: null,
    status: LoadingState.Idle,
    error: null,
};

export const fetchUser = createAsyncThunk<
    { user: User },
    { userId?: string },
    { rejectValue: string }
>(
    'user/fetchUser',
    async ({ userId="me" }, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get(`/user/${userId}`);
            return { user: response.data.user };
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || 'User fetch failed');
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetUserState: (state) => {
            state.user = null;
            state.status = LoadingState.Idle;
            state.error = null;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.status = LoadingState.Pending;
                state.error = null;
            })
            .addCase(fetchUser.fulfilled, (state, action: PayloadAction<{ user: User }>) => {
                state.status = LoadingState.Succeeded;
                state.user = action.payload.user;
                state.error = null;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.status = LoadingState.Failed;
                state.user = null;
                state.error = action.payload || 'Unknown error';
            });
    }
});

export const { resetUserState } = userSlice.actions;

// ✅ Selectors
export const selectCurrentUser = (state: RootState) => state.user.user;
export const selectUserStatus = (state: RootState) => state.user.status;
export const selectUserError = (state: RootState) => state.user.error;

export default userSlice.reducer;

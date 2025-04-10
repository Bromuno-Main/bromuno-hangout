import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {toast} from "sonner";
import axiosInstance from "../utils/axiosInstance";
import {LoadingState} from "../types/LoadingState";
import {handleApiError} from "../utils/errorUtils";


// Upload thunk
export const uploadImage = createAsyncThunk(
    "uploads/image",
    async ({image}: { image: File | null }, {rejectWithValue}) => {
        try {
            if (!image) throw new Error("No image selected");

            const formData = new FormData();
            formData.append("file", image);
            formData.append("mediaType", "user_image");

            const response = await axiosInstance.post("/uploads/", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            return response.data.data.secure_url;
        } catch (error: unknown) {
            const errorMessage = handleApiError(error);
            toast(errorMessage);
            return rejectWithValue(errorMessage);
        }
    }
);

// Upload slice state
interface UploadState {
    imageUrl: string | null;
    loading: LoadingState;
    error: string | null;
}

const initialState: UploadState = {
    imageUrl: null,
    loading: LoadingState.Idle,
    error: null,
};

const uploadSlice = createSlice({
    name: "upload",
    initialState,
    reducers: {
        resetUploadState: (state) => {
            state.imageUrl = null;
            state.loading = LoadingState.Idle;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(uploadImage.pending, (state) => {
                state.loading = LoadingState.Pending;
                state.error = null;
            })
            .addCase(uploadImage.fulfilled, (state, action: PayloadAction<string>) => {
                state.loading = LoadingState.Succeeded;
                state.imageUrl = action.payload;
            })
            .addCase(uploadImage.rejected, (state, action) => {
                state.loading = LoadingState.Failed;
                state.error = action.payload as string;
            });
    },
});

export const {resetUploadState} = uploadSlice.actions;
export default uploadSlice.reducer;

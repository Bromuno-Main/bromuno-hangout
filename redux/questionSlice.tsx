import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axiosInstance";

interface Question {
    id: string;
    question: string;
    tags: string[];
}

interface QuestionState {
    questions: Question[];
    loading: boolean;
    error: string | null;
}

const initialState: QuestionState = {
    questions: [],
    loading: false,
    error: null,
};

// Async thunk for creating a question
export const createQuestion = createAsyncThunk(
    'question/createQuestion',
    async (questionData: { question: string; tags: string[] }, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post('/question/', questionData);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || 'Question creation failed');
        }
    }
);

// Question slice
const questionSlice = createSlice({
    name: 'question',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createQuestion.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createQuestion.fulfilled, (state, action: PayloadAction<Question>) => {
                state.loading = false;
                state.questions.push(action.payload);
            })
            .addCase(createQuestion.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default questionSlice.reducer;

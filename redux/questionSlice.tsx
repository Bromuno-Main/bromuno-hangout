import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axiosInstance from "../utils/axiosInstance";
import {Question} from "../types/Question";


interface QuestionState {
    questions: Question[];  // Store all questions as an array
    question: { [id: string]: Question } | null;  // Store a single question as a key-value pair
    loading: boolean;
    error: string | null;
}

const initialState: QuestionState = {
    questions: [], // Initialize as an empty array
    question: null, // Initialize as null for no single question fetched
    loading: false,
    error: null,
};

// Async thunk for creating a question
export const createQuestion = createAsyncThunk(
    'question/createQuestion',
    async (questionData: { question: string; tags: string[], description: string }, {rejectWithValue}) => {
        try {
            const response = await axiosInstance.post('/question/', questionData);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || 'Question creation failed');
        }
    }
);

// Async thunk for fetching questions
export const fetchQuestions = createAsyncThunk(
    'question/fetchQuestions',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axiosInstance.get('/question/');
            console.log(response.data);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || 'Failed to fetch questions');
        }
    }
);

// Async thunk for fetching a single question
export const fetchSingleQuestion = createAsyncThunk(
    'question/fetchSingleQuestion',
    async (questionData: { id: string }, {rejectWithValue}) => {
        try {
            const response = await axiosInstance.get(`/question/${questionData.id}`);
            console.log(response.data);
            return response.data.question;
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || 'Failed to fetch the question');
        }
    }
);

// Async thunk for creating a comment on a question
export const createQuestionComment = createAsyncThunk(
    'question/createQuestionComment',
    async (commentData: { text: string; id: string }, {rejectWithValue}) => {
        try {
            const response = await axiosInstance.post(`/question/${commentData.id}/comments/`, {text: commentData.text});
            return {questionId: commentData.id, data: response.data};
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || 'Failed to create comment');
        }
    }
);

// Async thunk for creating a comment on a question
export const upvote = createAsyncThunk(
    'question/upvote',
    async (commentData: { id: string }, {rejectWithValue}) => {
        try {
            const response = await axiosInstance.post(`/question/${commentData.id}/upvote/`,);
            return {questionId: commentData.id, data: response.data};
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || 'Failed to create comment');
        }
    }
);

// Async thunk for creating a comment on a question
export const createQuestionCommentReply = createAsyncThunk(
    'question/createQuestionCommentReply',
    async (commentData: { text: string; questionId: string, replyId: string }, {rejectWithValue}) => {
        try {
            const response = await axiosInstance.post(`/question/${commentData.questionId}/comments/${commentData.replyId}/reply/`, {text: commentData.text});
            return {questionId: commentData.questionId, data: response.data};
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || 'Failed to create comment');
        }
    }
);

// Async thunk for creating a comment on a question
export const upvoteComment = createAsyncThunk(
    'question/upvoteComment',
    async (commentData: { id: string, commentId: string }, {rejectWithValue}) => {
        try {
            const response = await axiosInstance.post(`/question/${commentData.id}/upvote/${commentData.commentId}/comments/`);
            console.log(response.data);
            return {questionId: commentData.id, data: response.data.question};
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || 'Failed to create comment');
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
            // Create Question extraReducers
            .addCase(createQuestion.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createQuestion.fulfilled, (state, action: PayloadAction<Question>) => {
                state.loading = false;
                state.questions.push(action.payload);  // Add the new question to the questions array
            })
            .addCase(createQuestion.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Fetch Questions extraReducers
            .addCase(fetchQuestions.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchQuestions.fulfilled, (state, action: PayloadAction<Question[]>) => {
                state.loading = false;
                state.questions = action.payload;  // Store all questions in the array
            })
            .addCase(fetchQuestions.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Fetch Single Question extraReducers
            .addCase(fetchSingleQuestion.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSingleQuestion.fulfilled, (state, action: PayloadAction<Question>) => {
                state.loading = false;
                state.question = {[action.payload._id]: action.payload};  // Store the single question as a key-value pair
            })
            .addCase(fetchSingleQuestion.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            }) // Create Comment extraReducers
            .addCase(createQuestionComment.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createQuestionComment.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                console.log(action.payload);
                if (state.question) {
                    const questionId = action.payload.questionId;
                    console.log(questionId)
                    state.question[questionId].comments = (action.payload.data.comments);
                }
            })
            .addCase(createQuestionComment.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            }).addCase(createQuestionCommentReply.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(createQuestionCommentReply.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                console.log(action.payload);
                if (state.question) {
                    const questionId = action.payload.questionId;
                    console.log(questionId)
                    state.question[questionId].comments = (action.payload.data.comments);
                }
            })
            .addCase(createQuestionCommentReply.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            }).addCase(upvote.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(upvote.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;

                console.log(action.payload);
                const {questionId, data} = action.payload;

                // Update the specific question in the state without replacing the entire array
                const questionIndex = state.questions.findIndex(q => q._id === questionId);
                if (questionIndex !== -1) {
                    // Update the specific question with the new upvote status
                    state.questions[questionIndex] = {
                        ...state.questions[questionIndex],
                        isUpVoted: data.question.isUpVoted, // Assuming the backend returns the updated upvote status
                        upVotes: data.question.upVotes, // Updated upVotes list
                    };
                }
            })
            .addCase(upvote.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            }).addCase(upvoteComment.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(upvoteComment.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                console.log(action.payload);
                if (state.question) {
                    const questionId = action.payload.questionId;
                    console.log(questionId)
                    state.question[questionId].comments = (action.payload.data.comments);
                }
            })
            .addCase(upvoteComment.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default questionSlice.reducer;

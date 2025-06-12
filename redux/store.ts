import {configureStore} from '@reduxjs/toolkit';
import authReducer from './authSlice';
import questionReducer from './questionSlice';
import loadingReducer from './loadingSlice';
import userReducer from './userSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        question: questionReducer,
        loading: loadingReducer,
        user: userReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const dispatch = store.dispatch;

import {configureStore} from '@reduxjs/toolkit';
import authReducer from './authSlice';
import questionReducer from './questionSlice';
import loadingReducer from './loadingSlice';
import waitlistReducer from './waitlistSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        question: questionReducer,
        loading: loadingReducer,
        waitlist: waitlistReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

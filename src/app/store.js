import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import apiSlice from './features/api/apiSlice';
import authSlice from './features/auth/authSlice';

const store = configureStore({
    reducer: {
        auth: authSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
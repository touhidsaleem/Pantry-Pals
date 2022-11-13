import { configureStore } from '@reduxjs/toolkit';
import MyProductReducer from './MyProductSlice';

export const mystore = configureStore({
    reducer: {
        product: MyProductReducer,
    },
});
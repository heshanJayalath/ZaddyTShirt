import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from "./reducers/user";
import { garmentReducer } from './reducers/garment';

const Store = configureStore({
    reducer: {
        user: userReducer,
        garment: garmentReducer,
    }
});

export default Store;
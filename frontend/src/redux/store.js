import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from "./reducers/user";
import { garmentReducer } from './reducers/garment';
import { productReducer } from './reducers/product';
import { eventReducer } from './reducers/event';
import { cartReducer } from './reducers/cart';
import { orderReducer } from './reducers/order';
import {customorderReducer} from './reducers/customorder';

const Store = configureStore({
    reducer: {
        user: userReducer,
        garment: garmentReducer,
        products:productReducer,
        events:eventReducer,
        cart:cartReducer,
        order:orderReducer,
        customorder:customorderReducer,
    }
});

export default Store;
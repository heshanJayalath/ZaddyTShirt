import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    isLoading: true,
}

export const customorderReducer = createReducer(initialState, {
    customorderCreateRequest: (state) => {
        state.isLoading = true;
    },
    customorderCreateSuccess: (state, action) => {
        state.isLoading = false;
        state.customorders = action.payload;
        state.success = true;
    },
    customorderCreateFail: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.success = false;
    },

    // get all custom orders
    getAllCustomOrdersRequest: (state) => {
        state.isLoading = true;
    },
    getAllCustomOrdersSuccess: (state, action) => {
        state.isLoading = false;
        state.allCustomOrders = action.payload;
    },
    getAllCustomOrdersFailed: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    },

    // delete custom orders
    // deleteCustomOrderRequest: (state) => {
    //     state.isLoading = true;
    // },
    // deleteCustomOrderSuccess: (state, action) => {
    //     state.isLoading = false;
    //     state.message = action.payload;
    // },
    // deleteCustomOrderFailed: (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.payload;
    // },

    clearErrors: (state) => {
        state.error = null;
    }
});
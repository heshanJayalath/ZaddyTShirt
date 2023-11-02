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

    clearErrors: (state) => {
        state.error = null;
    }
});
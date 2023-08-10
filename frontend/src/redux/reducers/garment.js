import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    isLoading: true,
}

export const garmentReducer = createReducer(initialState, {
    LoadGarmentRequest: (state) => {
        state.isLoading = true;
    },
    LoadGarmentSuccess: (state, action) => {
        state.isGarment = true;
        state.isLoading = false;
        state.garment = action.payload;
    },
    LoadGarmentFail: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isGarment = false;
    },
    clearErrors: (state) => {
        state.error = null;
    }
});
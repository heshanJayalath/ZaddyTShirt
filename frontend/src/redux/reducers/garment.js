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

    // get all garments ---admin
    getAllGarmentsRequest: (state) => {
        state.isLoading = true;
    },
    getAllGarmentsSuccess: (state, action) => {
        state.isLoading = false;
        state.garments = action.payload;
    },
    getAllGarmentFailed: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    },

    // get all garments ---manager
    getAllManagerGarmentsRequest: (state) => {
        state.isLoading = true;
    },
    getAllManagerGarmentsSuccess: (state, action) => {
        state.isLoading = false;
        state.garment = action.payload;
    },
    getAllManagerGarmentFailed: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    },

    // get all garments ---Owner
    getAllOwnerGarmentsRequest: (state) => {
        state.isownerLoading = true;
    },
    getAllOwnerGarmentsSuccess: (state, action) => {
        state.isownerLoading = false;
        state.ownergarments = action.payload;
    },
    getAllOwnerGarmentFailed: (state, action) => {
        state.isownerLoading = false;
        state.error = action.payload;
    },
    clearErrors: (state) => {
        state.error = null;
    }
});
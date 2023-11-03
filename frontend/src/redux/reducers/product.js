import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
}

export const productReducer = createReducer(initialState, {
  productCreateRequest: (state) => {
    state.isLoading = true;
  },
  productCreateSuccess: (state, action) => {
    state.isLoading = false;
    state.product = action.payload;
    state.success = true;
  },
  productCreateFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
  },

  //get all products of garment
  getAllProductsGarmentRequest: (state) => {
    state.isLoading = true;
  },
  getAllProductsGarmentSuccess: (state, action) => {
    state.isLoading = false;
    state.products = action.payload;
  },
  getAllProductsGarmentFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // delete product of a garment
  deleteProductRequest: (state) => {
    state.isLoading = true;
  },
  deleteProductSuccess: (state, action) => {
    state.isLoading = false;
    state.message = action.payload;
  },
  deleteProductFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // get all products
  getAllProductsRequest: (state) => {
    state.isLoading = true;
  },
  getAllProductsSuccess: (state, action) => {
    state.isLoading = false;
    state.allProducts = action.payload;
  },
  getAllProductsFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // get all products owner
  getAllOwnerProductsRequest: (state) => {
    state.isLoading = true;
  },
  getAllOwnerProductsSuccess: (state, action) => {
    state.isLoading = false;
    state.allProducts = action.payload;
  },
  getAllOwnerProductsFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
  clearErrors: (state) => {
    state.error = null;
  }
});
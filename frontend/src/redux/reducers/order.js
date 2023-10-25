import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const orderReducer = createReducer(initialState, {
  // get all orders of user
  getAllOrdersUserRequest: (state) => {
    state.isLoading = true;
  },
  getAllOrdersUserSuccess: (state, action) => {
    state.isLoading = false;
    state.orders = action.payload;
  },
  getAllOrdersUserFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
  
  // get all orders of shop
  getAllOrdersGarmentRequest: (state) => {
    state.isLoading = true;
  },
  getAllOrdersGarmentSuccess: (state, action) => {
    state.isLoading = false;
    state.orders = action.payload;
  },
  getAllOrdersGarmentFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // get all orders for admin
  adminAllOrdersRequest: (state) => {
    state.adminOrderLoading = true;
  },
  adminAllOrdersSuccess: (state, action) => {
    state.adminOrderLoading = false;
    state.adminOrders = action.payload;
  },
  adminAllOrdersFailed: (state, action) => {
    state.adminOrderLoading = false;
    state.error = action.payload;
  },

   // get all orders for admin
   managerAllOrdersRequest: (state) => {
    state.managerOrderLoading = true;
  },
  managerAllOrdersSuccess: (state, action) => {
    state.managerOrderLoading = false;
    state.managerOrders = action.payload;
  },
  managerAllOrdersFailed: (state, action) => {
    state.managerOrderLoading = false;
    state.error = action.payload;
  },

  clearErrors: (state) => {
    state.error = null;
  },
});
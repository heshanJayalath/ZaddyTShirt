import axios from "axios";
import { server } from "../../server";

// create product
export const createProduct = (newForm) => async (dispatch) => {
    try {
        dispatch({
            type: "productCreateRequest",
        });
        const config = { headers: { "Content-Type": "multipart/form-data" } };

        const { data } = await axios.post(
            `${server}/product/create-product`,
            newForm,
            config
        );
        dispatch({
            type: "productCreateSuccess",
            payload: data.product,
        });
    } catch (error) {
        dispatch({
            type: "productCreateFail",
            payload: error.response.data.message,
        });
    }
};
// get All products of a shop
export const getAllProductsGarment = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "getAllProductsGarmentRequest",
        });
        const { data } = await axios.get(`${server}/product/get-all-products-garment/${id}`)
        dispatch({
            type: "getAllProductsGarmentSuccess",
            payload: data.products,
        })
    } catch (error) {
        dispatch({
            type: "getAllProductsGarmentFailed",
            payload: error.response.data.message,
        });
    }
}

// delete product of a shop
export const deleteProduct = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "deleteProductRequest",
        });
        const { data } = await axios.delete(`${server}/product/delete-garment-product/${id}`, { withCredentials: true });
        dispatch({
            type: "deleteProductSuccess",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "deleteProductFailed",
            payload: error.response.data.message,
        });
    }
}

// get all products
export const getAllProducts = () => async (dispatch) => {
    try {
      dispatch({
        type: "getAllProductsRequest",
      });
  
      const { data } = await axios.get(`${server}/product/get-all-products`);
      dispatch({
        type: "getAllProductsSuccess",
        payload: data.products,
      });
    } catch (error) {
      dispatch({
        type: "getAllProductsFailed",
        payload: error.response.data.message,
      });
    }
  };

  // get all products
export const getAllOwnerProducts = () => async (dispatch) => {
    try {
      dispatch({
        type: "getAllOwnerProductsRequest",
      });
  
      const { data } = await axios.get(`${server}/product/get-all-owner-products`);
      dispatch({
        type: "getAllOwnerProductsSuccess",
        payload: data.products,
      });
    } catch (error) {
      dispatch({
        type: "getAllOwnerProductsFailed",
        payload: error.response.data.message,
      });
    }
  };
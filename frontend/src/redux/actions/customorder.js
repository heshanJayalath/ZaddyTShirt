import axios from 'axios';
import { server } from '../../server';

// create custom-order
export const createCustomOrder = (newForm) => async (dispatch) => {
    try {
        dispatch({
            type: "customorderCreateRequest",
        });
        const config = { headers: { "Content-Type": "multipart/form-data" } };

        const { data } = await axios.post(
            `${server}/customorder/create-custom-order`,
            newForm,
            config
        );
        dispatch({
            type: "customorderCreateSuccess",
            payload: data.customorders,
        });

    } catch (error) {
        dispatch({
            type: "customorderCreateFail",
            payload: error.response.data.message,
        });
    }
}

//get all custom orders
export const getAllCustomOrders = () => async (dispatch) => {
    try {
        dispatch({
            type: "getAllCustomOrdersRequest",
        });
        const { data } = await axios.get(`${server}/customorder/get-all-custom-orders`);
        dispatch({
            type: "getAllCustomOrdersSuccess",
            payload: data.customorders,
        });
    } catch (error) {
        dispatch({
            type: "getAllCustomOrdersFailed",
            payload: error.response.data.message,
        });
    }
};

// export const deleteCustomOrder = (id) => async (dispatch) => {
//     try {
//         dispatch({
//             type: "deleteCustomOrderRequest",
//         });
//         const { data } = await axios.delete(`${server}/customorder/delete-custom-order/${id}`, { withCredentials: true });
//         dispatch({
//             type: "deleteCustomOrderSuccess",
//             payload: data.message,
//         });
//     } catch (error) {
//         dispatch({
//             type: "deleteCustomOrderFailed",
//             payload: error.response.data.message,
//         });
//     }
// };


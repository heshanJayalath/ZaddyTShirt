import axios from 'axios';
import { server } from '../../server';

// create custom-order
export const createCustomOrder = (newForm) => async(dispatch) => {
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
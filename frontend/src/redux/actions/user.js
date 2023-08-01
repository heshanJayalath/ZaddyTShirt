import axios from 'axios';
import { server } from "../../server";

// load user
export const loadUser = () => async (dispatch) => {
    try {
        dispatch({
            type: "LoadUserRequest",
        });

        const { data } = await axios.get(`${server}/user/getUser`, { withCredentials: true });
        console.log(data)
        dispatch({
            type: "LoadUserSuccess",
            payload: data.user,
        });


    } catch (error) {
        dispatch({
            type: "LoadUserFail",
            payload: error.response.data.message
        });
    }
}

// load garment
export const loadGarment = () => async (dispatch) => {
    try {
        dispatch({
            type: "LoadGarmentRequest",
        });

        const { data } = await axios.get(`${server}/garment/getGarment`, { withCredentials: true });
        console.log(data)
        dispatch({
            type: "LoadGarmentSuccess",
            payload: data.garment,
        });


    } catch (error) {
        dispatch({
            type: "LoadGarmentFail",
            payload: error.response.data.message
        });
    }
}

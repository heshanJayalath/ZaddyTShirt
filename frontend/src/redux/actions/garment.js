import axios from "axios";
import { server } from "../../server";

// get all garments --- admin
export const getAllGarments = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllGarmentsRequest",
    });

    const { data } = await axios.get(`${server}/garment/admin-all-garments`, {
      withCredentials: true,
    });
    console.log("garment_middleware:",data);

    dispatch({
      type: "getAllGarmentsSuccess",
      payload: data.garments,
    });
  } catch (error) {
    dispatch({
      type: "getAllGarmentsFailed",
    //   payload: error.response.data.message,
    });
  }
};

// get all garments --- manager
export const getAllManagerGarments = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllManagerGarmentsRequest",
    });

    const { data } = await axios.get(`${server}/garment/manager-all-garments`, {
      withCredentials: true,
    });
    console.log("garment_middleware length:",data.garment.length);

    dispatch({
      type: "getAllManagerGarmentsSuccess",
      payload: data.garment,
    });
  } catch (error) {
    dispatch({
      type: "getAllManagerGarmentsFailed",
    //   payload: error.response.data.message,
    });
  }
};

// get all garments --- owner
export const getAllOwnerGarments = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllOwnerGarmentsRequest",
    });

    const { data } = await axios.get(`${server}/garment/owner-all-garments`, {
      withCredentials: true,
    });

    dispatch({
      type: "getAllOwnerGarmentsSuccess",
      payload: data.garments,
    });
  } catch (error) {
    dispatch({
      type: "getAllOwnerGarmentsFailed",
    //   payload: error.response.data.message,
    });
  }
};


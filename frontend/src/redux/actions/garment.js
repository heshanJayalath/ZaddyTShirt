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
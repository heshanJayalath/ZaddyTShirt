import axios from "axios";
import { server } from "../../server";

// get all orders of user
export const getAllOrdersOfUser = (userId) => async (dispatch) => {
  try {
    dispatch({
      type: "getAllOrdersUserRequest",
    });

    const { data } = await axios.get(
      `${server}/order/get-all-orders/${userId}`
    );

    dispatch({
      type: "getAllOrdersUserSuccess",
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: "getAllOrdersUserFailed",
      payload: error.response.data.message,
    });
  }
};

// get all orders of garment
export const getAllOrdersOfGarment = (garmentId) => async (dispatch) => {
  try {
    dispatch({
      type: "getAllOrdersGarmentRequest",
    });

    const { data } = await axios.get(
      `${server}/order/get-garment-all-orders/${garmentId}`
    );

    dispatch({
      type: "getAllOrdersGarmentSuccess",
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: "getAllOrdersGarmentFailed",
      payload: error.response.data.message,
    });
  }
};

// // get all orders of Admin
// export const getAllOrdersOfAdmin = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: "adminAllOrdersRequest",
//     });

//     const { data } = await axios.get(`${server}/order/admin-all-orders`, {
//       withCredentials: true,
//     });

//     dispatch({
//       type: "adminAllOrdersSuccess",
//       payload: data.orders,
//     });
//   } catch (error) {
//     dispatch({
//       type: "adminAllOrdersFailed",
//       payload: error.response.data.message,
//     });
//   }
// };
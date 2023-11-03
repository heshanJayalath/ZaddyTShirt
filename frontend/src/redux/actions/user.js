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

// user update information
export const updateUserInformation = (name, email, password, phoneNumber) => async (dispatch, action) => {
  try {
    dispatch({
      type: "updateUserInfoRequest",
    });
    const { data } = await axios.put(`${server}/user/update-user-info`, {
      name,
      email,
      password,
      phoneNumber,
    }, { withCredentials: true })
    dispatch({
      type: "updateUserInfoSuccess",
      payload: {
        updateAddressSuccessMessage: "User address updated successfully!",
        user: data.user,
      }
    })
  } catch (error) {
    dispatch({
      type: "updateUserInfoFailed",
      payload: error.response.data.message
    });
  }
}

// update user address
export const updatUserAddress =
  (country, city, address1, address2, zipCode, addressType) =>
    async (dispatch) => {
      try {
        dispatch({
          type: "updateUserAddressRequest",
        });

        const { data } = await axios.put(
          `${server}/user/update-user-addresses`,
          {
            country,
            city,
            address1,
            address2,
            zipCode,
            addressType,
          },
          { withCredentials: true }
        );

        dispatch({
          type: "updateUserAddressSuccess",
          payload: {
            successMessage: "User address updated succesfully!",
            user: data.user,
          },
        });
      } catch (error) {
        dispatch({
          type: "updateUserAddressFailed",
          payload: error.response.data.message,
        });
      }
    };

// delete user address
export const deleteUserAddress = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteUserAddressRequest",
    });

    const { data } = await axios.delete(
      `${server}/user/delete-user-address/${id}`,
      { withCredentials: true }
    );

    dispatch({
      type: "deleteUserAddressSuccess",
      payload: {
        successMessage: "User deleted successfully!",
        user: data.user,
      },
    });
  } catch (error) {
    dispatch({
      type: "deleteUserAddressFailed",
      payload: error.response.data.message,
    });
  }
};

// get all users --- admin
export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllUsersRequest",
    });

    const { data } = await axios.get(`${server}/user/admin-all-users`, {
      withCredentials: true,
    });

    dispatch({
      type: "getAllUsersSuccess",
      payload: data.users,
    });
  } catch (error) {
    dispatch({
      type: "getAllUsersFailed",
      payload: error.response.data.message,
    });
  }
};

// get all users --- manager
export const getAllManagerUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllManagerUsersRequest",
    });

    const { data } = await axios.get(`${server}/user/manager-all-users`, {
      withCredentials: true,
    });

    dispatch({
      type: "getAllManagerUsersSuccess",
      payload: data.users,
    });
  } catch (error) {
    dispatch({
      type: "getAllManagerUsersFailed",
      payload: error.response.data.message,
    });
  }
};

// get all users --- owner
export const getAllOwnerUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllOwnerUsersRequest",
    });

    const { data } = await axios.get(`${server}/user/owner-all-users`, {
      withCredentials: true,
    });

    dispatch({
      type: "getAllOwnerUsersSuccess",
      payload: data.users,
    });
  } catch (error) {
    dispatch({
      type: "getAllOwnerUsersFailed",
      payload: error.response.data.message,
    });
  }
};
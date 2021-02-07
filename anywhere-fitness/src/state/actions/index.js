import { axiosWithAuth } from "../../utils/axiosWithAuth";
export const LOADING = "LOADING";
export const CLASSES_SUCCESS = "CLASSES_SUCCESS";
export const ERROR = "ERROR";

export const getClasses = (dispatch) => {
  dispatch({ type: LOADING });
  axiosWithAuth()
    .get("/api/auth/users/classes")
    .then((res) => {
      dispatch({ type: CLASSES_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: ERROR, payload: err.message });
    });
};

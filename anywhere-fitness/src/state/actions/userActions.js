import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token')
    return axios.create({
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    })
};

export const START_LOGIN = 'START_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN FAILURE';

export const loginUser = credentials => dispatch => {
  dispatch({ type: START_LOGIN });
  axios
    .post('https://anywhere-fitness-tt118.herokuapp.com/api/auth/login', credentials)
    .then(res => {
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('id', res.data.id)
      return dispatch({ type: LOGIN_SUCCESS, payload: res })
    })
    .catch(error => {
      console.error(error);
      dispatch({ type: LOGIN_FAILURE, payload: error.response.data.message })
    });
}

export const BEGIN_GET_USER_INFO = 'BEGIN_GET_USER_INFO';
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';
export const GET_USER_INFO_FAILURE = 'GET_USER_INFO_FAILURE';

export const getUserInfo = () => dispatch => {
  dispatch({ type: BEGIN_GET_USER_INFO });

  const id = localStorage.getItem('id')
  axiosWithAuth()
    .get(`https://anywhere-fitness-tt118.herokuapp.com/api/auth/${id}`)
    .then(res => {
      dispatch({ type: GET_USER_INFO_SUCCESS, payload: res.data });
    })
    .catch(error => {
      console.error(error);
      //need to figure out what message we're going to display.
      dispatch({ type: GET_USER_INFO_FAILURE , payload: error.response.data.message })
    });
};

export const BEGIN_LOGOUT = "BEGIN_LOGOUT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const logoutUser = () => dispatch => {
    dispatch({ type: BEGIN_LOGOUT });
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    dispatch({ type: LOGOUT_SUCCESS  })
};
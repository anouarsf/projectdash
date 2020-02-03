import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGIN_FAIL
} from '../constants/action-types';

//USER LOADER
export const loadUser = token => async dispatch => {
  // console.log(token);
  // if (token) setusersToken(localStorage.token);
  const config = {
    headers: {
      Authorization: token
    }
  };
  try {
    const res = await axios.get('/users/me', config);
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

export const register = ({
  name,
  email,
  password,
  avatar
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ name, email, password, avatar });
  const res = await axios.post('/users/register', body, config);
  console.log(res);
  try {
    dispatch({
      type: REGISTER_SUCCESS
      // payload: res.data
    });
  } catch (err) {
    // console.error('this error from auth.js', err.message);
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => console.error(error.msg, 'danger'));
    }
    dispatch({
      type: REGISTER_FAIL
    });
  }
};

export const loginUser = ({ email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post('/users/login', body, config);
    console.log('body', res);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    loadUser(res.data.token);
  } catch (err) {
    console.error('this error from auth.js', err.message);
  }
  // LOGOUT / clear profile
};
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};

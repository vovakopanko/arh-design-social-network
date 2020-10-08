import { stopSubmit } from "redux-form";
import { AuthProfileAPI, userAPI, securityAPI, userStatus } from "../api/Api";

const SET_USER_DATA = "redux/autReducer/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "redux/autReducer/GET_CAPTCHA_URL_SUCCESS";
const GET_USER_PHOTOS = "redux/autReducer/GET_USER_PHOTOS";

let initialState = {
  email: null,
  id: null,
  login: null,
  isAuth: false,
  isFetching: false,
  // info for user aroun button login
  infoLogOut: "Don't LOGGED",
  captchaUrl: null,
  photos: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // Add in state information main user: email, id, login
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    // Add in state captcha image-code
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.captchaUrl,
      };
    // Add image profile main user
    case GET_USER_PHOTOS:
      return {
        ...state,
        photos: action.photos,
      };
    default:
      return state;
  }
};

//[ActionCreator]

export const getPhotosUser = (photos) => ({
  type: GET_USER_PHOTOS,
  photos,
});

export const setUserData = (email, id, login, isAuth) => ({
  type: SET_USER_DATA,
  data: { email, id, login, isAuth },
});

export const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  captchaUrl: { captchaUrl },
});

//[ThunkActionCreator]

// Get main photo user
export const getPhotosAuthUser = (userId) => {
  return async (dispatch) => {
    let data = await userStatus.getUsersInfo(userId);
    dispatch(getPhotosUser(data.photos.large));
  };
};

// Dispatch in authReduser information main user: email, id, login ,
export const getAuthData = () => {
  return async (dispatch) => {
    let data = await userAPI.getAuthMe();
    if (data.resultCode === 0) {
      let { email, id, login } = data.data;
      dispatch(setUserData(email, id, login, true));
      dispatch(getPhotosAuthUser(id));
    }
  };
};

// Set authentication main user
export const login = (email, password, rememberMe = false, captcha) => {
  return async (dispatch) => {
    let Response = await AuthProfileAPI.loginProfile(
      email,
      password,
      rememberMe,
      captcha
    );

    if (Response.data.resultCode === 0) {
      dispatch(getAuthData());
    } else {
      if (Response.data.resultCode === 10) {
        dispatch(getCaptchaUrl());
      }
      // message with error if you send misstake request loginization 
      let messages =
        Response.data.messages.length > 0
          ? Response.data.messages[0]
          : "Some error";
      dispatch(stopSubmit("login", { _error: messages }));
    }
  };
};

// [Get Captcha for deactivaited vereficate, and dispatch this captcha]
export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

// [Deleting all information about the main user]
export const logout = () => {
  return async (dispatch) => {
    let data = await AuthProfileAPI.logoutProfile();
    if (data.resultCode === 0) {
      dispatch(setUserData(null, null, null, false));
    }
  };
};

export default authReducer;

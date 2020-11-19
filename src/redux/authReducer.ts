import { stopSubmit } from "redux-form";
import { AuthProfileAPI, securityAPI } from "../api/AuthAPI";
import { userAPI, userStatus } from "../api/UsersAPI";

const SET_USER_DATA = "redux/authReducer/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "redux/authReducer/GET_CAPTCHA_URL_SUCCESS";
const GET_USER_PHOTOS = "redux/authReducer/GET_USER_PHOTOS";

type initialStateType = {
  email: string | null;
  id: number | null;
  login: string | null;
  isAuth: boolean;
  isFetching: boolean;
  // info for user aroun button login
  captchaUrl: string | null;
  photos: string | null;
};

let initialState: initialStateType = {
  email: null,
  id: null,
  login: null,
  isAuth: false,
  isFetching: false,
  // info for user aroun button login
  captchaUrl: null,
  photos: null,
};

const authReducer = (
  state = initialState,
  action: ActionType
): initialStateType => {
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

type ActionType =
  | getPhotosUserType
  | setUserDataType
  | getCaptchaUrlSuccessType;

export const getPhotosUser = (photos: string): getPhotosUserType => ({
  type: GET_USER_PHOTOS,
  photos,
});
export const setUserData = (
  email: string | null,
  id: number | null,
  login: string | null,
  isAuth: boolean
): setUserDataType => ({
  type: SET_USER_DATA,
  data: { email, id, login, isAuth },
});
export const getCaptchaUrlSuccess = (
  captchaUrl: string | null
): getCaptchaUrlSuccessType => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  captchaUrl: { captchaUrl },
});

//[ActionCreatorType]

type getPhotosUserType = {
  type: typeof GET_USER_PHOTOS; //typeof value in const GET_USER_PHOTOS
  photos: string;
};
type setUserDataActionType = {
  email: string | null;
  id: number | null;
  login: string | null;
  isAuth: boolean;
};
type setUserDataType = {
  type: typeof SET_USER_DATA;
  data: setUserDataActionType;
};
type getCaptchaUrlSuccessType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS;
  captchaUrl: { captchaUrl: string | null };
};

//[ThunkActionCreator]

// Get main photo user
export const getPhotosAuthUser = (userId: number) => {
  return async (dispatch: any) => {
    let data = await userStatus.getUsersInfo(userId);
    dispatch(getPhotosUser(data.photos.large));
  };
};

// Dispatch in authReduser information main user: email, id, login ,
export const getAuthData = () => {
  return async (dispatch: any) => {
    let data = await userAPI.getAuthMe();
    if (data.resultCode === 0) {
      let { email, id, login } = data.data;
      dispatch(setUserData(email, id, login, true));
      dispatch(getPhotosAuthUser(id));
    }
  };
};

// Set authentication main user
export const login = (
  email: string | null,
  password: string | null,
  rememberMe = false,
  captcha: string | null
) => {
  return async (dispatch: any) => {
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
export const getCaptchaUrl = () => async (dispatch: any) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

// [Deleting all information about the main user]
export const logout = () => {
  return async (dispatch: any) => {
    let data = await AuthProfileAPI.logoutProfile();
    if (data.resultCode === 0) {
      dispatch(setUserData(null, null, null, false));
    }
  };
};

export default authReducer;

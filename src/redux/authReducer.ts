import { Dispatch } from 'react';
import { stopSubmit } from "redux-form";
import { ThunkAction } from "redux-thunk";
import { AuthProfileAPI, securityAPI } from "../api/AuthAPI";
import { CaptchaResultCodeEnum, ResultCodeEnum, userAPI, userStatus } from "../api/UsersAPI";
import { AppStateType, InfernActionsType } from "./reduxStore";

// const SET_USER_DATA = "redux/authReducer/SET_USER_DATA";
// const GET_CAPTCHA_URL_SUCCESS = "redux/authReducer/GET_CAPTCHA_URL_SUCCESS";
// const GET_USER_PHOTOS = "redux/authReducer/GET_USER_PHOTOS";

type initialStateType = typeof initialState

let initialState = {
  email: null as string | null,
  id: null as number | null,
  login: null as string | null,
  isAuth: false as boolean,
  isFetching: false as boolean,
  // info for user aroun button login
  captchaUrl: null as string | null,
  photos: null as string | null,
};

const authReducer = (
  state = initialState,
  action: ActionType
): initialStateType => {
  switch (action.type) {
    // Add in state information main user: email, id, login
    case 'SET_USER_DATA':
      return {
        ...state,
        ...action.data,
      };
    // Add in state captcha image-code
    case 'GET_CAPTCHA_URL_SUCCESS':
      return {
        ...state,
        ...action.captchaUrl,
      };
    // Add image profile main user
    case 'GET_USER_PHOTOS':
      return {
        ...state,
        photos: action.photos,
      };
    default:
      return state;
  }
};

//[ActionCreator]

type ActionType = InfernActionsType<typeof authActions>

const authActions = {
  getPhotosUser:(photos: string) => (<const>{
    type: 'GET_USER_PHOTOS',
    photos,
  }),
  setUserData:(
    email: string | null,
    id: number | null,
    login: string | null,
    isAuth: boolean
  ) => (<const>{
    type: 'SET_USER_DATA',
    data: { email, id, login, isAuth },
  }),
  getCaptchaUrlSuccess:(
    captchaUrl: string | null
  ) => (<const>{
    type: 'GET_CAPTCHA_URL_SUCCESS',
    captchaUrl: { captchaUrl },
  }),
}


//[ThunkActionCreator]
type ThunkType = ThunkAction<Promise<void>,AppStateType,unknown,ActionType>
type DispatchType = Dispatch<ActionType>

// Get main photo user
export const getPhotosAuthUser = (userId: number):ThunkType => {
  return async (dispatch: DispatchType) => {
    let data = await userStatus.getUsersInfo(userId);
    dispatch(authActions.getPhotosUser(data.photos.large));
  };
};

// Dispatch in authReduser information main user: email, id, login ,
export const getAuthData = ():ThunkType => {
  return async (dispatch: any) => {
    let data = await userAPI.getAuthMe();
    if (data.resultCode === ResultCodeEnum.Success) {
      let { email, id, login } = data.data;
      dispatch(authActions.setUserData(email, id, login, true));
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
):ThunkType => {
  return async (dispatch: any) => {
    let LoginData = await AuthProfileAPI.loginProfile(
      email,
      password,
      rememberMe,
      captcha
    );
    if (LoginData.resultCode  === ResultCodeEnum.Success) {
      dispatch(getAuthData());
    } else {
      if (LoginData.resultCode === CaptchaResultCodeEnum.Captcha) {
        dispatch(getCaptchaUrl());
      }
      // message with error if you send misstake request loginization
      let messages =
      LoginData.messages.length > 0
          ? LoginData.messages[0]
          : "Some error";
      dispatch(stopSubmit("login", { _error: messages }));
    }
  };
};

// [Get Captcha for deactivaited vereficate, and dispatch this captcha]
export const getCaptchaUrl = ():ThunkType => async (dispatch: DispatchType) => {
  const CaptchaData = await securityAPI.getCaptchaUrl();
  dispatch(authActions.getCaptchaUrlSuccess(CaptchaData.url));
};

// [Deleting all information about the main user]
export const logout = ():ThunkType => {
  return async (dispatch: DispatchType) => {
    let LogoutData = await AuthProfileAPI.logoutProfile();
    if (LogoutData.resultCode === ResultCodeEnum.Success) {
      dispatch(authActions.setUserData(null, null, null, false));
    }
  };
};

export default authReducer;
// import { Dispatch } from 'react';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { getAuthData } from "./authReducer";
import { AppStateType } from './reduxStore';

const INITIALIZED_SUCCESS = "redux/autReducer/INITIALIZED_SUCCESS";

type initialStateType ={
  initialized: boolean | null;
}

let initialState: initialStateType = {
  initialized: false,
};


const appReducer = (state:initialStateType = initialState, action:ActionType): initialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

// [ActionCreator]

type ActionType = initializedSuccessType 

export const initializedSuccess = ():initializedSuccessType => ({
  type: INITIALIZED_SUCCESS,
});

// [ActionCreatorType]

type initializedSuccessType = {
  type: typeof INITIALIZED_SUCCESS
}

// [ThunkActionCreator]

type DispatchType = Dispatch<ActionType>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>;

export const initialize = ():ThunkType => {
  return  async (dispatch:any) => {
    await dispatch(getAuthData()).then(() => {
      dispatch(initializedSuccess());
    });
  };
};

export default appReducer;

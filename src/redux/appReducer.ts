// import { Dispatch } from 'react';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { getAuthData } from "./authReducer";
import { AppStateType, InfernActionsType } from './reduxStore';

const INITIALIZED_SUCCESS = "redux/autReducer/INITIALIZED_SUCCESS";

let initialState = {
  initialized: false,
};

type initialStateType = typeof initialState
type ActionType = InfernActionsType<typeof appActions>


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

const appActions = {
  initializedSuccess:() => ({
    type: INITIALIZED_SUCCESS,
  }),
}

// [ThunkActionCreator]

type DispatchType = Dispatch<ActionType>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>;

export const initialize = ():ThunkType => {
  return  async (dispatch:any) => {
    await dispatch(getAuthData()).then(() => {
      dispatch(appActions.initializedSuccess());
    });
  };
};

export default appReducer;

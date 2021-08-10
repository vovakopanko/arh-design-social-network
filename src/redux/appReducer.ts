// import { Dispatch } from 'react';
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
// type DispatchType = Dispatch<ActionType>;
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionType>;

// Waits for all responses from AJAX requests, if request don't have response, you saw Preloader

// It's Request, when you dont used asinc/await

// export const initialize = ():ThunkType => {
//   return (dispatch:any) => {
//     let promise = dispatch(getAuthData());
//     Promise.all([promise]).then(() => {
//       dispatch(initializedSuccess());
//     });
//   };
// };

export const initialize = ():ThunkType => {
  return  async (dispatch:any) => {
    await dispatch(getAuthData()).then(() => {
      dispatch(initializedSuccess());
    });
  };
};

export default appReducer;

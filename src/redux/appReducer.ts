import { getAuthData } from "./authReducer";

const INITIALIZED_SUCCESS = "redux/autReducer/INITIALIZED_SUCCESS";

type initialStateType ={
  initialized: boolean | null;
}

let initialState: initialStateType = {
  initialized: false,
};

const appReducer = (state = initialState, action:ActionType): initialStateType => {
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

// Waits for all responses from AJAX requests, if request don't have response, you saw Preloader
export const initialize = () => {
  return (dispatch:any) => {
    let promise = dispatch(getAuthData());
    Promise.all([promise]).then(() => {
      dispatch(initializedSuccess());
    });
  };
};

export default appReducer;

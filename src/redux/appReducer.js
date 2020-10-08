import { getAuthData } from "./authReducer";

const INITIALIZED_SUCCESS = "redux/autReducer/INITIALIZED_SUCCESS";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
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

export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});

// [ThunkActionCreator]

// Waits for all responses from AJAX requests, if request don't have response, you saw Preloader
export const initialize = () => {
  return (dispatch) => {
    let promise = dispatch(getAuthData());
    Promise.all([promise]).then(() => {
      dispatch(initializedSuccess());
    });
  };
};

export default appReducer;

import { subscribeAPI, userAPI } from "../api/Api";

const FOLLOW_USER = "redux/professionalsReducer/FOLLOW_USER";
const UNFOLLOW_USER = "redux/professionalsReducer/UNFOLLOW_USER";
const SET_USERS = "redux/professionalsReducer/SET_USERS";
const SET_CURRENT_PAGE = "redux/professionalsReducer/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "redux/professionalsReducer/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "redux/professionalsReducer/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING = "redux/professionalsReducer/TOGGLE_IS_FOLLOWING";
const SET_CURRENT_PORTION = "redux/professionalsReducer/SET_CURRENT_PORTION";

let initialState = {
  professionals: [],
  pageSize: 15,
  portionSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFeching: false,
  followingInProgress: [],
  currentPortion: 1,
  
};

const professionalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_USER:
      return {
        ...state,
        professionals: state.professionals.map((p) => {
          if (p.id === action.userId) {
            return { ...p, followed: true };
          }
          return p;
        }),
      };
    case UNFOLLOW_USER:
      return {
        ...state,
        professionals: state.professionals.map((p) => {
          if (p.id === action.userId) {
            return { ...p, followed: false };
          }
          return p;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        professionals: action.professionals,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFeching: action.isFeching,
      };
    case TOGGLE_IS_FOLLOWING:
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      };
    case SET_CURRENT_PORTION:
      return {
        ...state,
        currentPortion: action.currentPortion,
      };
    default:
      return state;
  }
};


//[ActionCreator]

//Subscribe professionals
export const successFollow = (userId) => ({ type: FOLLOW_USER, userId });
//Unsubscribe professional
export const successUnfollow = (userId) => ({ type: UNFOLLOW_USER, userId });
export const setProfessionals = (professionals) => ({
  type: SET_USERS,
  professionals,
});
//Set current page, wich you chose, when clicked on it
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
//Set all professionals who are registered on the server
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});
//Show boot file in the absence of data
export const toggleIsFetching = (isFeching) => ({
  type: TOGGLE_IS_FETCHING,
  isFeching,
});
//Disabled button if you don't have response from API server
export const toggleIsFollowingProgress = (followingInProgress, userId) => ({
  type: TOGGLE_IS_FOLLOWING,
  followingInProgress,
  userId,
});
// Set current portion professionals
export const setPortionNumber = (currentPortion) => ({
  type: SET_CURRENT_PORTION,
  currentPortion,
});

// [ThunkActionCreator]

//Get portion professionals by currentPage and PageSize variables
export const getUsers = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(toggleIsFetching(true));
    let data = await userAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(setProfessionals(data.items));
  };
};

// Follow and Unfollow code, took out general variables
export const followUnffolwThunk = async (
  dispatch,
  userId,
  APImethod,
  actionCreator
) => {
  dispatch(toggleIsFollowingProgress(true, userId));
  let Response = await APImethod(userId);
  if (Response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleIsFollowingProgress(false, userId));
};

// Subscribe from user
export const follow = (userId) => {
  return async (dispatch) => {
    followUnffolwThunk(
      dispatch,
      userId,
      subscribeAPI.deleteSubscribe.bind(subscribeAPI),
      successUnfollow
    );
  };
};

// Unsubscribe from user
export const unfollow = (userId) => {
  return async (dispatch) => {
    followUnffolwThunk(
      dispatch,
      userId,
      subscribeAPI.postSubscribe.bind(subscribeAPI),
      successFollow
    );
  };
};

export default professionalsReducer;

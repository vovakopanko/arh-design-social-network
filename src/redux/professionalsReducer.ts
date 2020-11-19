import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { subscribeAPI } from "../api/SubscribeAPI";
import { userAPI } from "../api/UsersAPI";
import { AppStateType } from "./reduxStore";

const FOLLOW_USER = "redux/professionalsReducer/FOLLOW_USER";
const UNFOLLOW_USER = "redux/professionalsReducer/UNFOLLOW_USER";
const SET_USERS = "redux/professionalsReducer/SET_USERS";
const SET_CURRENT_PAGE = "redux/professionalsReducer/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT =
  "redux/professionalsReducer/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "redux/professionalsReducer/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING = "redux/professionalsReducer/TOGGLE_IS_FOLLOWING";
const SET_CURRENT_PORTION = "redux/professionalsReducer/SET_CURRENT_PORTION";
const SET_SEARCH_NAME = "redux/professionalsReducer/SET_SEARCH_NAME";

let initialState: initialStateType = {
  professionals: [],
  pageSize: 15,
  portionSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFeching: false,
  followingInProgress: [],
  currentPortion: 1,
  searchName: "",
};

type initialStateType = {
  professionals: Array<any>;
  pageSize: number;
  portionSize: number;
  totalUsersCount: number;
  currentPage: 1 | number;
  isFeching: boolean;
  followingInProgress: Array<any>;
  currentPortion: number;
  searchName: string;
};

const professionalsReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  switch (action.type) {
    case FOLLOW_USER:
      return {
        ...state,
        professionals: state.professionals.map((p: any) => {
          if (p.id === action.userId) {
            return { ...p, followed: true };
          }
          return p;
        }),
      };
    case UNFOLLOW_USER:
      return {
        ...state,
        professionals: state.professionals.map((p: any) => {
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
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    case SET_CURRENT_PORTION:
      return {
        ...state,
        currentPortion: action.currentPortion,
      };
    case SET_SEARCH_NAME:
      return {
        ...state,
        searchName: action.searchName,
      };
    default:
      return state;
  }
};

//[ActionCreator]
//Subscribe professionals
type ActionsTypes =
  | successFollowType
  | successUnfollowType
  | setProfessionalsType
  | setCurrentPageType
  | setTotalUsersCountType
  | setTotalUsersCountType
  | toggleIsFollowingProgressType
  | setPortionNumberType
  | setSearchNameSuccessType
  | toggleIsFetching;

export const successFollow = (userId: number): successFollowType => ({
  type: FOLLOW_USER,
  userId,
});
//Unsubscribe professional
export const successUnfollow = (userId: number): successUnfollowType => ({
  type: UNFOLLOW_USER,
  userId,
});
export const setProfessionals = (
  professionals: Array<any>
): setProfessionalsType => ({
  type: SET_USERS,
  professionals,
});
//Set current page, wich you chose, when clicked on it
export const setCurrentPage = (currentPage: number): setCurrentPageType => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
//Set all professionals who are registered on the server
export const setTotalUsersCount = (
  totalUsersCount: number
): setTotalUsersCountType => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});
//Show boot file in the absence of data
export const toggleIsFetching = (isFeching: boolean): toggleIsFetching => ({
  type: TOGGLE_IS_FETCHING,
  isFeching,
});
//Disabled button if you don't have response from API server
export const toggleIsFollowingProgress = (
  followingInProgress: boolean,
  userId: number
): toggleIsFollowingProgressType => ({
  type: TOGGLE_IS_FOLLOWING,
  followingInProgress,
  userId,
});
// Set current portion professionals
export const setPortionNumber = (
  currentPortion: number
): setPortionNumberType => ({
  type: SET_CURRENT_PORTION,
  currentPortion,
});
//Get user witch you search
export const setSearchNameSuccess = (
  searchName: string
): setSearchNameSuccessType => ({
  type: SET_SEARCH_NAME,
  searchName,
});

//[ActionCreatorType]
type successUnfollowType = {
  type: typeof UNFOLLOW_USER;
  userId: number;
};
type setProfessionalsType = {
  type: typeof SET_USERS;
  professionals: Array<any>;
};
type setCurrentPageType = {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
};
type setSearchNameSuccessType = {
  type: typeof SET_SEARCH_NAME;
  searchName: string;
};
type successFollowType = {
  type: typeof FOLLOW_USER;
  userId: number;
};
type setPortionNumberType = {
  type: typeof SET_CURRENT_PORTION;
  currentPortion: number;
};
type setTotalUsersCountType = {
  type: typeof SET_TOTAL_USERS_COUNT;
  totalUsersCount: number;
};
type toggleIsFollowingProgressType = {
  type: typeof TOGGLE_IS_FOLLOWING;
  followingInProgress: boolean;
  userId: number;
};
type toggleIsFetching = {
  type: typeof TOGGLE_IS_FETCHING;
  isFeching: boolean;
};
// [ThunkActionCreator]
type DispatchType = Dispatch<ActionsTypes>;
type getStateType = () => AppStateType;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;
//Get portion professionals by currentPage and PageSize variables
export const getUsers = (newPage: number): ThunkType => {
  return async (
    dispatch: Dispatch<ActionsTypes>,
    getState: () => AppStateType
  ) => {
    dispatch(setCurrentPage(newPage));
    const { currentPage, pageSize, searchName } = getState().professionalsPage;
    dispatch(toggleIsFetching(true));
    let data = await userAPI.getUsers(
      currentPage || newPage,
      pageSize,
      searchName
    );
    dispatch(toggleIsFetching(false));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(setProfessionals(data.items));
  };
};

// Follow and Unfollow code, took out general variables
export const followUnffolwThunk = async (
  dispatch: any,
  userId: number,
  APImethod: any,
  actionCreator: any
) => {
  dispatch(toggleIsFollowingProgress(true, userId));
  let Response = await APImethod(userId);
  if (Response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleIsFollowingProgress(false, userId));
};

// Subscribe from user
export const follow = (userId: number): ThunkType => async (
  dispatch: DispatchType,
  getState: getStateType
) => {
  followUnffolwThunk(
    dispatch,
    userId,
    subscribeAPI.deleteSubscribe.bind(subscribeAPI),
    successUnfollow
  );
};

// Unsubscribe from user
export const unfollow = (userId: number): ThunkType => async (
  dispatch: DispatchType,
  getState: getStateType
) => {
  followUnffolwThunk(
    dispatch,
    userId,
    subscribeAPI.postSubscribe.bind(subscribeAPI),
    successFollow
  );
};

// Search users
export const searchName = (searchName: string): ThunkType => async (
  dispatch: DispatchType,
  getState: getStateType
) => {
  dispatch(setSearchNameSuccess(searchName));
  dispatch(setCurrentPage(1));
  dispatch(setPortionNumber(1));
  const { currentPage } = getState().professionalsPage;
  //When I'm use method getState , I have error in ActionType , why?
  //@ts-ignore
  dispatch(getUsers(currentPage));
};

export default professionalsReducer;

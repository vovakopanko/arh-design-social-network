import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { subscribeAPI } from "../api/SubscribeAPI";
import { userAPI } from "../api/UsersAPI";
import { AppStateType, InfernActionsType } from "./reduxStore";

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
    case "FOLLOW_USER":
      return {
        ...state,
        professionals: state.professionals.map((p: any) => {
          if (p.id === action.userId) {
            return { ...p, followed: true };
          }
          return p;
        }),
      };
    case "UNFOLLOW_USER":
      return {
        ...state,
        professionals: state.professionals.map((p: any) => {
          if (p.id === action.userId) {
            return { ...p, followed: false };
          }
          return p;
        }),
      };
    case "SET_USERS":
      return {
        ...state,
        professionals: action.professionals,
      };
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case "SET_TOTAL_USERS_COUNT":
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    case "TOGGLE_IS_FETCHING":
      return {
        ...state,
        isFeching: action.isFeching,
      };
    case "TOGGLE_IS_FOLLOWING":
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    case "SET_CURRENT_PORTION":
      return {
        ...state,
        currentPortion: action.currentPortion,
      };
    case "SET_SEARCH_NAME":
      return {
        ...state,
        searchName: action.searchName,
      };
    default:
      return state;
  }
};

//[ActionCreator]

type ActionsTypes = InfernActionsType<typeof actions>
  const actions = {
    successFollow:(userId: number) => (<const>{
      type: 'FOLLOW_USER',
      userId,
    }),
    //Unsubscribe professional
    successUnfollow:(userId: number) => (<const>{
      type: 'UNFOLLOW_USER',
      userId,
    }),
    setProfessionals:(
      professionals: Array<any>
    ) => (<const>{
      type: 'SET_USERS',
      professionals,
    }),
    //Set current page, wich you chose, when clicked on it
    setCurrentPage:(currentPage: number) => (<const>{
      type: 'SET_CURRENT_PAGE',
      currentPage,
    }),
    //Set all professionals who are registered on the server
    setTotalUsersCount:(
      totalUsersCount: number
    ) => (<const>{
      type: 'SET_TOTAL_USERS_COUNT',
      totalUsersCount,
    }),
    //Show boot file in the absence of data
    toggleIsFetching:(isFeching: boolean) => (<const>{
      type: 'TOGGLE_IS_FETCHING',
      isFeching,
    }),
    //Disabled button if you don't have response from API server
    toggleIsFollowingProgress:(
      followingInProgress: boolean,
      userId: number
    ) => (<const>{
      type: 'TOGGLE_IS_FOLLOWING',
      followingInProgress,
      userId,
    }),
    // Set current portion professionals
    setPortionNumber:(
      currentPortion: number
    ) => (<const>{
      type: 'SET_CURRENT_PORTION',
      currentPortion,
    }),
    //Get user witch you search
    setSearchNameSuccess:(
      searchName: string
    ) => (<const>{
      type: 'SET_SEARCH_NAME',
      searchName,
    }),
  }

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
    dispatch(actions.setCurrentPage(newPage));
    const { currentPage, pageSize, searchName } = getState().professionalsPage;
    dispatch(actions.toggleIsFetching(true));
    let data = await userAPI.getUsers(
      currentPage || newPage,
      pageSize,
      searchName
    );
    dispatch(actions.toggleIsFetching(false));
    dispatch(actions.setTotalUsersCount(data.totalCount));
    dispatch(actions.setProfessionals(data.items));
  };
};

// Follow and Unfollow code, took out general variables
export const followUnffolwThunk = async (
  dispatch: DispatchType,
  userId: number,
  APImethod: any,
  actionCreator: (userId:number)=> ActionsTypes
) => {
  dispatch(actions.toggleIsFollowingProgress(true, userId));
  let Response = await APImethod(userId);
  if (Response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(actions.toggleIsFollowingProgress(false, userId));
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
    actions.successUnfollow
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
    actions.successFollow
  );
};

// Search users
export const searchName = (searchName: string): ThunkType => async (
  dispatch: DispatchType,
  getState: getStateType
) => {
  dispatch(actions.setSearchNameSuccess(searchName));
  dispatch(actions.setCurrentPage(1));
  dispatch(actions.setPortionNumber(1));
  const { currentPage } = getState().professionalsPage;

  //@ts-ignore
  dispatch(getUsers(currentPage));
};

export default professionalsReducer;

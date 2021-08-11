import { Dispatch } from "react";
import { ThunkAction } from 'redux-thunk';
import { friendsApi } from "../api/FriendsAPI";
import { subscribeAPI } from "../api/SubscribeAPI";
import { ResultCodeEnum } from "../api/UsersAPI";
import { AppStateType } from './reduxStore';

export const REMOVE_FRIENDS = "redux/friendsReducer/REMOVE_FRIENDS";
export const SET_FRIENDS = "redux/friendsReducerSET_FRIENDS";
export const LOADING_FRIENDS = "redux/friendsReducer/LOADING_FRIENDS";

let initialState: initialStateType = {
  friends: [],
  loadingFriends: false,
};

type initialStateType = {
  friends: Array<any>;
  loadingFriends: boolean;
};

// type initialStateType = typeof initialState

export const friendsReducer = (
  state = initialState,
  action: ActionType
): initialStateType => {
  switch (action.type) {
    case REMOVE_FRIENDS:
      return {
        ...state,
        friends: state.friends.map((u: any) => {
          if (action.friendId === u.id) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_FRIENDS:
      return {
        ...state,
        friends: action.friends,
      };
    case LOADING_FRIENDS:
      return {
        ...state,
        loadingFriends: !state.loadingFriends,
      };
    default:
      return state;
  }
};

// [ActionCreator]
type ActionType = removeSuccessType | setFriendsSuccessType | loadingFriendsType;

export const removeSuccess = (friendId: number): removeSuccessType => ({
  type: REMOVE_FRIENDS,
  friendId,
});
export const setFriendsSuccess = (friends: any): setFriendsSuccessType  => ({
  type: SET_FRIENDS,
  friends,
});
export const loadingFriends = (): loadingFriendsType => ({ type: LOADING_FRIENDS });

// [ActionCreatorType]

type removeSuccessType = {
  type: typeof REMOVE_FRIENDS;
  friendId: number;
};
type setFriendsSuccessType = {
  type: typeof SET_FRIENDS;
  friends: any;
};
type loadingFriendsType = {
  type: typeof LOADING_FRIENDS;
};
// [ThunkActionCreator]
type DispatchType = Dispatch<ActionType>;
type getStateType = () => AppStateType;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>;

export const getFriends = ():ThunkType => async (dispatch: DispatchType) => {
  dispatch(loadingFriends());
  const GetAllYourFriends = await friendsApi.getFriends();
  dispatch(loadingFriends());
  dispatch(setFriendsSuccess(GetAllYourFriends));
};

export const removeFriend = (friendId: number):ThunkType => async (dispatch: any) => {
  let response = await subscribeAPI.deleteSubscribe(friendId);
  if (response.data.resultCode === ResultCodeEnum.Success) {
    dispatch(removeSuccess(friendId));
    dispatch(getFriends());
  }
};

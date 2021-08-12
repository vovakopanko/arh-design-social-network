import { Dispatch } from "react";
import { ThunkAction } from 'redux-thunk';
import { friendsApi } from "../api/FriendsAPI";
import { subscribeAPI } from "../api/SubscribeAPI";
import { ResultCodeEnum } from "../api/UsersAPI";
import { AppStateType, InfernActionsType } from './reduxStore';

export const REMOVE_FRIENDS = "redux/friendsReducer/REMOVE_FRIENDS";
export const SET_FRIENDS = "redux/friendsReducerSET_FRIENDS";
export const LOADING_FRIENDS = "redux/friendsReducer/LOADING_FRIENDS";

let initialState = {
  friends: [] as Array<any>,
  loadingFriends: false,
};

// type initialStateType = {
//   friends: Array<any>;
//   loadingFriends: boolean;
// };

type initialStateType = typeof initialState

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

type ActionType = InfernActionsType<typeof friendsActions>

const friendsActions = {
  removeSuccess:(friendId: number) => (<const>{
    type: REMOVE_FRIENDS,
    friendId,
  }),
  setFriendsSuccess:(friends: any) => (<const>{
    type: SET_FRIENDS,
    friends,
  }),
  loadingFriends:() => (<const>{ type: LOADING_FRIENDS }),
}



// [ThunkActionCreator]
type DispatchType = Dispatch<ActionType>;
type getStateType = () => AppStateType;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>;

export const getFriends = ():ThunkType => async (dispatch: DispatchType) => {
  dispatch(friendsActions.loadingFriends());
  const GetAllYourFriends = await friendsApi.getFriends();
  dispatch(friendsActions.loadingFriends());
  dispatch(friendsActions.setFriendsSuccess(GetAllYourFriends));
};

export const removeFriend = (friendId: number):ThunkType => async (dispatch: any) => {
  let response = await subscribeAPI.deleteSubscribe(friendId);
  if (response.data.resultCode === ResultCodeEnum.Success) {
    dispatch(friendsActions.removeSuccess(friendId));
    dispatch(getFriends());
  }
};

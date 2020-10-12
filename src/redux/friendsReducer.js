import { friendsApi } from "../api/FriendsAPI";
import { subscribeAPI } from "../api/SubscribeAPI";

export const REMOVE_FRIENDS = "redux/friendsReducer/REMOVE_FRIENDS";
export const SET_FRIENDS = "redux/friendsReducerSET_FRIENDS";
export const LOADING_FRIENDS = "redux/friendsReducer/LOADING_FRIENDS";

let initialState = {
  friends: [],
  loadingFriends: false,
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_FRIENDS:
      return {
        ...state,
        friends: state.friends.map((u) => {
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

export const removeSuccess = (friendId) => ({ type: REMOVE_FRIENDS, friendId });
export const setFriendsSuccess = (friends) => ({ type: SET_FRIENDS, friends });
export const loadingFriends = () => ({ type: LOADING_FRIENDS });

// [ThunkActionCreator]

export const getFriends = () => async (dispatch) => {
  dispatch(loadingFriends());
  const response = await friendsApi.getFriends();
  dispatch(loadingFriends());
  dispatch(setFriendsSuccess(response.items));
};

export const removeFriend = (friendId) => async (dispatch) => {
  let response = await subscribeAPI.deleteSubscribe(friendId);
  if (response.data.resultCode === 0) {
    dispatch(removeSuccess(friendId));
    dispatch(getFriends(friendId));
  }
};

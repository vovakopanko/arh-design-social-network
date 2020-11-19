import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { subscribeAPI } from "../api/SubscribeAPI";
import { userAPI, userStatus } from "../api/UsersAPI";
import person1 from "./../assets/images/person1.png";
import person2 from "./../assets/images/person2.png";
import person3 from "./../assets/images/person3.png";
import { AppStateType } from "./reduxStore";

const ADD_POST = "redux/profileReduser/ADD_POST";
const SET_USER_PROFILE = "redux/profilReduser/SET_USER_PROFILE";
const TOGGLE_IS_FETCHING = "redux/profilReduser/TOGGLE_IS_FETCHING";
const SET_USER_STATUS = "redux/profilReduser/SET_USER_STATUS";
const SAVE_PHOTO_SUCCESS = "redux/profilReduser/SAVE_PHOTO_SUCCESS";
const FOLLOWING_PROGRESS = "redux/profilReduser/FOLLOWING_PROGRESS";
const TOGGLE_IS_FOLLOWING = "redux/profilReduser/TOGGLE_IS_FOLLOWING";
const FOLLOW_USER = "redux/profilReduser/FOLLOW_USER";
const UNFOLLOW_USER = "redux/profilReduser/UNFOLLOW_USER";

type postDataType = {
  id: number;
  photo: any;
  name: string;
  message: string;
  likesCount: number;
};

type initialStateType = {
  postData: Array<postDataType>;
  profile: any;
  status: string | null;
  followingProgress: any;
  followingInProgress: Array<any>;
  isFeching: boolean;
  userId: number | null;
};

let initialState: initialStateType = {
  postData: [
    {
      id: 1,
      photo: person1,
      name: "Николай",
      message: "Отличный специалист, помог с лагдшафтным дизайном",
      likesCount: 2,
    },
    {
      id: 2,
      photo: person2,
      name: "Ирина",
      message: "Наконец-то закончили наш дом, благодоря Вам, спасибо",
      likesCount: 3,
    },
    {
      id: 3,
      photo: person3,
      name: "Василия",
      message: "Все по делу, с толком и расстановкой",
      likesCount: 10,
    },
  ],
  profile: null,
  status: null,
  followingProgress: null,
  followingInProgress: [],
  isFeching: false,
  userId: null,
};

const profileReducer = (
  state = initialState,
  action: ActionType
): initialStateType => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        postData: [
          ...state.postData,
          {
            id: 4,
            photo: state.profile.photos.large,
            name: state.profile.fullName,
            message: action.NewPostProfile,
            likesCount: 0,
          },
        ],
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFeching: action.isFeching,
      };
    case FOLLOW_USER:
      return {
        ...state,
        followingProgress: false,
      };
    case UNFOLLOW_USER:
      return {
        ...state,
        followingProgress: true,
      };
    case TOGGLE_IS_FOLLOWING:
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case FOLLOWING_PROGRESS:
      return {
        ...state,
        followingProgress: action.followingProgress,
      };
    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case SAVE_PHOTO_SUCCESS:
      return { ...state, profile: { ...state.profile, photos: action.photos } };
    default:
      return state;
  }
};

// [ActionCreator]
type ActionType =
  | AddPostType
  | setUserStatusType
  | toggleIsFollowingProgressType
  | setFollowingProgressType
  | savePhotoSuccessType
  | setFollowingProgressType
  | savePhotoSuccessType
  | toggleIsFetchingType
  | setUserProfileType
  | successFollowType
  | successUnfollowType;

//Add posts to the wall
export const AddPost = (NewPostProfile: any): AddPostType => ({
  type: ADD_POST,
  NewPostProfile,
});
//Set user Status in mainmenu
export const setUserStatus = (status: string): setUserStatusType => ({
  type: SET_USER_STATUS,
  status,
});
//Disabled button follow/unfollow
export const toggleIsFollowingProgress = (
  followingInProgress: boolean,
  userId: number
): toggleIsFollowingProgressType => ({
  type: TOGGLE_IS_FOLLOWING,
  followingInProgress,
  userId,
});
//check your subscription on user
export const setFollowingProgress = (
  followingProgress: boolean
): setFollowingProgressType => ({
  type: FOLLOWING_PROGRESS,
  followingProgress,
});
//Save your photos in profilePage
export const savePhotoSuccess = (photos: string): savePhotoSuccessType => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});
//Checking your received a response from the server
export const toggleIsFetching = (isFeching: boolean): toggleIsFetchingType => ({
  type: TOGGLE_IS_FETCHING,
  isFeching,
});
//Set data file User profile
export const setUserProfile = (profile: any): setUserProfileType => ({
  type: SET_USER_PROFILE,
  profile,
});
export const successFollow = (userId: number): successFollowType => ({
  type: FOLLOW_USER,
  userId,
});
export const successUnfollow = (
  userId: number | null
): successUnfollowType => ({
  type: UNFOLLOW_USER,
  userId,
});
// [ActionCreatorType]
type AddPostType = {
  type: typeof ADD_POST;
  NewPostProfile: any;
};
type setUserStatusType = {
  type: typeof SET_USER_STATUS;
  status: string;
};
type toggleIsFollowingProgressType = {
  type: typeof TOGGLE_IS_FOLLOWING;
  followingInProgress: boolean;
  userId: number;
};
type setFollowingProgressType = {
  type: typeof FOLLOWING_PROGRESS;
  followingProgress: boolean;
};
type savePhotoSuccessType = {
  type: typeof SAVE_PHOTO_SUCCESS;
  photos: string;
};
type setUserProfileType = {
  type: typeof SET_USER_PROFILE;
  profile: any;
};
type successFollowType = {
  type: typeof FOLLOW_USER;
  userId: number;
};
type successUnfollowType = {
  type: typeof UNFOLLOW_USER;
  userId: number | null;
};
type toggleIsFetchingType = {
  type: typeof TOGGLE_IS_FETCHING;
  isFeching: boolean;
};

// [ThunkActionCreator]
type getStateType = () => AppStateType;
type DispatchType = Dispatch<ActionType>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>;
//Get your/user information for main page
//  Discription for Thunk creator
//  export type ThunkAction<R, S, E, A extends Action> = (
//   dispatch: ThunkDispatch<S, E, A>,
//   getState: () => S,
//   extraArgument: E
// ) => R;

export const getProfileData = (userId: number | null): ThunkType => {
  return async (dispatch: DispatchType, getState: getStateType) => {
    dispatch(toggleIsFetching(true));
    let data = await userStatus.getUsersInfo(userId);
    dispatch(toggleIsFetching(false));
    dispatch(setUserProfile(data));
  };
};

//Check user's subscription information
export const getUserFollowStatus = (userId: number): ThunkType => {
  return async (
    dispatch: Dispatch<ActionType>,
    getState: () => AppStateType
  ) => {
    let Response = await userAPI.getFollowingUser(userId);
    dispatch(setFollowingProgress(Response.data));
  };
};

export const followUnffolwThunk = async (
  dispatch: DispatchType,
  userId: number,
  APImethod: any,
  actionCreator: (userId:number)=> successUnfollowType | successFollowType  
) => {
  dispatch(toggleIsFollowingProgress(true, userId));
  let Response = await APImethod(userId);
  if (Response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleIsFollowingProgress(false, userId));
  //@ts-ignore
  dispatch(getUserFollowStatus(userId));
};

//Subscribe to user with request certain userId
export const follow = (userId: number): ThunkType => {
  return async (dispatch: DispatchType, getState: getStateType) => {
    followUnffolwThunk(
      dispatch,
      userId,
      subscribeAPI.deleteSubscribe.bind(subscribeAPI),
      successUnfollow
    );
  };
};

//Unsubscribe to user with request certain userId
export const unfollow = (userId: number): ThunkType => {
  return async (
    dispatch: Dispatch<ActionType>,
    getState: () => AppStateType
  ) => {
    followUnffolwThunk(
      dispatch,
      userId,
      subscribeAPI.postSubscribe.bind(subscribeAPI),
      successFollow
    );
  };
};

//Get data file status certain user(your status)
export const getUserStatus = (userId: number): ThunkType => {
  return async (dispatch: DispatchType, getState: getStateType) => {
    let data = await userStatus.getStatus(userId);
    dispatch(setUserStatus(data));
  };
};

//Set profile picture (put request)
export const savePhoto = (photos: string): ThunkType => {
  return async (dispatch: DispatchType, getState: () => AppStateType) => {
    let Response = await userStatus.savePhoto(photos);
    if (Response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(Response.data.data.photos));
    }
  };
};

//Set new information in your profile info, when you click button in Form
export const saveProfile = (profile: any): ThunkType => {
  return async (dispatch: DispatchType, getState: () => AppStateType) => {
    const id = getState().auth.id;
    let Response = await userStatus.saveProfile(profile);
    if (Response.data.resultCode === 0) {
      //When I'm use method getState , I have error in ActionType , why?
      //@ts-ignore
      dispatch(getProfileData(id));
    }
  };
};

//Update your status
export const updateStatus = (status: string): ThunkType => {
  return async (dispatch: DispatchType, getState: getStateType) => {
    let data = await userStatus.updateStatus(status);
    if (data.resultCode === 0) {
      dispatch(setUserStatus(status));
    }
  };
};

export default profileReducer;

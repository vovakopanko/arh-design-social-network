import { subscribeAPI, userAPI, userStatus } from "../api/Api";

const ADD_POST = "redux/profileReduser/ADD_POST";
const SET_USER_PROFILE = "redux/profilReduser/SET_USER_PROFILE";
const TOGGLE_IS_FETCHING = "redux/profilReduser/TOGGLE_IS_FETCHING";
const SET_USER_STATUS = "redux/profilReduser/SET_USER_STATUS";
const SAVE_PHOTO_SUCCESS = "redux/profilReduser/SAVE_PHOTO_SUCCESS";
const FOLLOWING_PROGRESS = "redux/profilReduser/FOLLOWING_PROGRESS";
const TOGGLE_IS_FOLLOWING = "redux/profilReduser/TOGGLE_IS_FOLLOWING";
const FOLLOW_USER = "redux/profilReduser/FOLLOW_USER";
const UNFOLLOW_USER = "redux/profilReduser/UNFOLLOW_USER";

let initialState = {
  postData: [
    {
      id: 1,
      photo: "person1.png",
      name: "Николай",
      message: "Отличный специалист, помог с лагдшафтным дизайном",
      likesCount: 2,
      isFeching: "",
    },
    {
      id: 2,
      photo: "person2.png",
      name: "Ирина",
      message: "Наконец-то закончили наш дом, благодоря Вам, спасибо",
      likesCount: 3,
    },
    {
      id: 3,
      photo: "person3.png",
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
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        postData: [
          ...state.postData,
          {
            id: 4,
            photo: "person4.png",
            name: "UNDEFINED",
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

//Add posts to the wall
export const AddPost = (NewPostProfile) => ({ type: ADD_POST, NewPostProfile });

//Set user Status in mainmenu
export const setUserStatus = (status) => ({
  type: SET_USER_STATUS,
  status,
});

//Disabled button follow/unfollow
export const toggleIsFollowingProgress = (followingInProgress, userId) => ({
  type: TOGGLE_IS_FOLLOWING,
  followingInProgress,
  userId,
});

//check your subscription on user
export const setFollowingProgress = (followingProgress) => ({
  type: FOLLOWING_PROGRESS,
  followingProgress,
});

//Save your photos in profilePage
export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

//Checking your received a response from the server
export const toggleIsFetching = (isFeching) => ({
  type: TOGGLE_IS_FETCHING,
  isFeching,
});

//Set data file User profile
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});


export const successFollow = (userId) => ({ type: FOLLOW_USER, userId });
export const successUnfollow = (userId) => ({ type: UNFOLLOW_USER, userId });

// [ThunkActionCreator]

//Get your/user information for main page
export const getProfileData = (userId) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let data = await userStatus.getUsersInfo(userId);
    dispatch(toggleIsFetching(false));
    dispatch(setUserProfile(data));
  };
};

//Check user's subscription information
export const getUserFollowStatus = (userId) => {
  return async (dispatch) => {
    let Response = await userAPI.getFollowingUser(userId);
    dispatch(setFollowingProgress(Response.data));
  };
};

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
  dispatch(getUserFollowStatus(userId));
};

//Subscribe to user with request certain userId
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

//Unsubscribe to user with request certain userId
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

//Get data file status certain user(your status)
export const getUserStatus = (userId) => {
  return async (dispatch) => {
    let data = await userStatus.getStatus(userId);
    dispatch(setUserStatus(data));
  };
};

//Set profile picture (put request)
export const savePhoto = (photos) => {
  return async (dispatch) => {
    let Response = await userStatus.savePhoto(photos);
    if (Response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(Response.data.data.photos));
    }
  };
};

//Set new information in your profile info, when you click button in Form
export const saveProfile = (profile) => {
  return async (dispatch, getState) => {
    const id = getState().auth.id;
    let Response = await userStatus.saveProfile(profile);

    if (Response.data.resultCode === 0) {
      dispatch(getProfileData(id));
    }
  };
};

//Update your status
export const updateStatus = (status) => {
  return async (dispatch) => {
    let data = await userStatus.updateStatus(status);
    if (data.resultCode === 0) {
      dispatch(setUserStatus(status));
    }
  };
};

export default profileReducer;

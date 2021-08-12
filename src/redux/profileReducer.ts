import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { subscribeAPI } from "../api/SubscribeAPI";
import { userAPI, userStatus } from "../api/UsersAPI";
import person1 from "./../assets/images/person1.png";
import person2 from "./../assets/images/person2.png";
import person3 from "./../assets/images/person3.png";
import { AppStateType, InfernActionsType } from "./reduxStore";


type postDataType = {
  id: number;
  photo: any;
  name: string;
  message: string;
  likesCount: number;
};

type contactDataType = {
  facebook: string | null,
  website: string | null,
  vk: string | null,
  twitter: string | null,
  instagram: string | null,
  youtube: string | null,
  github: string | null,
  mainLink: string | null,
  }

  type photoUserType = {
    small: string | null,
    large: string | null,
    }

type profileDataType = {
  aboutMe: string | null,
contacts: Array<contactDataType>,
lookingForAJob: boolean | null,
lookingForAJobDescription: string | null,
fullName: string | null,
userId: number,
photos: Array<photoUserType>
}

type initialStateType = {
  postData: Array<postDataType>
  profile: any;
  status: string | null;
  followingProgress: any;
  followingInProgress: Array<any>;
  isFeching: boolean;
  userId: number | null;
};


enum CodeEnum {
  Success = 0,
  Error = 1,
}

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
    case 'ADD_POST':
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
    case 'TOGGLE_IS_FETCHING':
      return {
        ...state,
        isFeching: action.isFeching,
      };
    case 'FOLLOW_USER':
      return {
        ...state,
        followingProgress: false,
      };
    case 'UNFOLLOW_USER':
      return {
        ...state,
        followingProgress: true,
      };
    case 'TOGGLE_IS_FOLLOWING':
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    case 'SET_USER_PROFILE':
      return {
        ...state,
        profile: action.profile,
      };
    case 'FOLLOWING_PROGRESS':
      return {
        ...state,
        followingProgress: action.followingProgress,
      };
    case 'SET_USER_STATUS':
      return {
        ...state,
        status: action.status,
      };
    case 'SAVE_PHOTO_SUCCESS':
      return { ...state, profile: { ...state.profile, photos: action.photos } };
    default:
      return state;
  }
};

// [ActionCreator]
type ActionType = InfernActionsType<typeof profileActions>

//Add posts to the wall

export const profileActions = {
  AddPost:(NewPostProfile: any) => (<const>{
    type: 'ADD_POST',
    NewPostProfile,
  }),
  //Set user Status in mainmenu
  setUserStatus:(status: string)=> (<const>{
    type: 'SET_USER_STATUS',
    status,
  }),
  //Disabled button follow/unfollow
  toggleIsFollowingProgress:(
    followingInProgress: boolean,
    userId: number
  ) => (<const>{
    type: 'TOGGLE_IS_FOLLOWING',
    followingInProgress,
    userId,
  }),
  //check your subscription on user
  setFollowingProgress:(
    followingProgress: boolean
  ) => (<const>{
    type: 'FOLLOWING_PROGRESS',
    followingProgress,
  }),
  //Save your photos in profilePage
  savePhotoSuccess:(photos: string) => (<const>{
    type: 'SAVE_PHOTO_SUCCESS',
    photos,
  }),
  //Checking your received a response from the server
  toggleIsFetching:(isFeching: boolean) => (<const>{
    type: 'TOGGLE_IS_FETCHING',
    isFeching,
  }),
  //Set data file User profile
  setUserProfile:(profile: any) => (<const>{
    type: 'SET_USER_PROFILE',
    profile,
  }),
  successFollow:(userId: number) => (<const>{
    type: 'FOLLOW_USER',
  }),
  successUnfollow:(
    userId: number | null
  ) => (<const>{
    type: 'UNFOLLOW_USER',
    userId,
  }),
}

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

export const AddPost = (NewPostProfile: any) => {
  return  (dispatch: DispatchType, getState: () => AppStateType) => {
    dispatch(profileActions.AddPost(NewPostProfile));
  }
}

export const setUserProfile = (profile: any) => {
  return  (dispatch: DispatchType, getState: () => AppStateType) => {
    dispatch(profileActions.setUserProfile(profile));
  }
}

export const getProfileData = (userId: number | null): ThunkType => {
  return async (dispatch: DispatchType, getState: getStateType) => {
    dispatch(profileActions.toggleIsFetching(true));
    let data = await userStatus.getUsersInfo(userId);
    dispatch(profileActions.toggleIsFetching(false));
    dispatch(profileActions.setUserProfile(data));
  };
};

//Check user's subscription information
export const getUserFollowStatus = (userId: number): ThunkType => {
  return async (
    dispatch: Dispatch<ActionType>,
    getState: () => AppStateType
  ) => {
    let Response = await userAPI.getFollowingUser(userId);
    dispatch(profileActions.setFollowingProgress(Response.data));
  };
};

export const followUnffolwThunk = async (
  dispatch: DispatchType,
  userId: number,
  APImethod: any,
  actionCreator: (userId:number)=> ActionType 
) => {
  dispatch(profileActions.toggleIsFollowingProgress(true, userId));
  let Response = await APImethod(userId);
  if (Response.data.resultCode === CodeEnum.Success) {
    dispatch(actionCreator(userId));
  }
  dispatch(profileActions.toggleIsFollowingProgress(false, userId));
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
      profileActions.successUnfollow
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
      profileActions.successFollow
    );
  };
};

//Get data file status certain user(your status)
export const getUserStatus = (userId: number): ThunkType => {
  return async (dispatch: DispatchType, getState: getStateType) => {
    let data = await userStatus.getStatus(userId);
    dispatch(profileActions.setUserStatus(data));
  };
};

//Set profile picture (put request)
export const savePhoto = (photos: string): ThunkType => {
  return async (dispatch: DispatchType, getState: () => AppStateType) => {
    let Response = await userStatus.savePhoto(photos);
    if (Response.data.resultCode === CodeEnum.Success) {
      dispatch(profileActions.savePhotoSuccess(Response.data.data.photos));
    }
  };
};

//Set new information in your profile info, when you click button in Form
export const saveProfile = (profile: any): ThunkType => {
  return async (dispatch: DispatchType, getState: () => AppStateType) => {
    const id = getState().auth.id;
    let Response = await userStatus.saveProfile(profile);
    if (Response.data.resultCode === CodeEnum.Success) {
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
    if (data.resultCode === CodeEnum.Success) {
      dispatch(profileActions.setUserStatus(status));
    }
  };
};

export default profileReducer;

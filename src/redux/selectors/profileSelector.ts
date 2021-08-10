import { AppStateType } from "../reduxStore";

export const getProfileSelector = (state:AppStateType) => {
  return state.profilePage;
};
export const getProfile = (state:AppStateType) => {
  return state.profilePage.profile;
};
export const getStatus = (state:AppStateType) => {
  return state.profilePage.status;
};
export const getPostData = (state:AppStateType) => {
  return state.profilePage.postData;
};
export const getUserIdAuth = (state:AppStateType) => {
  return state.auth.id;
};
export const getFollowingProgress = (state:AppStateType) => {
  return state.profilePage.followingProgress;
};
export const getFollowingInProgress = (state:AppStateType) => {
  return state.profilePage.followingInProgress;
};
export const getisAuth = (state:AppStateType) => {
  return state.auth.isAuth;
};
export const getIsFetching = (state:AppStateType) => {
  return state.profilePage.isFeching;
};

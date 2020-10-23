export const getProfileSelector = (state) => {
  return state.profilePage;
};
export const getProfile = (state) => {
  return state.profilePage.profile;
};
export const getStatus = (state) => {
  return state.profilePage.status;
};
export const getPostData = (state) => {
  return state.profilePage.postData;
};
export const getUserIdAuth = (state) => {
  return state.auth.id;
};
export const getFollowingProgress = (state) => {
  return state.profilePage.followingProgress;
};
export const getFollowingInProgress = (state) => {
  return state.profilePage.followingInProgress;
};
export const getisAuth = (state) => {
  return state.auth.isAuth;
};
export const getIsFetching = (state) => {
  return state.profilePage.isFeching;
};

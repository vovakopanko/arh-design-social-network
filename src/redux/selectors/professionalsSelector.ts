import { AppStateType } from "../reduxStore";

export const getProfessionalsSelector = (state:AppStateType) => {
  return state.professionalsPage.professionals;
};
export const getPageSize = (state:AppStateType) => {
  return state.professionalsPage.pageSize;
};
export const getPortionSize = (state:AppStateType) => {
  return state.professionalsPage.portionSize;
};
export const getTotalUsersCount= (state:AppStateType) => {
  return state.professionalsPage.totalUsersCount;
};
export const getCurrentPage = (state:AppStateType) => {
  return state.professionalsPage.currentPage;
};
export const getIsFeching = (state:AppStateType) => {
  return state.professionalsPage.isFeching;
};
export const getFollowingInProgress = (state:AppStateType) => {
  return state.professionalsPage.followingInProgress;
};
export const getisAuth = (state:AppStateType) => {
  return state.auth.isAuth;
};
export const getCurrentPortion = (state:AppStateType) => {
  return state.professionalsPage.currentPortion;
};

import { Dispatch } from 'react';
import { ThunkAction } from 'redux-thunk';
import { dialogsAPI } from "../api/DialogsAPI";
import { ResultCodeEnum } from '../api/UsersAPI';
import { AppStateType } from './reduxStore';

const GET_MESSAGE = "redux/messageReducer/GET_MESSAGE";
const GET_MESSAGE_USER = "redux/messageReducer/GET_MESSAGE_USER";
const GET_TAP = "redux/messageReducer/GET_TAP";
const GET_CURRENT_USER = "redux/messageReducer/GET_CURRENT_USER";
const SET_UNREAD_MESSAGE = "redux/professionalsReducer/SET_UNREAD_MESSAGE";
const GET_NAME_OPPOSITE = "redux/professionalsReducer/GET_NAME_OPPOSITE";
const TOGGLE_IS_FETCHING = "redux/professionalsReducer/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FETCHING_FOR_DIALOG =
  "redux/professionalsReducer/TOGGLE_IS_FETCHING_FOR_DIALOG";

let initialState = {
  message: [],
  messageData: [],
  tap: null as boolean | null,
  currentUserId: null as number | null,
  unreadmessages: [],
  portionSize: 5,
  userName: null as string | null,
  isFeching: false,
  isFechingForDialogs: false,
};

type initialStateType = typeof initialState;

const messageReducer = (
  state = initialState,
  action: ActionType
): initialStateType => {
  switch (action.type) {
    case GET_TAP:
      return {
        ...state,
        tap: action.tap,
      };
    case GET_MESSAGE:
      return {
        ...state,
        message: action.message,
      };
    case GET_MESSAGE_USER:
      return {
        ...state,
        messageData: action.messageData,
      };
    case GET_CURRENT_USER:
      return {
        ...state,
        currentUserId: action.userId,
      };
    case SET_UNREAD_MESSAGE:
      return {
        ...state,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFeching: action.isFeching,
      };
    case GET_NAME_OPPOSITE:
      return {
        ...state,
        userName: action.userName,
      };
    case TOGGLE_IS_FETCHING_FOR_DIALOG:
      return {
        ...state,
        isFechingForDialogs: action.isFechingForDialogs,
      };
    default:
      return state;
  }
};

// [ActionCreator]

type ActionType =
  | getAllMessageType
  | getMessagesUserType
  | toggleIsFetchingType
  | toggleIsFetchingForDialogsType
  | setNameUserDialogueOppositeType
  | setUnreadMessageType
  | openMEssageTYpe
  | getCurrentIdUser;
//Get all messages with user, which you chose

export const getAllMessage = (message: any): getAllMessageType => {
  return {
    type: GET_MESSAGE,
    message,
  };
};
//Get array users with which you have dialog
export const getMessagesUser = (messageData: any): getMessagesUserType => {
  return {
    type: GET_MESSAGE_USER,
    messageData,
  };
};
//Show boot file in the absence of data
export const toggleIsFetching = (isFeching: boolean): toggleIsFetchingType => ({
  type: TOGGLE_IS_FETCHING,
  isFeching,
});
//Show boot file in the absence of data
export const toggleIsFetchingForDialogs = (
  isFechingForDialogs: boolean
): toggleIsFetchingForDialogsType => ({
  type: TOGGLE_IS_FETCHING_FOR_DIALOG,
  isFechingForDialogs,
});
// Get array users with new messages
export const setUnreadMessage = (
  unreadmessages: any
): setUnreadMessageType => ({
  type: SET_UNREAD_MESSAGE,
  unreadmessages,
});
// Open ReduxForm for send messages, if you click user, which you want started dialog
export const openMEssage = (tap: boolean): openMEssageTYpe => {
  return {
    type: GET_TAP,
    tap,
  };
};
// Get current ID User
export const getCurrentIdUser = (userId: number | null) => {
  return {
    type: GET_CURRENT_USER,
    userId, 
  };
};
// Get Opposite Name User with whom do you communicate
export const setNameUserDialogueOpposite = (
  userName: string | null
): setNameUserDialogueOppositeType => {
  return {
    type: GET_NAME_OPPOSITE,
    userName,
  };
};

// [ActionCreatorType]
type getMessagesUserType = {
  type: typeof GET_MESSAGE_USER;
  messageData: any;
};
type toggleIsFetchingType = {
  type: typeof TOGGLE_IS_FETCHING;
  isFeching: boolean;
};
type toggleIsFetchingForDialogsType = {
  type: typeof TOGGLE_IS_FETCHING_FOR_DIALOG;
  isFechingForDialogs: boolean;
};
type setUnreadMessageType = {
  type: typeof SET_UNREAD_MESSAGE;
  unreadmessages: any;
};
type openMEssageTYpe = {
  type: typeof GET_TAP;
  tap: boolean;
};
type getCurrentIdUser = {
  type: typeof GET_CURRENT_USER;
  userId: number;
};
type setNameUserDialogueOppositeType = {
  type: typeof GET_NAME_OPPOSITE;
  userName: string | null;
};
type getAllMessageType = {
  type: typeof GET_MESSAGE;
  message: any;
};
//ThunkActionCreator
type DispatchType = Dispatch<ActionType>;
type getStateType = () => AppStateType;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>;
// Get All messages with all users
export const getMessageWithAllUser = ():ThunkType => {
  return async (dispatch: DispatchType, getState:getStateType) => {
    dispatch(toggleIsFetching(true));
    let getAllMessages = await dialogsAPI.getAllDialogsList();
    dispatch(toggleIsFetching(false));
    dispatch(getAllMessage(getAllMessages));
  };
};

//Get message from user opposite, and him Id so that send messages in ReduxForm
export const getMessageWhithUser = (
  userId: number | null,
  tap: boolean,
  userName: string | null
):ThunkType => {
  return async (dispatch: any, getState:getStateType) => {
    dispatch(toggleIsFetchingForDialogs(true));
    let getMessagesWithUser = await dialogsAPI.getUserDialogList(userId);
    dispatch(getMessagesUser(getMessagesWithUser.items));
    dispatch(getCurrentIdUser(userId));
    dispatch(toggleIsFetchingForDialogs(false));
    dispatch(openMEssage(tap));
    dispatch(setNameUserDialogueOpposite(userName));
  };
};

// delete message Your or Opposite User, from dialogues
export const deleteMessageWhithUser = (
  messageId: number,
  userId: number,
  userName: string
):ThunkType => {
  return async (dispatch: any, getState: getStateType) => {
    let Response = await dialogsAPI.deleteDialogsList(messageId);
    if (Response.resultCode === ResultCodeEnum.Success) {
      dispatch(getMessageWhithUser(userId, true, userName));
    }
  };
};

// Start Dialog with opposite User
export const startDialog = (userId: number, tap: boolean, userName: string):ThunkType => {
  return async (dispatch: any) => {
    let Response = await dialogsAPI.putDialogWithUser(userId);
    if (Response.resultCode === ResultCodeEnum.Success) {
      dispatch(getMessageWhithUser(userId, true, userName));
      dispatch(getMessageWhithUser(userId, tap, userName));
      dispatch(getMessageWithAllUser());
    }
  };
};

// Send message user
export const postMessageForUser = (userId: number, body: any):ThunkType => {
  return async (dispatch: any) => {
    let Response = await dialogsAPI.postMessage(userId, body);
    if (Response.resultCode === ResultCodeEnum.Success) {
      dispatch(getMessageWhithUser(userId, true, null));
    }
  };
};

//List with all new messages
export const GetListWhithNewMessage = ():ThunkType => {
  return async (dispatch: DispatchType) => {
    let Response = await dialogsAPI.GetListNewMessage();
    if (Response.data > 0) {
    }
  };
};

export default messageReducer;

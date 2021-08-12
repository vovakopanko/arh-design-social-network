import { Dispatch } from 'react';
import { ThunkAction } from 'redux-thunk';
import { dialogsAPI } from "../api/DialogsAPI";
import { ResultCodeEnum } from '../api/UsersAPI';
import { AppStateType, InfernActionsType } from './reduxStore';

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
    case 'GET_TAP':
      return {
        ...state,
        tap: action.tap,
      };
    case 'GET_MESSAGE':
      return {
        ...state,
        message: action.message,
      };
    case 'GET_MESSAGE_USER':
      return {
        ...state,
        messageData: action.messageData,
      };
    case 'GET_CURRENT_USER':
      return {
        ...state,
        currentUserId: action.userId,
      };
    case 'SET_UNREAD_MESSAGE':
      return {
        ...state,
      };
    case 'TOGGLE_IS_FETCHING':
      return {
        ...state,
        isFeching: action.isFeching,
      };
    case 'GET_NAME_OPPOSITE':
      return {
        ...state,
        userName: action.userName,
      };
    case 'TOGGLE_IS_FETCHING_FOR_DIALOG':
      return {
        ...state,
        isFechingForDialogs: action.isFechingForDialogs,
      };
    default:
      return state;
  }
};

// [ActionCreator]

type ActionType = InfernActionsType<typeof messageActions>;
//Get all messages with user, which you chose

const messageActions = {
  getAllMessage: (message: any) => (<const>{
      type: 'GET_MESSAGE',
      message,
  }),
  //Get array users with which you have dialog
  getMessagesUser: (messageData: any) => (<const>{
      type: 'GET_MESSAGE_USER',
      messageData,
  }),
  //Show boot file in the absence of data
  toggleIsFetching: (isFeching: boolean) => (<const>{
    type: 'TOGGLE_IS_FETCHING',
    isFeching,
  }),
  //Show boot file in the absence of data
  toggleIsFetchingForDialogs: (
    isFechingForDialogs: boolean
  ) => (<const>{
    type: 'TOGGLE_IS_FETCHING_FOR_DIALOG',
    isFechingForDialogs,
  }),
  // Get array users with new messages
  setUnreadMessage: (
    unreadmessages: any
  ) => (<const>{
    type: 'SET_UNREAD_MESSAGE',
    unreadmessages,
  }),
  // Open ReduxForm for send messages, if you click user, which you want started dialog
  openMEssage: (tap: boolean) => (<const>{
      type: 'GET_TAP',
      tap,
  }),
  // Get current ID User
  getCurrentIdUser: (userId: number | null) => (<const>{
      type: 'GET_CURRENT_USER',
      userId, 
  }),
  // Get Opposite Name User with whom do you communicate
  setNameUserDialogueOpposite: (
    userName: string | null
  ) => (<const>{
      type: 'GET_NAME_OPPOSITE',
      userName,
  }),
}

// [ActionCreatorType]

//ThunkActionCreator
type DispatchType = Dispatch<ActionType>;
type getStateType = () => AppStateType;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>;
// Get All messages with all users

export const getCurrentIdUser = (userId: number | null) => {
  return (dispatch: DispatchType, getState:getStateType)=>{
    dispatch(messageActions.getCurrentIdUser(userId))
  }
}

export const setUnreadMessage = (unreadmessages: any) => {
  return  (dispatch: DispatchType, getState: () => AppStateType) => {
    dispatch(messageActions.setUnreadMessage(unreadmessages));
  }
}

export const getMessageWithAllUser = ():ThunkType => {
  return async (dispatch: DispatchType, getState:getStateType) => {
    dispatch(messageActions.toggleIsFetching(true));
    let getAllMessages = await dialogsAPI.getAllDialogsList();
    dispatch(messageActions.toggleIsFetching(false));
    dispatch(messageActions.getAllMessage(getAllMessages));
  };
};

//Get message from user opposite, and him Id so that send messages in ReduxForm
export const getMessageWhithUser = (
  userId: number | null,
  tap: boolean,
  userName: string | null
):ThunkType => {
  return async (dispatch: any, getState:getStateType) => {
    dispatch(messageActions.toggleIsFetchingForDialogs(true));
    let getMessagesWithUser = await dialogsAPI.getUserDialogList(userId);
    dispatch(messageActions.getMessagesUser(getMessagesWithUser.items));
    dispatch(messageActions.getCurrentIdUser(userId));
    dispatch(messageActions.toggleIsFetchingForDialogs(false));
    dispatch(messageActions.openMEssage(tap));
    dispatch(messageActions.setNameUserDialogueOpposite(userName));
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

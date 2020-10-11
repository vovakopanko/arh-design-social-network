import { dialogsAPI } from "../api/DialogsAPI";


const GET_MESSAGE = "redux/messageReducer/GET_MESSAGE";
const GET_MESSAGE_USER = "redux/messageReducer/GET_MESSAGE_USER";
const GET_TAP = "redux/messageReducer/GET_TAP";
const GET_CURRENT_USER = "redux/messageReducer/GET_CURRENT_USER";
const SET_UNREAD_MESSAGE = "redux/professionalsReducer/SET_UNREAD_MESSAGE";
const GET_NAME_OPPOSITE = "redux/professionalsReducer/GET_NAME_OPPOSITE";
const TOGGLE_IS_FETCHING = "redux/professionalsReducer/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FETCHING_FOR_DIALOG = "redux/professionalsReducer/TOGGLE_IS_FETCHING_FOR_DIALOG";

let initialState = {
  message: [],
  messageData: [],
  tap: null,
  currentUserId: null,
  unreadmessages: [],
  portionSize: 5,
  userName: null,
  isFeching: false,
  isFechingForDialogs: false,
};

const messageReducer = (state = initialState, action) => {
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
          isFechingForDialogs: action.isFechingForDialogs

        }
    default:
      return state;
  }
};

// [ActionCreator]

//Get all messages with user, which you chose
export const getAllMessage = (message) => {
  return {
    type: GET_MESSAGE,
    message,
  };
};

//Get array users with which you have dialog
export const getMessagesUser = (messageData) => {
  return {
    type: GET_MESSAGE_USER,
    messageData,
  };
};

//Show boot file in the absence of data
export const toggleIsFetching = (isFeching) => ({
  type: TOGGLE_IS_FETCHING,
  isFeching,
});

//Show boot file in the absence of data
export const toggleIsFetchingForDialogs = (isFechingForDialogs) => ({
  type: TOGGLE_IS_FETCHING_FOR_DIALOG,
  isFechingForDialogs,
});

// Get array users with new messages
export const setUnreadMessage = (unreadmessages) => ({
  type: SET_UNREAD_MESSAGE,
  unreadmessages,
});

// Open ReduxForm for send messages, if you click user, which you want started dialog
export const openMEssage = (tap) => {
  return {
    type: GET_TAP,
    tap,
  };
};

// Get current ID User
export const getCurrentIdUser = (userId) => {
  return {
    type: GET_CURRENT_USER,
    userId,
  };
};

// Get Opposite Name User with whom do you communicate
export const setNameUserDialogueOpposite = (userName) => {
  return {
    type: GET_NAME_OPPOSITE,
    userName,
  };
};

//ThunkActionCreator

// Get All messages with all users
export const getMessageWithAllUser = () => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let Response = await dialogsAPI.getAllDialogsList();
    dispatch(toggleIsFetching(false));
    dispatch(getAllMessage(Response.data));
  };
};

//Get message from user opposite, and him Id so that send messages in ReduxForm
export const getMessageWhithUser = (userId, tap, userName) => {
  return async (dispatch) => {
    dispatch(toggleIsFetchingForDialogs(true));
    let Response = await dialogsAPI.getUserDialogList(userId);
    dispatch(getMessagesUser(Response.data.items));
    dispatch(getCurrentIdUser(userId));
    dispatch(toggleIsFetchingForDialogs(false));
    dispatch(openMEssage(tap));
    dispatch(setNameUserDialogueOpposite(userName));
  };
};

// delete message Your or Opposite User, from dialogues
export const deleteMessageWhithUser = (messageId, userId) => {
  return async (dispatch) => {
    let Response = await dialogsAPI.deleteDialogsList(messageId);
    if (Response.data.resultCode === 0) {
      dispatch(getMessageWhithUser(userId, true));
    }
  };
};

// Start Dialog with opposite User
export const startDialog = (userId) => {
  return async (dispatch) => {
    let Response = await dialogsAPI.putDialogWithUser(userId);
    if (Response.data.resultCode === 0) {
      dispatch(getMessageWhithUser(userId, true));
    }
  };
};

// Send message user
export const postMessageForUser = (userId, body) => {
  return async (dispatch) => {
    let Response = await dialogsAPI.postMessage(userId, body);
    if (Response.data.resultCode === 0) {
      dispatch(getMessageWithAllUser());
      dispatch(getMessageWhithUser(userId, true));
    }
  };
};

//List with all new messages
export const GetListWhithNewMessage = () => {
  return async (dispatch) => {
    let Response = await dialogsAPI.GetListNewMessage();
    if (Response.data > 0) {
    }
  };
};

export default messageReducer;

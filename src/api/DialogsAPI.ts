import { ResultCodeEnum } from "./UsersAPI";
import { instance } from "./Instance";

// [Dialogs]

type ItemsType = {
  id: number;
  body: string;
  recipientId: number;
  senderId: number;
  senderName: string;
  viewed: boolean;
};

type DialogsRequestType = {
  message: Array<string>;
  items: Array<ItemsType>;
  resultCode: number;
};

type DeleteDialogListType = {
  data: {
    messageId: number;
  };
  resultCode: ResultCodeEnum;
  messages: Array<string>;
};

type DialosDataType = {
  id: number;
  userName: string;
  hasNewMessages: boolean;
  lastDialogActivityDate: string;
  lastUserActivityDate: string;
  newMessagesCount: number;
  photos: {
    small: string;
    large: string;
  };
};

type GetAllDialogsListType = {
  data: Array<DialosDataType>;
};

type postMessageType = {
id: string
body: string
translatedBody: null | string,
addedAt: string
senderId: number
senderName: string
recipientId: number
viewed: boolean
}

type postsMessageType = {
data:  Array<postMessageType>
fieldsErrors: Array<string>
messages: Array<string>
resultCode: ResultCodeEnum
};

export const dialogsAPI = {
  // Get all messages whith current user
  getUserDialogList(userId: number | null) {
    return instance
      .get<DialogsRequestType>(`dialogs/${userId}/messages`)
      .then((Response) => Response.data);
  },
  // Get all message with all users
  getAllDialogsList() {
    return instance
      .get<GetAllDialogsListType>(`dialogs`)
      .then((Response) => Response.data);
  },
  // Sending message to the user
  postMessage(userId: number, body: string) {
    return instance
      .post<postsMessageType>(`dialogs/${userId}/messages`, { body })
      .then((Response) => Response.data);
  },
  //Delete message in your profile
  deleteDialogsList(messageId: number) {
    return instance
      .delete<DeleteDialogListType>(`dialogs/messages/${messageId}`)
      .then((Response) => Response.data);
  },
  //Starting dialogue with user
  putDialogWithUser(userId: number) {
    return instance.put(`dialogs/${userId}`).then((Response) => Response.data);
  },
  //Open list with new message or unread messages
  GetListNewMessage() {
    return instance.get(`dialogs/messages/new/count`);
  },
};

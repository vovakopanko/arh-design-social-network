import { instance } from "./Instance";

// [Dialogs]

type ItemsType = {
  id: number;
  body: string;
  recipientId:number;
  senderId:number;
  senderName:string;
  viewed: boolean;
};

type DialogsRequestType = {
  message: Array<string>;
  items: Array<ItemsType>;
  resultCode: number;
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
      .get(`dialogs`)
      .then((Response) => Response.data);
  },
  // Sending message to the user
  postMessage(userId: number, body: string) {
    return instance.post(`dialogs/${userId}/messages`, { body });
  },
  //Delete message in your profile
  deleteDialogsList(messageId: number) {
    return instance.delete(`dialogs/messages/${messageId}`);
  },
  //Starting dialogue with user
  putDialogWithUser(userId: number) {
    return instance.put(`dialogs/${userId}`);
  },
  //Open list with new message or unread messages
  GetListNewMessage() {
    return instance.get(`dialogs/messages/new/count`);
  },
};

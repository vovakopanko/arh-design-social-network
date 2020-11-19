import {instance} from './Instance';

// [Dialogs]

export const dialogsAPI = {
    // Get all messages whith current user
    getUserDialogList(userId: number | null) {
      return instance.get(`dialogs/${userId}/messages`);
    },
    // Get all message with all users
    getAllDialogsList() {
      return instance.get(`dialogs`);
    },
    // Sending message to the user
    postMessage(userId:number, body:any) {
      return instance.post(`dialogs/${userId}/messages`, { body });
    },
    //Delete message in your profile
    deleteDialogsList(messageId:number) {
      return instance.delete(`dialogs/messages/${messageId}`);
    },
    //Starting dialogue with user
    putDialogWithUser(userId:number) {
      return instance.put(`dialogs/${userId}`);
    },
    //Open list with new message or unread messages
    GetListNewMessage() {
      return instance.get(`dialogs/messages/new/count`);
    },
  };
import * as Axios from "axios";
// [General example for API requests]

const instance = Axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "0e194043-11ab-491d-8f4c-e28dc7a53059",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

// [Post , Delete messages for other users]

export const subscribeAPI = {
  deleteSubscribe(userId = 2) {
    return instance.delete(`follow/${userId}`);
  },
  postSubscribe(userId = 2) {
    return instance.post(`follow/${userId}`);
  },
};

// [Receiving profile professionals]

export const userAPI = {
  // Пet verified for the main user
  getAuthMe() {
    return instance.get("auth/me").then((Response) => Response.data);
  },
  // Get list with 15 professionals of all users, who is registered in the application
  getUsers(currentPage = 1, pageSize = 15) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((Response) => Response.data);
  },
  // Get information about a user's subscription to other users
  getFollowingUser(userId) {
    return instance.get(`follow/${userId}`);
  },
};

// [ProfessionalsInformation]

export const userStatus = {
  // Get information about the main user
  getUsersInfo(userId) {
    return instance.get(`profile/` + userId).then((Response) => Response.data);
  },
  // Get last status main user in system
  getStatus(userId) {
    return instance
      .get(`profile/status/` + userId)
      .then((Response) => Response.data);
  },
  // Update status main user
  updateStatus(status) {
    return instance
      .put(`profile/status`, { status: status })
      .then((Response) => Response.data);
    return Response.data;
  },
  // Save photos in profile main user
  savePhoto(photoFile) {
    debugger;
    const formData = new FormData();
    formData.append("image", photoFile);

    return instance.put("profile/photo", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  //Save changes information in profile main user
  saveProfile(profile) {
    return instance.put("profile", profile);
  },
};

// [Authentication]

export const AuthProfileAPI = {
  loginProfile(email, password, rememberMe, captcha) {
    return instance.post(`auth/login`, {
      email,
      password,
      rememberMe,
      captcha,
    });
  },
  logoutProfile() {
    return instance.delete(`auth/login`).then((Response) => Response.data);
  },
};

// [Add Captcha if you send 3 incorrect entries]

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  },
};

// [Dialogs]

export const dialogsAPI = {
  // Get all messages whith current user
  getUserDialogList(userId) {
    return instance.get(`dialogs/${userId}/messages`);
  },
  // Get all message with all users
  getAllDialogsList() {
    return instance.get(`dialogs`);
  },
  // Sending message to the user
  postMessage(userId, body) {
    return instance.post(`dialogs/${userId}/messages`, { body });
  },
  //Delete message in your profile
  deleteDialogsList(messageId) {
    return instance.delete(`dialogs/messages/${messageId}`);
  },
  //Starting dialogue with user
  putDialogWithUser(userId) {
    return instance.put(`dialogs/${userId}`);
  },
  //Open list with new message or unread messages
  GetListNewMessage() {
    return instance.get(`dialogs/messages/new/count`);
  },
};

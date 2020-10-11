import { instance } from "./Instance";

// [Receiving profile professionals]

export const userAPI = {
  // Пet verified for the main user
  getAuthMe() {
    return instance.get("auth/me")
    .then((Response) => Response.data);
  },
  // Get list with 15 professionals of all users, who is registered in the application
  getUsers(currentPage = 1, pageSize = 15,searchName) {
    return instance
    .get(`users?`
            + (searchName ? `term=${searchName}&` : '')
            + (pageSize ? `count=${pageSize}&` : '')
            + (currentPage ? `page=${currentPage}` : '')
        )
      // .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((Response) => Response.data);
  },
  getSearchName(searchName) {
    return instance
      .get(`users?/${searchName}`)
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

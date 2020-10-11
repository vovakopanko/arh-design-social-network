import {instance} from './Instance';

// [Post , Delete messages for other users]

export const subscribeAPI = {
  deleteSubscribe(userId) {
    return instance.delete(`follow/${userId}`);
  },
  postSubscribe(userId) {
    return instance.post(`follow/${userId}`);
  },
};


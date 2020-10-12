import {instance} from './Instance';


export const subscribeAPI = {
  deleteSubscribe(userId) {
    return instance.delete(`follow/${userId}`);
  },
  postSubscribe(userId) {
    return instance.post(`follow/${userId}`);
  },
};


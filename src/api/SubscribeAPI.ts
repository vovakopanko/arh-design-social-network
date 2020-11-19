import {instance} from './Instance';


export const subscribeAPI = {
  deleteSubscribe(userId: number | null) {
    return instance.delete(`follow/${userId}`);
  },
  postSubscribe(userId: number | null) {
    return instance.post(`follow/${userId}`);
  },
};


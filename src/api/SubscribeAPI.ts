import {instance} from './Instance';

type SendRequestMessageType = {
  resultCode: ResultCodeEnum
  messages: Array<string>,
  data: {}
}

type RequestSeleteMessageType = {
  resultCode: ResultCodeEnum
  messages: Array<string>,
  data: {}
}

enum ResultCodeEnum {
  Error = 1,
  Success = 0,
}

export const subscribeAPI = {
  deleteSubscribe(userId: number | null) {
    return instance.delete<RequestSeleteMessageType>(`follow/${userId}`);
  },
  postSubscribe(userId: number | null) {
    return instance.post<SendRequestMessageType>(`follow/${userId}`);
  },
};


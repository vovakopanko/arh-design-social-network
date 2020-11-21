import { instance } from "./Instance";

type ItemsType = {
  name: string;
  id: number;
  uniqueUrlName: string | null;
  photos: {
    small: string;
    large: null;
  };
  followed: boolean;
};

type FriendsRequestType = {
  items: Array<ItemsType>;
  totalCount: number;
  error: string | null;
};

export const friendsApi = {
  getFriends() {
    return instance
      .get<FriendsRequestType>(`users?friend=${true}`)
      .then((response) => response.data.items);
  },
};

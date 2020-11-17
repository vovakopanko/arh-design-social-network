import React from "react";
import style from "./Friends.module.css";
import Preloader from "../common/Preloader/Preloader";
import FriendsItem from "./FriendsItem/FriendsItem";

type photosFriendType = {
  small: string | null;
  large: string | null;
};

type friendType = {
  followed: boolean;
  id: number;
  name: string;
  photos: Array<photosFriendType>;
  status: string | null;
};

type FriendsType = {
  friends: Array<friendType>;
  openDialogs: (id:number,name:string) => void;
  unFollowFriend: (id:number) => void;
  loadingFriends: boolean;
};

export const Friends: React.FC<FriendsType> = ({
  friends,
  openDialogs,
  unFollowFriend,
  loadingFriends,
}) => {
  const friendsElement = friends.map((f) => {
    return (
      <FriendsItem
        key={f.id}
        friend={f}
        openDialogs={openDialogs}
        unFollowFriend={unFollowFriend}
      />
    );
  });

  return (
    <div className={style.friends}>
      <div className={style.friends__block}>
        <div className={style.block__title + " " + style.block__title_border}>
          Friends:
        </div>
        {loadingFriends ? (
          <Preloader />
        ) : (
          <div className={style.block_item}>{friendsElement}</div>
        )}
      </div>
    </div>
  );
};

import React from "react";
import style from "./Friends.module.css";
import Preloader from "./../common/Preloader/Preloader";
import FriendsItem from "./FriendsItem/FriendsItem";

export const Friends = ({
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
      <div className={style.block__title + " " + style.block__title_border}>Friends:</div>
        <div className={style.block__items}>
          {loadingFriends ? (
            <Preloader />
          ) : (
            <div className={style.block_item}>{friendsElement}</div>
          )}
        </div>
      </div>
    </div>
  );
};

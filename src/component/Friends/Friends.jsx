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
        <div className={style.main}>
          <div className={style.friends__title + " " + style.friends__title_border}>Friends:</div>
          {loadingFriends ? (
            <Preloader className={style.Preloader} />
          ) : (
            <div className={style.friends__friend}>{friendsElement}</div>
          )}
        </div>
      </div>
    </div>
  );
};

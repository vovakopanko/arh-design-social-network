import React from "react";
import style from "./Friend.module.css";
import ava from "../../../assets/images/user.png";
import { NavLink } from "react-router-dom";

const FriendsItem = ({ friend, openDialogs, unFollowFriend }) => {
  const path = "/profile/" + friend.id;

  return (
    <div className={style.block__item}>
      <NavLink to={path} activeClassName={style.activeLink}>
        <img
          alt=""
          src={friend.photos.small != null ? friend.photos.small : ava}
        />
        <div>{friend.name}</div>
      </NavLink>
      <NavLink to="/message">
        <button
          className={style.item__buttonMessage}
          onClick={() => {
            openDialogs(friend.id, friend.name);
          }}
        >
          Messages
        </button>
      </NavLink>
      <button
        className={style.item__unsubscribe}
        onClick={() => {
          unFollowFriend(friend.id);
        }}
      >
        Unfollow
      </button>
    </div>
  );
};

export default FriendsItem;

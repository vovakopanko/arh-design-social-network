import React from "react";
import style from "./Professionals.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";

const Professional = ({user,followingInProgress,follow,unfollow,isAuth,startDialog, ...props}) => {
  return (
      <div className={style.professionalphoto}>
        <span className={style.iconUser}>
          <div>
            <NavLink to={"/profile/" + user.id}>
              <img
                className={style.professionalphoto}
                src={user.photos.large != null ? user.photos.large : userPhoto}
                alt="professionalPhotos"
              ></img>
            </NavLink>
          </div>
          <div><b>{user.name}</b></div>
          <div>ID : {user.id}</div>
          <div>
            {user.followed ? (
              <button
                disabled={
                  followingInProgress.some((id) => id === user.id) ||
                  isAuth
                }
                onClick={() => {
                  follow(user.id);
                }}
              >
                UnFollow
              </button>
            ) : (
              <button
                disabled={
                  followingInProgress.some((id) => id === user.id) ||
                  isAuth
                }
                onClick={() => {
                  unfollow(user.id);
                }}
              >
                Follow
              </button>
            )}
            <NavLink to="/message" onClick={()=>{startDialog(user.id)}}>
              <button>Написать</button>
            </NavLink>
          </div>
        </span>
        <span>
          <div>
            <div>{user.aboutMe}</div>
          </div>
        </span>
      </div>
  );
};

export default Professional;

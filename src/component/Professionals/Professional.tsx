import React from "react";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import style from "./Professionals.module.css";

type userType ={
  id: number
  photos: any
  name: string
  followed: boolean
  aboutMe: string
}

type PropsType = {
  user: userType
  some: (id:number) => void
  followingInProgress: Array<any>
  follow:(id:number)=>void
  unfollow:(id:number)=>void
  isAuth:boolean,
  startDialog:(id:number,tap:boolean, name:string)=>void,
}

const Professional: React.FC<PropsType> = ({
  user,
  followingInProgress,
  follow,
  unfollow,
  isAuth,
  startDialog,
  ...props
}) => {
  return (
    <div className={style.professional}>
      <span>
        <div>
          <NavLink
            className={style.professional__photos}
            to={"/profile/" + user.id}
          >
            <img
              src={user.photos.large != null ? user.photos.large : userPhoto}
              alt="professionalPhotos"
            ></img>
          </NavLink>
        </div>
        <div>
          <b>{user.name}</b>
        </div>
        <div>ID : {user.id}</div>
        <div>
          {user.followed ? (
            <button
              className={style.professional__subscribe}
              disabled={
                followingInProgress.some((id) => id === user.id) || isAuth
              }
              onClick={() => {
                follow(user.id);
              }}
            >
              UnFollow
            </button>
          ) : (
            <button
              className={style.professional__subscribe}
              disabled={
                followingInProgress.some((id) => id === user.id) || isAuth
              }
              onClick={() => {
                unfollow(user.id);
              }}
            >
              Follow
            </button>
          )}
          <NavLink
            to="/message"
            onClick={() => {
              startDialog(user.id, true, user.name);
            }}
          >
            <button className={style.professional__buttonMessage}>
              Написать
            </button>
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

import React from "react";
import style from "./Profile.module.css";

type PostType = {
  photo: string;
  name: string;
  message: string;
  likesCount: number;
};

const Post: React.FC<PostType> = ({ photo, name, message, likesCount }) => {
  return (
    <div>
      <div className={style.wall__photo}>
        <img src={photo} alt="photouser" width="60px" height="60px"></img>
      </div>
      <div>
        <b>{name}:</b>
      </div>
      <div>{message} </div> LIKE : <span>{likesCount}</span>
    </div>
  );
};

export default Post;

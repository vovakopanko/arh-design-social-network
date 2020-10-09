import React from "react";
import style from './ContentProject.module.css'

const PhotoProject = ({url,alt,info}) => {
  return (
    <img className={style.photoproject}
      src={url}
      width="360px"
      height="300px"
      alt={alt}
      info={info}
    ></img>
  );
};

export default PhotoProject;

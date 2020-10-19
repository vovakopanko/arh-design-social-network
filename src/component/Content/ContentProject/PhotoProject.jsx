import React from "react";
import style from './ContentProject.module.css'

const PhotoProject = ({url,alt,info}) => {
  return (
    <img className={style.block__project_img}
      src={url}
      alt={alt}
      info={info}
    ></img>
  );
};

export default PhotoProject;

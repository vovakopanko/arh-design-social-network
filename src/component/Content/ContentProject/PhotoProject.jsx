import React from "react";
import style from './ContentProject.module.css'

const PhotoProject = (props) => {
  return (
    <img className={style.photoproject}
      src={props.url}
      width="360px"
      height="300px"
      alt={props.alt}
      info={props.info}
    ></img>
  );
};

export default PhotoProject;

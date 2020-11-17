import React from "react";
import style from "./ContentProject.module.css";

type PhotoProjectType = {
  url: string;
  alt: string;
  info: string;
};

const PhotoProject: React.FC<PhotoProjectType> = ({ url, alt, info }) => {
  return (
    <img className={style.block__project_img} 
    src={url} 
    alt={alt} 
    //@ts-ignore
    info={info} />
  );
};

export default PhotoProject;

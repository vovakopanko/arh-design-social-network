import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Project.module.css";

let Project = ({projectPage,...props}) => {
  return (
    
    <div>
      <div className={style.ourproject}>НАШИ ПРОЕКТЫ</div>
      <div className={style.listphoto}>
        <div className={style.firstrow}>
          {projectPage.map(im=><NavLink to={`/project/unit/${im.id}`} key={im.id}><img className={style.imageUnit} key={im.id} id={im.id} src={im.url} alt={im.alt}></img></NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;

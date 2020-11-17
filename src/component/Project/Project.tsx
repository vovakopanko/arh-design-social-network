import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Project.module.css";

type projectDataType = {
  id:number
  url:string
  alt:string
}

type ProjectType = {
  projectData: Array<projectDataType>
}

let Project: React.FC<ProjectType> = ({ projectData}) => {
  return (
    <div className={style.project__block}>
      <div className={style.block__title + " " + style.block__title_border}>
        НАШИ ПРОЕКТЫ
      </div>
      <div className={style.block__items}>
        {projectData.map((im) => (
          <NavLink to={`/project/unit/${im.id}`} key={im.id}>
            <img
              className={style.block__item + " " + style.block__item_img}
              key={im.id}
              src={im.url}
              alt={im.alt}
            ></img>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Project;

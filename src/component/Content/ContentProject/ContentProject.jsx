import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./ContentProject.module.css";
import PhotoProject from "./PhotoProject";

let ContentProject = ({
  photoProjectData,
  portionNumber,
  portionSize,
  buttonRight,
  buttonLeft,
}) => {
  let [currentPage, setSLotNumber] = useState(2);

  let leftPageNumber = (currentPage - 1) * portionSize + 1;
  let rightPageNumber = portionSize * currentPage;

  let photoProjectElement = photoProjectData.map((photos) => (
    <NavLink
      className={style.block__item_scale}
      to={`/project/unit/${photos.id}`}
      key={photos.id}
    >
      <PhotoProject
        className={style.block__item}
        url={photos.url}
        alt={photos.alt}
        info={photos.info}
      />
    </NavLink>
  ));

  return (
    <div className={style.block}>
      <span className={style.block__button_left + " " + style.block__button}>
        {currentPage > 1 ? (
          <span
            onClick={() => {
              setSLotNumber(currentPage - 1);
            }}
          >
            <img
              className={style.block__button_size}
              src={buttonLeft}
              alt="arrowLeft"
            ></img>
          </span>
        ) : (
          <span className={style.block__button_disabled}>
            <img
              className={style.block__button_size}
              src={buttonLeft}
              alt="arrowLeft"
            ></img>
          </span>
        )}
      </span>

      <span className={style.block__items}>
        {photoProjectElement.slice(leftPageNumber - 1, rightPageNumber)}
      </span>

      <span
        span
        className={style.block__button_right + " " + style.block__button}
      >
        {currentPage < portionNumber ? (
          <span
            onClick={() => {
              setSLotNumber(currentPage + 1);
            }}
          >
            <img
              className={style.block__button_size}
              src={buttonRight}
              alt="arrowRight"
            ></img>
          </span>
        ) : (
          <span className={style.block__button_disabled}>
            <img
              className={style.block__button_size}
              src={buttonRight}
              alt="arrowRight"
            ></img>
          </span>
        )}
      </span>
    </div>
  );
};

export default ContentProject;

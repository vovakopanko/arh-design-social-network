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
    <NavLink to={`/project/unit/${photos.id}`}>
      <PhotoProject url={photos.url} alt={photos.alt} info={photos.info} />
    </NavLink>
  ));

  return (
    <div className={style.photoproject}>
      <span>
        {currentPage > 1 ? (
          <span
            onClick={() => {
              setSLotNumber(currentPage - 1);
            }}
          >
            <img
              className={style.paginatorPicture}
              src={buttonLeft}
              alt="arrowLeft"
            ></img>
          </span>
        ) : (
          <span className={style.disabledActivated}>
            <img
              className={style.paginatorPicture}
              src={buttonLeft}
              alt="arrowLeft"
            ></img>
          </span>
        )}
      </span>

      {photoProjectElement.slice(leftPageNumber - 1, rightPageNumber)}

      <span>
        {currentPage < portionNumber ? (
          <span
            onClick={() => {
              setSLotNumber(currentPage + 1);
            }}
          >
            <img
              className={style.paginatorPicture}
              src={buttonRight}
              alt="arrowRight"
            ></img>
          </span>
        ) : (
          <span className={style.disabledActivated}>
            <img
              className={style.paginatorPicture}
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

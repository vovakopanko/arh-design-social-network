import React from "react";
import style from "./Content.module.css";
import ContentInfo from "./ContentInfo/ContentInfo";
import ContentProject from "./ContentProject/ContentProject";
import ContentService from "./ContentService/ContentService";
import ContentContact from "./ContentContact/ContentContact";

let Content = ({
  photoProjectData,
  portionSize,
  portionNumber,
  buttonRight,
  buttonLeft,
}) => {
  return (
    <div className={style.content}>
      <ContentInfo />
      <div className={style.infoLastProject}>
        <div className={style.title}>
          <span>ПОСЛЕДНИЕ ПРОЕКТЫ</span>
        </div>
        <ContentProject
          photoProjectData={photoProjectData}
          portionNumber={portionNumber}
          portionSize={portionSize}
          buttonLeft={buttonLeft}
          buttonRight={buttonRight}
        />
      </div>
      <div className={style.infoLastProject}>
        <div className={style.title}>
          <span>НАШИ УСЛУГИ</span>
        </div>
        <ContentService />
      </div>
      <div className={style.contact}>
        <div className={style.title}>
          <span>СВЯЗАТЬСЯ С НАМИ</span>
        </div>
        <ContentContact />
      </div>
    </div>
  );
};

export default Content;

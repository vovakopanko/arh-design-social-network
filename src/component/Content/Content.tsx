import React from "react";
import style from "./Content.module.css";
import ContentInfo from "./ContentInfo/ContentInfo";
import ContentProject from "./ContentProject/ContentProject";
import ContentService from "./ContentService/ContentService";
import ContentContact from "./ContentContact/ContentContact";

type photoProjectDataType = {
  id: number
  url:string
  alt: string,
  info: string,
}

type ContentType = {
  photoProjectData:Array<photoProjectDataType>
  portionSize: number
  portionNumber: number
  buttonRight: string
  buttonLeft: string
}

let Content: React.FC<ContentType> = ({
  photoProjectData,
  portionSize,
  portionNumber,
  buttonRight,
  buttonLeft,
}) => {
  return (
    <div className={style.content}>
      <div className={style.content__block}>
        <ContentInfo />
        <div>
          <div>
            <span
              className={
                style.content__title + " " + style.content__title_border
              }
            >
              ПОСЛЕДНИЕ ПРОЕКТЫ
            </span>
          </div>
          <ContentProject
            photoProjectData={photoProjectData}
            portionNumber={portionNumber}
            portionSize={portionSize}
            buttonLeft={buttonLeft}
            buttonRight={buttonRight}
          />
        </div>
        <div>
          <div>
            <span
              className={
                style.content__title + " " + style.content__title_border
              }
            >
              НАШИ УСЛУГИ
            </span>
          </div>
          <ContentService />
        </div>

        <div>
          <div>
            <span
              className={
                style.content__title + " " + style.content__title_border
              }
            >
              СВЯЗАТЬСЯ С НАМИ
            </span>
          </div>
          <ContentContact />
        </div>
      </div>
    </div>
  );
};

export default Content;

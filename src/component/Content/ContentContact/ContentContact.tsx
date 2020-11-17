import React from "react";
import { NavLink } from "react-router-dom";
import style from "./ContentContact.module.css";

type ContentContactType = {
//Type file
}

let ContentContact: React.FC<ContentContactType> = () => {
  return (
    <div className={style.content}>
      <div className={style.content__block}>
        <div className={style.content__contact}>
          <div className={style.content__subtitle}>
            Пришло время для первого шага
          </div>
          <div className={style.content__description}>
            Планируете интерьер загородного дома, предстоит покупка квартиры,
            решили обновить интерьер - получите бесплатную консультацию от наших
            специалистов
          </div>
        </div>
        <div>
          <NavLink to="/contact">
            <button className={style.content__button}>Написать</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ContentContact;

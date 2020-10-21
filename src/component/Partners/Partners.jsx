import React from "react";
import style from "./Partners.module.css";

const Partners = ({ partnersLogo }) => {
  return (
    <div className={style.partners}>
      <div className={style.block__title + " " + style.block__title_border}>Наши партнёры</div>
      <div className={style.partners__block}>
        <div className={style.block__titlePhoto}>
          <img
            src="https://bose-loewe.com/wp-content/uploads/2016/05/projects_1920.jpg"
            alt="photoTitle"
          />
        </div>
        <span>
          <div className={style.block__photos}>
            {partnersLogo.map((p) => (
              <img src={p.src} alt={p.alt} key={p.id}></img>
            ))}
          </div>
        </span>
      </div>
    </div>
  );
};

export default Partners;

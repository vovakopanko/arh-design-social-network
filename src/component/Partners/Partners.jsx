import React from "react";
import style from "./Partners.module.css";

const Partners = ({ partnersLogo }) => {
  return (
    <div>
      <img
        className={style.titleImg}
        src="https://bose-loewe.com/wp-content/uploads/2016/05/projects_1920.jpg"
      ></img>
      <span className={style.partnersList}>
        <div className={style.list}>
          {partnersLogo.map((p) => (
            <img src={p.src} alt={p.alt}></img>
          ))}
        </div>
      </span>
    </div>
  );
};

export default Partners;

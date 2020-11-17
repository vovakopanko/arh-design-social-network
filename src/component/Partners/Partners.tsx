import React from "react";
import style from "./Partners.module.css";
import partners from "./../../assets/images/partners.jpg"

type partnersLogoType = {
  src: string
  alt: string
  id: number
}

type PartnersType = {
  partnersLogo: Array<partnersLogoType>
}

const Partners:React.FC<PartnersType> = ({ partnersLogo }) => {
  return (
    <div className={style.partners}>
      <div className={style.block__title + " " + style.block__title_border}>Наши партнёры</div>
      <div className={style.partners__block}>
        <div className={style.block__titlePhoto}>
          <img
            src={partners}
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

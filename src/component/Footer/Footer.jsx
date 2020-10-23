import React from "react";
import style from "./Footer.module.css";
import instagramIcon from "./../../assets/images/instagramIcon.png";
import vkIcon from "./../../assets/images/vkIcon.png";
import facebookIcon from "./../../assets/images/facebookIcon.png";

let Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer__items}>
        <div className={style.footer__item_left + " " + style.footer__item}>
          <a
            href="https://www.instagram.com/vovakopanko/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={instagramIcon}
              alt="photoInsta"
            ></img>
          </a>
          <a
            href="https://vk.com/vova_kopanko"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={vkIcon}
              alt="photoVk"
            ></img>
          </a>
          <a
            href="https://ru-ru.facebook.com/vova.kopanko"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={facebookIcon}
              alt="photoFacebook"
            ></img>
          </a>
        </div>
        <div className={style.footer__item_right + " " + style.footer__item}>
          Copyright © 2018–2020
        </div>
      </div>
    </div>
  );
};

export default Footer;

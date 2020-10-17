import React from "react";
import style from "./Footer.module.css";

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
              src="https://img.icons8.com/ios/452/instagram-new.png"
              alt="photoInsta"
              width="35px"
              height="35px"
            ></img>
          </a>
          <a
            href="https://vk.com/vova_kopanko"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://pngimg.com/uploads/vkontakte/vkontakte_PNG22.png"
              alt="photoVk"
              width="35px"
              height="35px"
            ></img>
          </a>
          <a
            href="https://ru-ru.facebook.com/vova.kopanko"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/ios/452/facebook-new.png"
              alt="photoFacebook"
              width="35px"
              height="35px"
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

import React from 'react';
import style from './Footer.module.css'

let Footer = () => {
    return(
        <div className={style.foot}>
            <div className={style.logo}>
            {/* <img src="https://www.nordicinnovation.org/sites/default/files/inline-images/Nordisk%20Innovation%20Logotype%20RGB_invert.png" alt="photoLogo" width="70px" height="30px"></img> */}
            </div>
            <div className={style.social}>
            <a href="https://www.instagram.com/vovakopanko/" target="_blank"><img src="https://img.icons8.com/ios/452/instagram-new.png" alt="photoInsta" width="30px" height="30px"></img></a>
            <a href="https://vk.com/vova_kopanko" target="_blank"><img src="https://pngimg.com/uploads/vkontakte/vkontakte_PNG22.png" alt="photoVk" width="30px" height="30px"></img></a>
            <a href="https://ru-ru.facebook.com/vova.kopanko" target="_blank"><img src="https://img.icons8.com/ios/452/facebook-new.png" alt="photoFacebook" width="30px" height="30px"></img></a>
            </div>
            <div className={style.contact}>Copyright © 2018–2020</div>
             
        </div>
    )
}

export default Footer;
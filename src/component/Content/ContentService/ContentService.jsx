import React from "react";
import style from "./../ContentService/ContentService.module.css";

let ContentService = () => {
  return (
    <div className={style.block}>
      <div className={style.block__items}>
        <div className={style.block__item + " " + style.block__item_left}>
          <div>
            <span className={style.block__subtitle}> Дизайн</span>
          </div>
          <div className={style.block__description}>
            После встреч дизайнера и заказчика, проведения обмера объекта и на
            основе всех пожеланий утверждается концепт дизайна. Возможен заказ
            проекта интерьера отдельных комнат городской квартиры или частного
            дома, включающего перепланировку помещений.
          </div>
        </div>
        <div className={style.block__item + " " + style.block__item_centr}>
          <div>
            <span className={style.block__subtitle}>
              Проектирование жилых домов
            </span>
          </div>
          <div className={style.block__description}>
            Объем архитектурного проектирования обсуждается и утверждается после
            выезда специалистов на место строительства. Начальной формой
            проектирования может быть эскизный проект архитектуры или отдельная
            разработка дизайна фасада.
          </div>
        </div>
        <div className={style.block__item + " " + style.block__item_right}>
          <div>
            <span className={style.block__subtitle}>Дизайн интерьера</span>
          </div>
          <div className={style.block__description}>
            После встреч дизайнера и заказчика, проведения обмера объекта и на
            основе всех пожеланий утверждается концепт дизайна. Возможен заказ
            проекта интерьера отдельных комнат городской квартиры или частного
            дома, включающего перепланировку помещений.
          </div>
        </div>
        <div className={style.block__item + " " + style.block__item_top}>
          <div>
            <span className={style.block__subtitle}> Дизайн фасадов</span>
          </div>
          <div className={style.block__description}>
            Услуга архитектурного проектирования, которая хорошо востребована в
            настоящее время ввиду своей специфики. Ничто не вечно, и многие
            построенные ранее здания, частные жилые дома, коттеджи уже нуждаются
            как в качественном ремонте так и в редизайне фасадов.
          </div>
        </div>
        <div className={style.block__item + " " + style.block__item_middle}>
          <div>
            <span className={style.block__subtitle}>
              Ландшафтное проектирование
            </span>
          </div>
          <div className={style.block__description}>
            На подготовительном этапе собирают исходные данные. Геодезия. Данные
            об инженерных сетях. Анализ почвы. Дополнительно учитывают
            увлажненность, проницаемость почвы, характеристики подземных вод.
          </div>
        </div>
        <div className={style.block__item + " " + style.block__item_bottom}>
          <div>
            <span className={style.block__subtitle}>
              Авторское сопровождение
            </span>
          </div>
          <div className={style.block__description}>
            Авторский надзор - контроль за выполнением всех строительных и
            ремонтных работ на объекте. Вы будете уверены, что
            строительно-отделочные работы будут выполнены в соответствие с
            утвержденным дизайн-проектом.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentService;

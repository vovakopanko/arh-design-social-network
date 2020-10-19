import React from "react";
import style from "./Services.module.css";

let Services = () => {
  return (
    <div className={style.services__block}>
      <div className={style.block__title + " " + style.block__title_border}>
        ПЕРЕЧЕНЬ УСЛУГ:
      </div>
      <div className={style.block__items}>
        <div className={style.block__item}>
          <div className={style.item__subtitle}>Дизайн интерьера</div>
          <div className={style.item__description}>
            <i>
              После встреч дизайнера и заказчика, проведения обмера объекта и на
              основе всех пожеланий утверждается концепт дизайна. Возможен заказ
              проекта интерьера отдельных комнат городской квартиры или частного
              дома, включающего перепланировку помещений.
            </i>
          </div>
          <div>
            <span
              className={style.item__button + " " + style.item__button_size}
              onClick={() => {
                alert("Sorry server close");
              }}
            >
              Подробнее
            </span>
          </div>
        </div>
        <div className={style.block__item}>
          <div className={style.item__subtitle}>Дизайн фасадов</div>
          <div className={style.item__description}>
            <i>
              Услуга архитектурного проектирования, которая хорошо востребована
              в настоящее время ввиду своей специфики. Ничто не вечно, и многие
              построенные ранее здания, частные жилые дома, коттеджи уже
              нуждаются как в качественном ремонте так и в редизайне фасадов.
            </i>
          </div>

          <div className={style.moreInfo}>
            <span
              className={style.item__button + " " + style.item__button_size}
              onClick={() => {
                alert("Sorry server close");
              }}
            >
              Подробнее
            </span>
          </div>
        </div>
        <div className={style.block__item}>
          <div className={style.item__subtitle}>Проектирование жилых домов</div>
          <div className={style.item__description}>
            <i>
              Объем архитектурного проектирования обсуждается и утверждается
              после выезда специалистов на место строительства. Начальной формой
              проектирования может быть эскизный проект архитектуры или
              отдельная разработка дизайна фасада.
            </i>
          </div>
          <div className={style.moreInfo}>
            <span
              className={style.item__button + " " + style.item__button_size}
              onClick={() => {
                alert("Sorry server close");
              }}
            >
              Подробнее
            </span>
          </div>
        </div>
        <div className={style.block__item}>
          <div className={style.item__subtitle}>Авторское сопровождение</div>
          <div className={style.item__description}>
            <i>
              Авторский надзор - контроль за выполнением всех строительных и
              ремонтных работ на объекте. Вы будете уверены, что
              строительно-отделочные работы будут выполнены в соответствие с
              утвержденным дизайн-проектом.
            </i>
          </div>
          <div className={style.moreInfo}>
            <span
              className={style.item__button + " " + style.item__button_size}
              onClick={() => {
                alert("Sorry server close");
              }}
            >
              Подробнее
            </span>
          </div>
        </div>
        <div className={style.block__item}>
          <div className={style.item__subtitle}>Ландшафтное проектирование</div>
          <div className={style.item__description}>
            <i>
              На подготовительном этапе собирают исходные данные. Геодезия.
              Данные об инженерных сетях. Анализ почвы. Дополнительно учитывают
              увлажненность, проницаемость почвы, характеристики подземных вод.
              Чем больше сведений об участке будет собрано на предварительном
              этапе, тем точнее будет выполнено проектирование, тем меньше
              сложностей будет возникать при реализации разработанного проекта.
            </i>
          </div>
          <div className={style.moreInfo}>
            <span
              className={style.item__button + " " + style.item__button_size}
              onClick={() => {
                alert("Sorry server close");
              }}
            >
              Подробнее
            </span>
          </div>
        </div>
        <div className={style.block__item}>
          <div className={style.item__subtitle}>Строительство</div>
          <div className={style.item__description}>
            <i>
              Не завися от проекта строительство домов под ключ, начинается с
              утверждения проекта и заливки фундамента на участке, после чего
              возводится пол, внешние стены и внутренние перекрытия. Затем
              возводится стропильная система и монтируется кровля. Следующим
              важным фактором при строительстве коттеджей и частных домов
              является гидроизоляция и теплоизоляция помещения, что является
              главной составляющей комфорта в доме.
            </i>
          </div>
          <div className={style.moreInfo}>
            <span
              className={style.item__button + " " + style.item__button_size}
              onClick={() => {
                alert("Sorry server close");
              }}
            >
              Подробнее
            </span>
          </div>
        </div>
        <div className={style.item__description}>
          Итоговая цена зависит от объекта, его площади, объема работ и её
          специфики. Чем масштабнее проект, тем дешевле для вас обойдется каждый
          условный метр. Также у Вас есть возможность выбрать только те этапы
          дизайн-проекта интерьера, которые Вам необходимы. Позвоните нам и мы
          подготовим для вас ценовое предложение.
        </div>
      </div>
    </div>
  );
};

export default Services;

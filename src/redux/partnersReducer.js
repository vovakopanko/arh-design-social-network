let initialState = {
  partnersLogo: [
    {
      id:1,
      alt: "pic1",
      src:
        "https://obstanovka.by/sites/default/files/styles/logo_full/public/img_logo/2020-05/_IS.png?itok=Bfy7k2LI",
    },
    {
      id:2,
      alt: "pic2",
      src:
        "https://eurasian-prize.ru/wp-content/uploads/2016/05/partners_info_6.png",
    },
    {
      id:3,
      alt: "pic3",
      src:
        "https://opt-808749.ssl.1c-bitrix-cdn.ru/upload/resize_cache/iblock/98d/204_161_1/houzz_logo.png?15069361784838",
    },
    {
      id:4,
      alt: "pic4",
      src: "https://www.idesign.by/images/IMG_2415_1569405035.png",
    },
    {
      id:5,
      alt: "pic5",
      src: "https://sdesign.by/wp-content/themes/sdesign/img/logo/logo__w.png",
    },
    {
      id:6,
      alt: "pic6",
      src:
        "https://lh5.googleusercontent.com/-bWPVx-zGgtk/UFcVOpNnRoI/AAAAAAAAEe8/Rbc8vLsbIZQ/s312/arch.png",
    },
    {
      id:7,
      alt: "pic7",
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIJQjHJBVOqBOQyoM5xwMK_wgVWTPGO-Jl0g&usqp=CAU",
    },
    {
      id:8,
      alt: "pic8",
      src: "https://www.tubadzin.pl/design/img/partnerzy/grohe.png",
    },
    {
      id:9,
      alt: "pic9",
      src: "https://сундук-дизайнера.рф/images/000_logo_sunduk.png",
    },
  ],
};

const partnersReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

//ActionCreator

//ThunkActionCreator

export default partnersReducer;

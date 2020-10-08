let initialState = {
  photoProjectData: [
    {
      id: 1,
      url:
        "https://cdn.pronovostroy.ru/object/2019-04-05/5ca76f3150bd266da322ec12/images/5ca76f476c353.jpg",
      alt: "project1",
      info: "Проект 2020 год",
    },
    {
      id: 2,
      url:
        "https://i.pinimg.com/originals/e0/ff/f7/e0fff7fbfbb23446fd259d3f39f1a3c8.jpg",
      alt: "project2",
      info: "Проект 2019 год",
    },
    {
      id: 3,
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCEu1QNqfoBFEqEb6sQBdcEXO1Zk5lXsaCtQ&usqp=CAU",
      alt: "project3",
      info: "Проект 2019 год",
    },
    {
      id: 4,
      url:
        "https://gallery.forum-grad.ru/files/1/0/2/0/8/1/j20_house_in_zagreb.jpg",
      alt: "project4",
      info: "Проект 2019 год",
    },
    {
      id: 5,
      url:
        "https://image.jimcdn.com/app/cms/image/transf/dimension=2048x2048:format=jpg/path/s5e29c57b849517d3/image/i45fbbc417b2a12f0/version/1508099626/image.jpg",
      alt: "project5",
      info: "Проект 2020 год",
    },
    {
      id: 6,
      url:
        "https://cs9.pikabu.ru/post_img/big/2017/02/12/8/1486902913190785802.jpg",
      alt: "project6",
      info: "Проект 2020 год",
    },
    {
      id: 7,
      url:
        "https://m-strana.ru/upload/resize_cache/sprint.editor/b92/758_467_2/b92441b4f146e6bfd9f6be955c415163.jpg",
      alt: "project7",
      info: "Проект 2020 год",
    },
    {
      id: 8,
      url:
        "https://m-strana.ru/upload/resize_cache/sprint.editor/ceb/758_467_2/cebf3338ec2f264d4bd2c80fbbc29e0b.jpg",
      alt: "project8",
      info: "Проект 2020 год",
    },
    {
      id: 9,
      url:
        "https://www.golubovich.by/assets/cache/images/portfolio/interer-zagorodnogo-dama/glavnaja-370x370-456.jpg",
      alt: "project9",
      info: "Проект 2020 год",
    },
  ],
  portionNumber : 3,
  portionSize : 3, 
  buttonLeft: "https://image.flaticon.com/icons/png/512/64/64044.png",
  buttonRight: "https://s1.iconbird.com/ico/2014/1/598/w512h5121390846454rightcircular512.png",
  
};

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

//ActionCreator

//ThunkActionCreator

export default contentReducer;

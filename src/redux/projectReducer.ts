let initialState = {
  projectData: [
    {
      id: 1,
      url:
        "https://cdn.pronovostroy.ru/object/2019-04-05/5ca76f3150bd266da322ec12/images/5ca76f476c353.jpg",
      alt: "project1",
    },
    {
      id: 2,
      url:
        "https://i.pinimg.com/originals/e0/ff/f7/e0fff7fbfbb23446fd259d3f39f1a3c8.jpg",
      alt: "project2",
    },
    {
      id: 3,
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCEu1QNqfoBFEqEb6sQBdcEXO1Zk5lXsaCtQ&usqp=CAU",
      alt: "project3",
    },
    {
      id: 4,
      url:
        "https://gallery.forum-grad.ru/files/1/0/2/0/8/1/j20_house_in_zagreb.jpg",
      alt: "project4",
    },
    {
      id: 5,
      url:
        "https://image.jimcdn.com/app/cms/image/transf/dimension=2048x2048:format=jpg/path/s5e29c57b849517d3/image/i45fbbc417b2a12f0/version/1508099626/image.jpg",
      alt: "project5",
    },
    {
      id: 6,
      url:
        "https://cs9.pikabu.ru/post_img/big/2017/02/12/8/1486902913190785802.jpg",
      alt: "project6",
    },
    {
      id: 7,
      url:
        "https://m-strana.ru/upload/resize_cache/sprint.editor/b92/758_467_2/b92441b4f146e6bfd9f6be955c415163.jpg",
      alt: "project7",
    },
    {
      id: 8,
      url:
        "https://m-strana.ru/upload/resize_cache/sprint.editor/ceb/758_467_2/cebf3338ec2f264d4bd2c80fbbc29e0b.jpg",
      alt: "project8",
    },
  ],
  projectUnitData: [
    {
      id: 1,
      src: "http://media.4living.ru/4l-articles/0/603x328/8/39624.png",
      alt: "pic1",
    },
    {
      id: 2,
      src: "http://media.4living.ru/4limgs/themes/3d/snou-project/2/1.jpeg",
      alt: "pic3",
    },
    {
      id: 3,
      src: "http://media.4living.ru/4limgs/themes/3d/snou-project/2/2.jpeg",
      alt: "pic4",
    },
    {
      id: 4,
      src: "http://media.4living.ru/4limgs/themes/3d/snou-project/2/3.jpeg",
      alt: "pic5",
    },
    {
      id: 5,
      src: "http://media.4living.ru/4limgs/themes/3d/snou-project/2/plan.jpeg",
      alt: "pic2",
    },
    {
      id: 6,
      src: "http://media.4living.ru/4limgs/themes/3d/snou-project/2/4.jpeg",
      alt: "pic6",
    },
    {
      id: 7,
      src: "http://media.4living.ru/4limgs/themes/3d/snou-project/2/5.jpeg",
      alt: "pic7",
    },
    {
      id: 8,
      src: "http://media.4living.ru/4limgs/themes/3d/snou-project/2/8.jpeg",
      alt: "pic8",
    },
    {
      id: 9,
      src: "http://media.4living.ru/4limgs/themes/3d/snou-project/2/7.jpeg",
      alt: "pic9",
    },
    {
      id: 10,
      src: "http://media.4living.ru/4l-articles/0/603x0/16/77773.jpg",
      alt: "",
    },
  ],
};
type initialStateType = typeof initialState

const projectReducer = (state = initialState, action:any):initialStateType => {
  switch (action.type) {
    default:
      return state;
  }
};

//ActionCreator

//ThunkActionCreator

export default projectReducer;

const { default: profileReducer, AddPost } = require("./profileReducer");

it("add new post", () => {
  let action = AddPost("Hello guys");
  let state = {
    postData: [
      {
        id: 1,
        photo: "person1.png",
        name: "Николай",
        message: "Отличный специалист, помог с лагдшафтным дизайном",
        likesCount: 2,
        isFeching: "",
      },
      {
        id: 2,
        photo: "person2.png",
        name: "Ирина",
        message: "Наконец-то закончили наш дом, благодоря Вам, спасибо",
        likesCount: 3,
      },
      {
        id: 3,
        photo: "person3.png",
        name: "Василия",
        message: "Все по делу, с толком и расстановкой",
        likesCount: 10,
      },
    ],
  };
  let newState = profileReducer(state, action);



  // expectation
  expect(newState.postData.length).toBe(4);
});

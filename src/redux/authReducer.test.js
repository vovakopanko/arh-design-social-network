const { userStatus } = require("../api/Api");
const {
  getPhotosUser,
  default: authReducer,
  setUserData,
  getCaptchaUrlSuccess,
} = require("./authReducer");
import photos from "./../assets/images/Egor.jpg";


//1 test

it("Get photos User in your profile", () => {
  let action = getPhotosUser(photos);
  let state = {
    photos: null,
  };

  let NewState = authReducer(state, action);

  expect(NewState.photos).toBe(photos);
});

//2 test

it("Get authentication data file", () => {
  let action = setUserData("vovakopanko@mail.ru", "11067", "vovakopanko", true);
  let state = {
    email: null,
    id: null,
    login: null,
    isAuth: false,
  };

  let NewState = authReducer(state, action);

  expect(NewState.email).toBe("vovakopanko@mail.ru");
  expect(NewState.id).toBe("11067");
  expect(NewState.login).toBe("vovakopanko");
  expect(NewState.isAuth).toBe(true);
});

//3 test

it("Get captcha, if you send 3 request with incorect password", () => {
  let action = getCaptchaUrlSuccess(photos);
  let state = {
    captchaUrl: null,
  };

  let NewState = authReducer(state, action);

  expect(NewState.captchaUrl).toBe(photos);
});

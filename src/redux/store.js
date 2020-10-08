import contentReducer from "./contentReducer";
import messageReducer from "./messageReducer";

let store = {
  _state: {
    content: {
      MessageData: [
        {
          id: 1,
          photo: "",
          name: "Tanya ",
          message: "Здравствуйте, чем могу помочь?",
        },
        { id: 2, photo: "", name: "ME ", message: "Мне нужен архитектор-дезайнер" },
        {
          id: 3,
          photo: "",
          name: "Tanya ",
          message: "Я им являюсь, внимательно слушаю",
        },
        {
          id: 4,
          photo: "",
          name: "ME ",
          message:
            "У меня квартира 120 кв на новой боровой, нужна помощб в проекте",
        },
        {
          id: 5,
          photo: "",
          name: "Tanya ",
          message:
            "Давайте обговорим время и место, где я смогу Вас со всем ознакомить",
        },
        {
          id: 6,
          photo: "",
          name: "ME ",
          message: "Завтра в шаверме на Зелёном луге, в 18:00",
        }
      ],
      NameData: [
        { id: 1, photo: "", name: "Татьяна" },
        { id: 2, photo: "", name: "Александр" },
        { id: 3, photo: "", name: "Шармик" },
      ],
      NewMessageText: ""
    },
  },
  getState() {
    return this._state;
  },
  dispatch( action ) {
    this._state.content = contentReducer(this._state.content, action);
    this._state.message = messageReducer(this._state.message, action);

    this.renderEntireTree(this._state);
  },
  subscriber(observer) {
    this.renderEntireTree = observer;
  },
  renderEntireTree() {},
};




window.store = store;

export default store;

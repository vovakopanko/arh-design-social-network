import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import authReducer from "./authReducer";
import contentReducer from "./contentReducer";
import messageReducer from "./messageReducer";
import professionalsReducer from "./professionalsReducer";
import profileReducer from "./profileReducer";
import projectReducer from "./projectReducer";
import appReducer from "./appReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import ContactReducer from "./contactReducer";
import partnersReducer from "./partnersReducer";
import { friendsReducer } from "./friendsReducer";

let reducers = combineReducers({
  contentPage: contentReducer,
  contactPage: ContactReducer,
  messagePage: messageReducer,
  professionalsPage: professionalsReducer,
  projectPage: projectReducer,
  partnersPage: partnersReducer,
  profilePage: profileReducer,
  friendsPage: friendsReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
window.__store__ = store;

export default store;

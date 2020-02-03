import { createStore, compose, applyMiddleware, combineReducers } from "redux";
// import Tttttt from "../reducers/index";
import thunk from "redux-thunk";
import Reducer from "js/reducers/reducer";
import auth from "js/reducers/auth";
const middleWare = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const initialState = {
//   token: null,
//   isAuth: null,
//   loading: true,
//   user: {
//     name: "",
//     email: "",
//     password: "",
//     avatar: ""
//   }
// };
const store = createStore(
  combineReducers({ Reducer, auth }),

  composeEnhancers(applyMiddleware(...middleWare))
);
export default store;

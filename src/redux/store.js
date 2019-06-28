import promise from "redux-promise";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
import { createStore, applyMiddleware } from "redux";
const middleware = applyMiddleware(thunk, promise);
let store = createStore(rootReducer, middleware);
export default store;

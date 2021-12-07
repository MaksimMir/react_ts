import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { redusers } from "./redusers";

const store = createStore(redusers, applyMiddleware(thunk));

export default store;
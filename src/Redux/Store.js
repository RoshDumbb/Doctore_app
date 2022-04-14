/** @format */

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import authReducer from "./Reducer.js";
// import appReducer from "./app/Reducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  auth: authReducer,
//   app: appReducer,
});

const logger1 = (store) => (next) => (action) => {
  console.log("logging dispatch action", store);
  console.log(next, "next");
  console.log(action, "action...");
  console.log("exiting logger1");
  return next(action);
};

const logger2 = (store) => (next) => (action) => {
  console.log("logging2 dispatch action", store);
  console.log(next, "next");
  console.log(action, "action...");
  console.log("exiting logger2");
  return next(action);
};
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, logger1, logger2)
  // other store enhancers if any
);

export const store = createStore(rootReducer, enhancer);


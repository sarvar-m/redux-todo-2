import { createStore, applyMiddleware } from "redux";
import createSagaMiddleWare from "redux-saga";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { todos } from "./app.sagas";

const sagaMiddleWare = createSagaMiddleWare();

const middlewares = [logger, sagaMiddleWare];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleWare.run(todos);

export default store;

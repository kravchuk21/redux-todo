import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./rootReducer";
import {logger} from "redux-logger";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));
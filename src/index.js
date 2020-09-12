import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.css';
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./redux/rootReducer";
import {Provider} from "react-redux";
import {logger} from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(logger))

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

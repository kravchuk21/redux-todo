import {actionTypes} from "./actionTypes";

export const SET_DONE = (id) => ({
    type: actionTypes.SET_DONE,
    payload: id,
});

export const SET_IMPORTANT = (id) => ({
    type: actionTypes.SET_IMPORTANT,
    payload: id,
});

export const ADD_TODO = (id) => ({
    type: actionTypes.ADD_TODO,
    payload: id,
});

export const SET_ITEM_TEXT = (text) => ({
    type: actionTypes.SET_ITEM_TEXT,
    payload: text,
});

export const SET_FILTER = (filter) => ({
    type: actionTypes.SET_FILTER,
    payload: filter,
});

export const DELETE_TODO = (item) => ({
    type: actionTypes.DELETE_TODO,
    payload: item,
});


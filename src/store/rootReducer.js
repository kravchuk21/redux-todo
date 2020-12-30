import {produce} from "immer";
import {actionTypes} from "./actionTypes";

const initialState = {
    todos: [
        {id: 3, text: 'Racing car sprays burning fuel into crowd.', done: false, important: false, date: "Wed Dec 28 2020 22:30:32 GMT+0300"},
        {id: 2, text: 'car sprays burning fuel into crowd.', done: false, important: false, date: "Tue Aug 19 1975 23:15:30 GMT+0200 (CEST)"},
        {id: 1, text: 'burning fuel into crowd.', done: false, important: false, date: "Tue Aug 19 1975 23:15:30 GMT+0200 (CEST)"},
    ],
    itemText: "",
    filterItems: [
        {tab: "ALL", key: "all"},
        {tab: "UNDONE", key: "undone"},
        {tab: "DONE", key: "done"},
        {tab: "IMPORTANT", key: "important"},
    ],
    filter: "all",
};

export const rootReducer = produce((draft, action) => {
    switch (action.type) {
        case actionTypes.SET_DONE : {
            draft.todos.map((el) => {
                if (el.id === action.payload) el.done = !el.done
            })
            break;
        }
        case actionTypes.SET_IMPORTANT : {
            draft.todos.map((el) => {
                if (el.id === action.payload) el.important = !el.important
            })
            break;
        }
        case actionTypes.ADD_TODO : {
            draft.todos.unshift({id: draft.todos.length, text: action.payload, done: false, important: false, date: new Date()});
            break;
        }
        case actionTypes.SET_ITEM_TEXT : {
            draft.itemText = action.payload;
            break;
        }
        case actionTypes.SET_FILTER : {
            draft.filter = action.payload;
            break;
        }
        case actionTypes.DELETE_TODO : {
            draft.todos.splice(draft.todos.indexOf(action.payload), 1);
            break;
        }
    }
}, initialState);
import React from 'react';
import {Input} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {ADD_TODO, SET_ITEM_TEXT} from "../store/actions";

const {Search} = Input;

export const TodoAdd = () => {
    const dispatch = useDispatch();

    const itemText = useSelector(state => state.itemText);

    const changeItemText = (text) => {
        dispatch(SET_ITEM_TEXT(text));
    };

    const handleSearch = (value) => {
        if (itemText) {
            dispatch(ADD_TODO(value));
            changeItemText("");
        }
    };

    return (
        <Search placeholder="input text" enterButton="Add" size="large" style={{marginTop: "1rem"}}
                value={itemText}
                onSearch={value => handleSearch(value)}
                onChange={e => changeItemText(e.target.value)}
        />
    )
};
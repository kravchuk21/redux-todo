import React from 'react';
import {Input} from 'antd';
import {connect} from "react-redux";

const {Search} = Input;

const TodoAdd = ({data, itemText, add, changeItemText}) => (
    <Search placeholder="input text" enterButton="Add" size="large" style={{marginTop: "1rem"}}
            value={itemText}
            onSearch={(value) => {
                if (itemText) {
                    add({id: data.length + 1, text: value, done: false})
                    changeItemText("")
                }
            }}
            onChange={(e) => changeItemText(e.target.value)}
    />
);

const mapStateToProps = state => ({
    data: state.todos,
    itemText: state.itemText,
})

const mapDispatchToProps = dispatch => ({
    changeItemText: newText => dispatch({type: "CHANGE_ITEM_TEXT", payload: newText}),
    add: item => dispatch({type: "ADD", payload: item}),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoAdd);

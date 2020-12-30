import React from "react";
import {Button, List} from "antd";
import {useDispatch} from "react-redux";
import {DELETE_TODO, SET_DONE, SET_IMPORTANT} from "../store/actions";
import {formatDate} from "../utils/formatDate";

export const TodoListItem = ({item}) => {
    const dispatch = useDispatch();
    console.log(item.date)
    return (
        <List.Item
            className="listItem"
            style={{borderLeft: item.important ? "4px solid red" : ""}}
            onDoubleClick={() => dispatch(SET_IMPORTANT(item.id))}
        >
            <div className="todoListItemBody">
                <div style={{userSelect: "none"}}>
                    <div>{item.text}</div>
                    <small className="date">{formatDate(item.date)}</small>
                </div>
                <div className="todoListItemButtons">
                    <Button size="small" style={{marginRight: 15}}
                            type={item.done ? "primary" : ""}
                            onClick={() => dispatch(SET_DONE(item.id))}>done</Button>
                    <Button type="primary" size="small" danger
                            onClick={() => dispatch(DELETE_TODO(item))}>delete</Button>
                </div>
            </div>
        </List.Item>
    )
}
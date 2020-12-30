import React from 'react';
import {List} from 'antd';
import {useSelector} from "react-redux";
import {TodoListItem} from "./TodoListItem";


export const TodoList = () => {
    const todos = useSelector(state => state.todos);
    const filter = useSelector(state => state.filter);

    const getData = filter => {
        switch (filter) {
            case "all" :
                return todos
            case "undone":
                return todos.filter(el => !el.done)
            case "done":
                return todos.filter(el => el.done)
            case "important":
                return todos.filter(el => el.important)
            default :
                return todos
        }
    };

    return (
        <List bordered dataSource={getData(filter)}
              renderItem={item => (
                  <TodoListItem item={item}/>
              )}
        />
    );
};
import React from 'react';
import {Tabs} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {SET_FILTER} from "../store/actions";

const {TabPane} = Tabs;

export const TodoFilter = () => {
    const dispatch = useDispatch();

    const filter = useSelector(state => state.filter);
    const filterItems = useSelector(state => state.filterItems);

    const changeFilter = (key) => {
        dispatch(SET_FILTER(key))
    }

    return (
        <Tabs defaultActiveKey={filter} centered onChange={key => changeFilter(key)}>
            {filterItems.map(({tab, key}) => <TabPane tab={tab} key={key}/>)}
        </Tabs>
    )
};
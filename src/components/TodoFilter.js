import React from 'react';
import {Tabs} from 'antd';
import {connect} from "react-redux";

const {TabPane} = Tabs;

const TodoFilter = ({filter, changeFilter, filterItems}) => (
    <Tabs defaultActiveKey={filter} centered onChange={key => changeFilter(key)}>
        {filterItems.map(({tab, key}) => <TabPane tab={tab} key={key}/>)}
    </Tabs>
);

const mapStateToProps = state => ({
    filter: state.filter,
    filterItems: state.filterItems
});

const mapDispatchToProps = dispatch => ({
    changeFilter: filter => dispatch({type: "CHANGE_FILTER", payload: filter})
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter);

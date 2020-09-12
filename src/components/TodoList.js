import React from 'react';
import {List, Button} from 'antd';
import {connect} from "react-redux";


const TodoList = ({data, filter, done, deleteItem, important}) => {
    const getData = filter => {
        switch (filter) {
            case "all" :
                return data
            case "undone":
                return data.filter(el => !el.done)
            case "done":
                return data.filter(el => el.done)
            case "important":
                return data.filter(el => el.important)
            default :
                return data
        }
    }

    return (
        <List bordered dataSource={getData(filter)}
              renderItem={item => (
                  <List.Item
                      className="listItem"
                      style={{borderLeft: item.important ? "4px solid red" : ""}}
                      onDoubleClick={() => important({id: item.id, important: !item.important})}
                  >
                      <div style={{userSelect: "none"}}>{item.text}</div>
                      <div>
                          <Button size="small" style={{marginRight: 15}}
                                  type={item.done ? "primary" : ""}
                                  onClick={() => done({id: item.id, done: !item.done})}>done</Button>
                          <Button type="primary" size="small" danger
                                  onClick={() => deleteItem(item)}>delete</Button>
                      </div>
                  </List.Item>
              )}
        />
    );
}

const mapStateToProps = state => ({
    data: state.todos,
    filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
    done: item => dispatch({type: "DONE", payload: item}),
    important: item => dispatch({type: "IMPORTANT", payload: item}),
    deleteItem: item => dispatch({type: "DELETE", payload: item}),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

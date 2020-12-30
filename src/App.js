import React from 'react';
import {TodoList} from "./components/TodoList";
import {TodoAdd} from "./components/TodoAdd";
import {TodoFilter} from "./components/TodoFilter";

const App = () => (
    <div className="App">
        <h1>TODO list</h1>
        <TodoFilter/>
        <TodoList/>
        <TodoAdd/>
    </div>
);

export default App

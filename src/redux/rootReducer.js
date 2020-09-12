const initialState = {
    todos: [
        {id: 1, text: 'Racing car sprays burning fuel into crowd.', done: false, important: false},
        {id: 2, text: 'car sprays burning fuel into crowd.', done: false, important: false},
        {id: 3, text: 'burning fuel into crowd.', done: false, important: false},
    ],
    itemText: "",
    filterItems: [
        {tab: "ALL", key: "all"},
        {tab: "UNDONE", key: "undone"},
        {tab: "DONE", key: "done"},
        {tab: "IMPORTANT", key: "important"},
    ],
    filter: "all"
};

export default function (state = initialState, action) {
    switch (action.type) {
        case "DONE" : {
            let todos = [...state.todos];
            todos.map((el) => {
                if (el.id === action.payload.id) el.done = !el.done
            })
            return {...state, todos}
        }
        case "IMPORTANT" : {
            let todos = [...state.todos];
            todos.map((el) => {
                if (el.id === action.payload.id) el.important = !el.important
            })
            return {...state, todos}
        }
        case "ADD" : {
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        }
        case "CHANGE_ITEM_TEXT" : {
            return {
                ...state,
                itemText: action.payload,
            }
        }
        case "CHANGE_FILTER" : {
            return {
                ...state,
                filter: action.payload
            }
        }
        case "DELETE" : {
            let todos = [...state.todos]
            let index = todos.indexOf(action.payload);
            todos.splice(index, 1)
            return {...state, todos,}
        }
        default : {
            return state
        }
    }
}



import { v1 as uuid } from 'uuid';

const initialState = [
    {
        id: uuid(),
        title: "Add date created on right side of todo task",
        dateCreated: 1610546400,
        isCompleted: true
    },
    {
        id: uuid(),
        title: "Sort the task by date and reverse - create a button which will change the sort by date order",
        dateCreated: 1610719200,
        isCompleted: true
    },
    {
        id: uuid(),
        title: "Show total task on bottom left: if 2 complete, and 3 items left, show: '3/5 items left'",
        dateCreated: 1610460000,
        isCompleted: true
    },
    {
        id: uuid(),
        title: "Do not add if task has the same name",
        dateCreated: 1610632800,
        isCompleted: true
    }
];

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO": {
            if (!state.filter((todo) => todo.title.toLowerCase().trim() === action.payload.title.toLowerCase().trim()).length) {
                const newItem = {
                    id: uuid(),
                    title: action.payload.title,
                    dateCreated: Math.floor(Date.now() / 1000),
                    isCompleted: false
                };

                state = [
                    ...state,
                    newItem
                ];
            }
            else {
                alert("Task already exist!");
            }

            return state;
        }

        case "DELETE_TODO": {
            return state.filter((todo) =>
                todo.id !== action.payload.id
            )
        }

        case "TOGGLE_COMPLETE": {
            return state.map((todo) => {
                if (todo.id === action.payload.id)
                    todo = {
                        ...todo,
                        isCompleted: !todo.isCompleted
                    }

                return todo;
            })
        }

        default:
            return state;
    }
}

export default todosReducer;
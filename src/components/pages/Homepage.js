import React, { useState, useEffect } from 'react';
import Todos from '../functions/Todos'
import Additem from '../functions/Additem';
import { v1 as uuid } from 'uuid';

function Homepage() {

    const [todos, setTodos] = useState([
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
    ])

    const [dateState, setDateState] = useState("up");

    useEffect(() => {
        sortDate(); // eslint-disable-next-line
    }, [])

    const addTodo = (title) => {
        if (!todos.filter((todo) => todo.title.toLowerCase().trim() === title.toLowerCase().trim()).length) {
            const newItem = {
                id: uuid(),
                title: title,
                dateCreated: Math.floor(Date.now() / 1000),
                isCompleted: false
            };

            const newArr = [
                ...todos,
                newItem
            ];

            setTodos(
                newArr.sort((a, b) => {
                    if (dateState === "up")
                        return b.dateCreated - a.dateCreated
                    else
                        return a.dateCreated - b.dateCreated

                })
            )
        }
        else
            alert("Task already exist!")
    }

    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id)
                    todo.isCompleted = !todo.isCompleted

                return todo;
            })
        )
    }

    const deleteTodo = (id) => {
        setTodos(
            todos.filter((todo) =>
                todo.id !== id
            )
        )
    }

    const sortDate = () => {
        setTodos(
            todos.sort((a, b) => {
                if (dateState === "up")
                    return a.dateCreated - b.dateCreated
                else
                    return b.dateCreated - a.dateCreated
            })
        )

        setDateState(dateState === "up" ? "down" : "up")
    }

    const notCompleted = todos.filter((todo) => !todo.isCompleted).length

    return (
        <div>
            <Additem addTodo={addTodo} />
            <Todos todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
            <br />
            <span style={{ float: 'left' }}>
                {notCompleted}/{todos.length} items left
              </span>
            <span style={{ float: 'right' }}>
                <button style={{ width: '130px', height: '30px', cursor: 'pointer' }} onClick={sortDate}>Sort Date {dateState === "up" ? "↑" : "↓"}</button>
            </span>
        </div>
    );
}

export default Homepage;

import React, { useState, useEffect } from 'react';
import Todos from './components/Todos'
import './App.css';
import Header from './components/layouts/Header';
import Aboutus from './components/pages/Aboutus'
import Additem from './components/Additem';
import { v1 as uuid } from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {

  const [notCompleted, setNotCompleted] = useState(0);
  const [todos, setTodos] = useState(
    [
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
    ]
  )
  const [dateState, setDateState] = useState(true);

  useEffect(() => {
    setTodos(
      [...todos.sort((a, b) => {
        return a.dateCreated - b.dateCreated
      }
      )]) // eslint-disable-next-line
  }, [])

  useEffect(() => {
    setNotCompleted((todos.filter((todo) => !todo.isCompleted)).length)
  }, [todos])

  const addTodo = (title) => {
    if (!todos.filter((todo) => todo.title.toLowerCase().trim() === title.toLowerCase().trim()).length) {
      const newItem = {
        id: uuid(),
        title: title,
        dateCreated: Math.floor(Date.now() / 1000),
        isCompleted: false
      }

      const tmpArr = [
        ...todos,
        newItem
      ]

      setTodos(
        [...tmpArr.sort((a, b) => {
          if (dateState)
            return a.dateCreated - b.dateCreated
          else
            return b.dateCreated - a.dateCreated
        }
        )])
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
      }))
  }

  const deleteTodo = (id) => {
    setTodos(
      [...todos.filter((todo) =>  // ...this.state.todos = Copy array (Spread operator)
        todo.id !== id
      )])
  }

  const toggleSortDate = () => {
    setTodos(
      [...todos.sort((a, b) => {
        if (!dateState)
          return a.dateCreated - b.dateCreated
        else
          return b.dateCreated - a.dateCreated
      }
      )])

    setDateState(!dateState)
  }

  return (
    <div className="App">
      <div className="container">
        <Router>
          <Header />
          <Route exact path="/" render={() => (
            <React.Fragment>
              <Additem addTodo={addTodo} />
              <Todos todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
              <br />
              <span style={{ float: 'left' }}>
                {notCompleted}/{todos.length} items left
              </span>
              <span style={{ float: 'right' }}>
                <button style={{ width: '130px', height: '30px', cursor: 'pointer' }} onClick={toggleSortDate}>Sort Date {dateState ? "↓" : "↑"}</button>
              </span>
            </React.Fragment>
          )} />
          <Route path='/aboutus' component={Aboutus} />
        </Router>
      </div>
    </div>
  );
}

export default App;

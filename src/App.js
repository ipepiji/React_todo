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
        title: "Take out the trash",
        isCompleted: false
      },
      {
        id: uuid(),
        title: "Dinner with wife",
        isCompleted: false
      },
      {
        id: uuid(),
        title: "Meeting with the boss",
        isCompleted: false
      }
    ]
  )

  useEffect(() => {
    setNotCompleted((todos.filter((todo) => !todo.isCompleted)).length)
  }, [todos])

  const addTodo = (title) => {
    const newItem = {
      id: uuid(),
      title: title,
      isCompleted: false
    }

    setTodos([
      ...todos,
      newItem
    ])
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

  return (
    <div className="App">
      <div className="container">
        <Router>
          <Header />
          <Route exact path="/" render={() => (
            <React.Fragment>
              <Additem addTodo={addTodo} />
              <Todos todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
              <div>
                <br />
                {notCompleted}/{todos.length} items left
                </div>
            </React.Fragment>
          )} />
          <Route path='/aboutus' component={Aboutus} />
        </Router>
      </div>
    </div>
  );
}

export default App;

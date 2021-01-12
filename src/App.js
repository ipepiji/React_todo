import React, { Component } from 'react';
import Todos from './components/Todos'
import './App.css';
import Header from './components/layouts/Header';
import Aboutus from './components/pages/Aboutus'
import Additem from './components/Additem';
import { v1 as uuid } from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {

  state = {
    todos: [
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
  }

  add = (title) => {
    const newItem = {
      id: uuid(),
      title: title,
      isCompleted: false
    }

    this.setState({
      todos: [...this.state.todos, newItem]
    })
  }

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id)
          todo.isCompleted = !todo.isCompleted

        return todo;
      })
    })
  }

  delete = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) =>  // ...this.state.todos = get array data (Spread operator)
        todo.id !== id
      )]
    })
  }

  render() {

    const notCompleted = (this.state.todos.filter((todo) =>
      !todo.isCompleted
    )).length

    return (
      <div className="App">
        <div className="container">
          <Router>
            <Header />
            <Route exact path="/" render={(props) => (
              <React.Fragment>
                <Additem add={this.add} />
                <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} delete={this.delete} />
                <div>
                  <br />
                  {notCompleted}/{this.state.todos.length} items left
                </div>
              </React.Fragment>
            )} />
            <Route path='/aboutus' component={Aboutus} />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;

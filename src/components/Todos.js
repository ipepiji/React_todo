import React, { Component } from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';

class Todos extends Component {

    render() {
        return (
            this.props.todos.map((todo) => {
                return <Todoitem key={todo.id} todo={todo} toggleComplete={this.props.toggleComplete} delete={this.props.delete} />
            })
        )
    }
}

// PropTypes : declare type for props, eg string, number, array, object, func ; isRequired means must be used in above code
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
}

export default Todos;

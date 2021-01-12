import React from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';

function Todos(props) {

    return (
        props.todos.map((todo) => {
            return <Todoitem key={todo.id} todo={todo} toggleComplete={props.toggleComplete} deleteTodo={props.deleteTodo} />
        })
    )
}

// PropTypes : declare type for props, eg string, number, array, object, func ; isRequired means must be used in above code
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
}

export default Todos;

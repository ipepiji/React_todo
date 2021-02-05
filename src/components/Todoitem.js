import React from 'react';
import PropTypes from 'prop-types';

function Todoitem(props) {

    const { id, title, dateCreated, isCompleted } = props.todo

    const toggleComplete = (e) => {
        props.toggleComplete(id)
    }

    const deleteTodo = (e) => {
        props.deleteTodo(id)
    }

    const getStyle = () => {
        return {
            textDecoration: isCompleted ? 'line-through' : 'none'
        }
    }

    const formattedDate = new Date(dateCreated * 1000).toLocaleDateString('en-GB')

    return (
        <div style={style.item}>
            <input type='checkbox' onChange={toggleComplete} checked={isCompleted} />
            &nbsp;
            <span style={getStyle()}>
                {title}
            </span>
            &nbsp;
            <span style={{ float: 'right' }}>
                <b>{formattedDate}</b>
                &nbsp;&nbsp;
                <button style={style.btn} onClick={deleteTodo}>
                    X
                </button>
            </span>
        </div >
    )
}

const style = {
    item: {
        backgroundColor: '#f4f4f4',
        padding: 10,
        borderBottom: '1px solid navy'
    },
    btn: {
        backgroundColor: 'red',
        color: 'white',
        borderRadius: '50%',
        float: 'right',
        cursor: 'pointer',
        padding: '4px 6px',
        border: 'none'
    }
}

// PropTypes : declare type for props, eg string, number, array, object, func ; isRequired means must be used in above code
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
}

export default Todoitem;
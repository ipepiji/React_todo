import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todoitem extends Component {
    getStyle = () => {
        return {
            textDecoration: this.props.todo.isCompleted ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo
        return (
            <div style={style.item}>
                <input type='checkbox' onChange={this.props.toggleComplete.bind(this, id)} />
                &nbsp;
                <span style={this.getStyle()}>
                    {title}
                </span>
                <button style={style.btn} onClick={this.props.delete.bind(this, id)}>
                    X
                </button>
            </div >
        )
    }
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
    delete: PropTypes.func.isRequired,
}

export default Todoitem;

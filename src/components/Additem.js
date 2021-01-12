import React, { useState } from 'react';
import PropTypes from 'prop-types'

function Additem(props) {

    const [values, setValues] = useState({ title: '' });

    const onChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (values.title)
            props.addTodo(values.title);
        else
            alert("Please fill in the item")
    }

    return (
        <form style={style.form} onSubmit={onSubmit}>
            <input type='text' name='title' placeholder='Add item...' style={style.input} onChange={onChange} value={values.title} />
            <button type='submit' style={style.btn}>Submit</button>
        </form>
    )
}

const style = {
    form: {
        display: 'flex'
    },
    input: {
        flex: '10',
        padding: '10px'
    },
    btn: {
        flex: '1',
        cursor: 'pointer'
    }
}

// PropTypes : declare type for props, eg string, number, array, object, func ; isRequired means must be used in above code
Additem.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default Additem;
import { useState } from 'react';

import { connect } from 'react-redux';
import { addTodo } from '../actions';

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
            props.addTodo({ title: values.title });
        else
            alert("Please fill in the item");
        setValues({ ...values, title: '' });
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

export default connect(
    null,
    { addTodo }
)(Additem);
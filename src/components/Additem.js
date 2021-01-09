import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Additem extends Component {

    state = {
        title: ''
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.add(this.state.title);
        this.setState({
            title: ''
        })
    }

    render() {
        return (
            <form style={style.form} onSubmit={this.onSubmit}>
                <input type='text' name='title' placeholder='Add item...' style={style.input} onChange={this.onChange} value={this.state.title} />
                <button type='submit' style={style.btn}>Submit</button>
            </form>
        )
    }
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
    add : PropTypes.func.isRequired
}

export default Additem;
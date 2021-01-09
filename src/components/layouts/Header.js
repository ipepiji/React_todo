import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header style={style.header}>
            <h1>Todo</h1>
            <Link to='/' style={style.link}>Home</Link> | <Link to='/aboutus' style={style.link}>About Us</Link >
        </header >
    )
}

const style = {
    header: {
        backgroundColor: 'grey',
        color: 'white',
        padding: '10px',
        textAlign: 'center'
    },
    link: {
        color: 'black',
        textDecoration: 'none'
    }
}

export default Header;
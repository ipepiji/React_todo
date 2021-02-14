import { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import Todoitem from './Todoitem';

function Todos(props) {

    const [todos, setTodos] = useState([]);
    const [dateState, setDateState] = useState('inc');
    const isFirstRun = useRef(true);

    const sortByDate = (arr) => {
        return arr.sort((a, b) => {
            if (dateState === 'inc')
                return a.dateCreated - b.dateCreated;
            else
                return b.dateCreated - a.dateCreated;
        })
    }

    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }
        setTodos(sortByDate([...props.todos]));  // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (!isFirstRun.current)
            setTodos(sortByDate([...props.todos]));  // eslint-disable-next-line
    }, [props.todos])

    const toggleDate = () => {
        dateState === 'inc' ? setDateState('dec') : setDateState('inc');

        setTodos(
            [...todos].reverse()
        )
    }

    const notCompleted = props.todos.filter((todo) => !todo.isCompleted).length;

    return (
        <div>
            {
                todos
                    .map((todo) => {
                        return <Todoitem key={todo.id} todo={todo} />
                    })
            }
            < br />
            <span style={{ float: 'left' }}>
                {notCompleted}/{props.todos.length} items left
              </span>
            <span style={{ float: 'right' }}>
                <button style={{ width: '130px', height: '30px', cursor: 'pointer' }} onClick={toggleDate}>Sort Date</button>
            </span>
        </div>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos
});

export default connect(
    mapStateToProps
)(Todos);
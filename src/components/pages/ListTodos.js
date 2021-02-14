import { useState } from 'react';
import { useSelector } from 'react-redux';

function ListTodos() {

    const [todos] = useState(useSelector((state) => state.todos));

    return (
        todos.map((todo) => {
            return (
                <div key={todo.id}>
                    {todo.title}
                </div>
            )
        })
    );
}

export default ListTodos;
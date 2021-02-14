import * as actions from './types';

export const addTodo = (title) => ({
    type: actions.addTodo,
    payload: title
});

export const deleteTodo = (id) => ({
    type: actions.deleteTodo,
    payload: id
})

export const toggleComplete = (id) => ({
    type: actions.toggleComplete,
    payload: id
});
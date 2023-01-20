import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const addTodoReducer = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.push(action.payload)
            return state
        },
        // updateTodo(state, action) {
        //     return state.map(todo => {
        //         if (todo.id === action.payload.id) {
        //             return {
        //                 ...todo,
        //                 item: action.payload.item
        //             }
        //         } else return todo
        //     })
        // },

        deleteTodo(state, action) {
            return state.filter(item => item.id !== action.payload)
        },
    },
})

export const { addTodo, deleteTodo } = addTodoReducer.actions
export const reducerTodo = addTodoReducer.reducer
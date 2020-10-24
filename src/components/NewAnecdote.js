import React from 'react'
import {useDispatch} from 'react-redux'
import {createAnecdote} from '../reducers/anecdoteReducer'

const NewAnecdote = (props) => {
    const dispatch = useDispatch()

    const addAnecdote = (event) => {
        event.preventDefault()
        const anecdote = event.target.newAnecdote.value
        event.target.newAnecdote.value = ''
        dispatch(createAnecdote(anecdote))
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div><input name="newAnecdote"/></div>
                <button type="submit">create</button>
            </form>
        </div>
    )
}

export default NewAnecdote
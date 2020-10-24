import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {voteForAnecdote} from '../reducers/anecdoteReducer'

const Anecdote = ({anecdote, handleVote}) => {
    return (
            <div>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => handleVote(anecdote.id)}>vote</button>
                </div>
            </div>
    )
}

const Anecdotes = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.sort(function (a, b) {
        return b.votes - a.votes
    }))

    return (
        <div>
            <h2>Anecdotes</h2>
            {anecdotes.map(anecdote =>
                <Anecdote
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleVote={() =>
                        dispatch(voteForAnecdote(anecdote.id))
                    }
                />
            )}
        </div>
    )
}

export default Anecdotes
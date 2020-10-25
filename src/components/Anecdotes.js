import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {voteForAnecdote} from '../reducers/anecdoteReducer'
import {notify} from "../reducers/notificationReducer";

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
    const anecdotes = useSelector(state => {
        return state.anecdotes.sort(function (a, b) {
            return b.votes - a.votes
        })
    })
    const vote = (anecdote) => {
        dispatch(voteForAnecdote(anecdote.id))
        dispatch(notify(`you voted ${anecdote.content}`))
    }

    return (
        <div>
            {anecdotes.map(anecdote =>
                <Anecdote
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleVote={() => vote(anecdote)}
                    // handleVote={() =>
                    //     dispatch(voteForAnecdote(anecdote.id))
                    // }
                />
            )}
        </div>
    )
}

export default Anecdotes
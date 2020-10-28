import React from 'react'
//import {useDispatch, useSelector} from 'react-redux'
import { connect } from 'react-redux'
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

const Anecdotes = (props) => {
    // const dispatch = useDispatch()
    // const anecdotes = useSelector(state => {
    //     let unsortedAnecdotes = state.anecdotes
    //     const filterValue = state.filter.toLowerCase()
    //     if(filterValue) {
    //         unsortedAnecdotes = unsortedAnecdotes.filter(
    //             a => a.content.toLowerCase().startsWith(filterValue))
    //     }
    //
    //     return unsortedAnecdotes.sort(function (a, b) {
    //         return b.votes - a.votes
    //     })
    // })

    // const vote = (anecdote) => {
    //     dispatch(voteForAnecdote(anecdote.id))
    //     dispatch(notify(`you voted ${anecdote.content}`, 5000))
    // }

    return (
        <div>
            {props.anecdotes.map(anecdote =>
                <Anecdote
                    key={anecdote.id}
                    anecdote={anecdote}
                    // handleVote={() => vote(anecdote)}
                    handleVote={() => {
                        props.voteForAnecdote(anecdote.id)
                        props.notify(`you voted ${anecdote.content}`, 5000)
                    }}
                />
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    let unsortedAnecdotes = state.anecdotes
    const filterValue = state.filter.toLowerCase()
    if(filterValue) {
        unsortedAnecdotes = unsortedAnecdotes.filter(
            a => a.content.toLowerCase().startsWith(filterValue))
    }

    const anecdotes = unsortedAnecdotes.sort(function (a, b) {
        return b.votes - a.votes
    })

    return {
        anecdotes: anecdotes,
        filter: state.filter,
    }
}

const mapDispatchToProps = {
    voteForAnecdote,
    notify
}

//export default Anecdotes
const ConnectedAnecdotes = connect(mapStateToProps, mapDispatchToProps)(Anecdotes)
export default ConnectedAnecdotes
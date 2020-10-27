import anecdoteService from '../services/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)
const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

export const createAnecdote = (anecdote) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(anecdote)
    dispatch({
      type: 'CREATE',
      data: newAnecdote,
    })
  }
}

export const voteForAnecdote = (id) => {
  return async dispatch => {
    await anecdoteService.vote(id)
    dispatch({
          type: 'VOTE',
          data: id
        })
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE': {
      const id = action.data
      const anecdoteToChange = state.find(a => a.id === id)
      const votedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes+1
      }
      return state.map(anecdote =>
          anecdote.id !== id ? anecdote : votedAnecdote
      )
    }

    case 'CREATE': {
      return [...state, action.data]
    }

    case 'INIT_ANECDOTES':{
      return action.data
    }

    default: return state
  }
}

export default reducer
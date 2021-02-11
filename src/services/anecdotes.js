import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createNew = async (content) => {
    const object = { content, votes: 0 }
    const response = await axios.post(baseUrl, object)
    return response.data
}

const vote = async (id) => {
    const response = await axios.get(baseUrl, {
        params: {
            id: id
        }
    })
    const anecdote = response.data[0]
    const newAnecdote = {...anecdote, votes: anecdote.votes+1}
    await axios.put(`${baseUrl}/${id}`, newAnecdote)
}

export default { getAll, createNew, vote }//
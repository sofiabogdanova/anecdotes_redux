import React from 'react'

import Anecdotes from './components/Anecdotes'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import Filter from './components/Filter';

const App = () => {
    return (
            <div>
                <h1>Anecdotes</h1>
                <Notification/>
                <Filter/>
                <Anecdotes/>
                <AnecdoteForm/>
            </div>
    )
}

export default App
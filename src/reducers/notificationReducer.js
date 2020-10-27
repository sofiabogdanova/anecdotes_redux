const notificationReducer = (state = '', action) => {
    switch (action.type) {
        case 'NOTIFY': {
            const notification = action.data
            return notification
        }

        case 'REMOVE_NOTIFICATION': {
            return ''
        }

        default:
            return state
    }
}

export const notify = (message, showTime) => {
    return async dispatch => {
        setTimeout(() => {
            dispatch(removeNotification())
        }, showTime)
        dispatch({
            type: 'NOTIFY',
            data: message
        })
    }

}

export const removeNotification = () => {
    return {
        type: 'REMOVE_NOTIFICATION'
    }
}

export default notificationReducer
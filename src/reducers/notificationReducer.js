const notificationReducer = (state = '', action) => {
    switch (action.type) {
        case 'NOTIFY': {
            const notification = action.data
            return notification
        }

        default:
            return state
    }
}

export const notify = (message) => {
    return {
        type: 'NOTIFY',
        data: message
    }
}

export default notificationReducer
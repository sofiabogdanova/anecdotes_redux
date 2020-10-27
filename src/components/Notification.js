import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {notify} from '../reducers/notificationReducer';

const Notification = () => {
    const notification = useSelector((reducer) => {
        return reducer.notification
    })

    const style = {
        border: 'solid',
        padding: 10,
        borderWidth: 1
    }
    return (
        <div>
            {notification &&
            <div style={style}>
                {notification}
            </div>
            }
        </div>

    )
}
export default Notification
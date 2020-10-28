import React from 'react'
//import {useDispatch} from 'react-redux'
import { connect } from 'react-redux'
import {filterChange} from '../reducers/filterReducer'

const Filter = (props) => {
    //const dispatch = useDispatch()
    const handleChange = (event) => {
        const filterValue=event.target.value
        //dispatch(filterChange(filterValue))
        props.filterChange(filterValue)
    }
    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            {/*filter <input onChange={handleChange} />*/}
            filter <input onChange={handleChange} />
        </div>
    )
}

const mapDispatchToProps = {
    filterChange
}
//export default Filter
export default connect(
    null,
    { filterChange }
)(Filter)
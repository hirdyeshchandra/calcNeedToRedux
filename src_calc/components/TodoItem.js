// Dump Component
import React from 'react'
import ReactDOM from 'react-dom';
const TodoItem = ({objstate, indx, onClick }) => {   
    return (
        <tr>
            <td>{objstate.tdcont[indx]}</td>
            <td>
                <button onClick={() => onClick(indx)}>Remove Item</button>
            </td>
        </tr>
    )
}
export default TodoItem

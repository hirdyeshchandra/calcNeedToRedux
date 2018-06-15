import React from 'react'
import ReactDOM from 'react-dom';
/* import { connect } from 'react-redux'
import { addItem } from "../action/actions"; */


let InputTool = ({ dispatch }) => {  // NE
    let inp
    return (
        <div>
            <input ref={(node) => { inp = node }} type="text" placeholder="Enter the value ..."></input>
            <button onClick={() => {
                
                dispatch(addItem(inp.value))
                inp.value = ''
            }}>Click to add</button>
        </div>
    )
}
InputTool = connect()(InputTool)
export default InputTool
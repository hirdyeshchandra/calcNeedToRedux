
import React from 'react'
import ReactDOM from 'react-dom';
//import TodoItem from "./TodoItem";
//import ConnectedTodoItem from "../containers/ConnectedTodoItem";

// objstate  - whats and from where it comes from?
const TodoList = ({ objstate }) => {
    console.log("In the TodoList componebnt :: :: ::" + objstate.tdcont);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        objstate.tdcont.map((ele, i) =>  <ConnectedTodoItem key={i} indx={i} />)
                        // tdcont - whats and from where it comes from?
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TodoList

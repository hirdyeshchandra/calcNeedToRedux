//ConnectedTodoList
import { connect } from 'react-redux'
//import TodoList from '../components/TodoList'



const transferData = (obj) => {
    return obj;
}

const mapStateToProps = (state) => {
    return {
        objstate: transferData(state)
    }
}

const ConnectedTodoList = connect(mapStateToProps)(TodoList)
export default ConnectedTodoList;
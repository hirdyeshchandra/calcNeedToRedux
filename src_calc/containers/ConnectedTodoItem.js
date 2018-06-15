
import { connect } from 'react-redux'
import TodoItem from '../components/TodoItem'
import { removeItem } from "../action/actions";


const transferData = (obj) => {
    return obj;
}


/* 
 state- whats and from where it comes from? 
  ye kaise state mga rha hai, 
 */
const mapStateToProps = (state1) => {  
    console.log('in mapstate to props of comnected item');
    return {
        objstate: transferData(state1)   
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: (indx) => {
            dispatch(removeItem(indx))
        }
    }
}

const ConnectedTodoItem = connect(mapStateToProps, mapDispatchToProps)(TodoItem)
export default ConnectedTodoItem;
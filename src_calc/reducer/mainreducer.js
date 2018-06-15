import { ADD_NUM, SUB_NUM } from "../action/actions";
const mainreducer = (state, action) => {
    switch (action.type) {
        case ADD_NUM: {
           /*  let arr = state.tdcont;
            let newArr = arr.concat([action.data]) // NE
            let newState = Object.assign({}, state, { tdcont: newArr })  //NE
            return newState */
        
        }
        case SUB_NUM: {
            /* let arr = state.tdcont;
            let newArr = arr.slice(0, action.id)
            let newArr2 = arr.slice((Number(action.id) + 1), arr.length) //NE
            let newState = Object.assign({}, state, { tdcont: newArr.concat(newArr2) }) //NE
            return newState */
        }
        default:
            return state
    }
}

export default mainreducer
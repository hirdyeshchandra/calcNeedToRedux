import {connect} from 'react-redux';
import Calc from '../components/Calc';
import { ADD_NUM,SUB_NUM, subNum } from "../action/actions";

const transfer =(obj)=>{
      return obj;
}

const mapStateToProps =(state)=>{

    return{
        dataFromStore: transfer(state)
    }

    
}

const mapDispatchToProps =(dispatch)=>{
     return{
          forActions:()=>{
                dispatch(subNum())
          }
     }

}

const ConnectedCalc =connect(mapStateToProps,mapDispatchToProps)(Calc)
export default ConnectedCalc


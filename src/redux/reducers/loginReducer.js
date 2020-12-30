import {FETCH_LOGIN} from '../actions/actionCreator';

let initialState = [];

let loginReducer = (state = initialState, action) =>{
    if(action.type === FETCH_LOGIN){
        return{
            ...state,
            data: action.payLoad,
        }
    }
    return state;
}

export default loginReducer;
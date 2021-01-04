import {FETCH_ACTIVITIES, FETCH_EARNINGS} from '../actions/actionCreator';

let initialState = [];

let activiesReducer = (state = initialState, action) =>{
    if(action.type === FETCH_EARNINGS){
        return{
            ...state,
            activities: action.payLoad,
            
        }
    }else if(action.type === FETCH_ACTIVITIES){
        return{
            ...state,
            activities: action.payLoad,
        }
    }

    return state;
}

export default activiesReducer;
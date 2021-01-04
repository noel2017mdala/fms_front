import loginReducer from './reducers/loginReducer';
import activiesReducer from './reducers/activitiesReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    login: loginReducer,
    activity: activiesReducer,
});

export default rootReducer;

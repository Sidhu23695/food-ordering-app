import { combineReducers } from 'redux';
import counterReducer from '../Reducers/index';

const rootReducer = combineReducers({
    counter: counterReducer,
});

export default rootReducer;
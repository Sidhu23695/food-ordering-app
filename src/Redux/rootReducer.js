import { combineReducers } from 'redux';
import reducer from '../Reducers/index';

const rootReducer = combineReducers({
    details: reducer,
});

export default rootReducer;
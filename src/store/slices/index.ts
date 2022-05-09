import {combineReducers} from 'redux';

import carListReducer from 'pages/CarList/redux';
import carViewReducer from 'pages/CarView/redux';

import filterReducer from './Filter';

const appReducer = combineReducers({
    carListReducer,
    filterReducer,
    carViewReducer,
});

const rootReducer = (state: any, action: any): ReturnType<typeof appReducer> => {
    return appReducer(state, action);
};

export default rootReducer;

import {combineReducers} from 'redux';

import carListReducer from 'pages/CarList/redux';
import carViewReducer from 'pages/CarView/redux';

const appReducer = combineReducers({
    carListReducer,
    carViewReducer,
});

const rootReducer = (state: any, action: any): ReturnType<typeof appReducer> => {
    return appReducer(state, action);
};

export default rootReducer;

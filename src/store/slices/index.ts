import {combineReducers} from 'redux';

import carListReducer from 'pages/CarList/redux';

import filterReducer from './Filter';

const appReducer = combineReducers({
    carListReducer,
    filterReducer,
});

const rootReducer = (state: any, action: any): ReturnType<typeof appReducer> => {
    return appReducer(state, action);
};

export default rootReducer;

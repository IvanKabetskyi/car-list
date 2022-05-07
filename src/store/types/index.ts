import rootReducer from 'store/slices';

import {store} from '../index';

export type AppState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

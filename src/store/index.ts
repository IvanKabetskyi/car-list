import {configureStore} from '@reduxjs/toolkit';
import {createLogger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import {PersistConfig} from 'redux-persist/es/types';
import storage from '@react-native-async-storage/async-storage';

import AppConfig from 'config/index';

import rootReducer from './slices';

const persistConfig: PersistConfig<any> = {
    key: AppConfig.reduxStore,
    storage,
    version: Number(AppConfig.reduxStoreVersion),
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        if (process.env.NODE_ENV === `development`) {
            return getDefaultMiddleware({serializableCheck: false, ...createLogger({collapsed: true})});
        }
        return getDefaultMiddleware({serializableCheck: false});
    },
});

const persistedStore = persistStore(store);

export {store, persistedStore};

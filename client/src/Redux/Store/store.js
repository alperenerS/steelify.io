// src/redux/Store/store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../Reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'], // only user slice will be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST']
      }
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

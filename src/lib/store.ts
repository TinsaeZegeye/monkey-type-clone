import { configureStore } from "@reduxjs/toolkit"
import { persistReducer, persistStore } from "redux-persist"
import storage from 'redux-persist/lib/storage'
import testConfigSlice from './features/slice/testConfigSlice'

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['testConfig']
}

const persistedReducer = persistReducer(persistConfig, testConfigSlice)


export const store = configureStore({
    reducer: {
        testConfig: persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }),
})


export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

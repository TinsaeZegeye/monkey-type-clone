import { configureStore } from "@reduxjs/toolkit"
import testConfigSlice from './features/slice/testConfigSlice'

export const store = configureStore({
    reducer: {
        testConfig: testConfigSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
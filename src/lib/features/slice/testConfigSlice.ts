import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface TestConfigState {
    mode: 'time' | 'word' | 'quote',
    value: number,
    quote: string,
    punctuation: boolean,
    numbers: boolean, 
    language: string, 
    timeLeft: number, 
    isTestRunning: boolean, 
    isCompleted: boolean,
    _persist?: { version: number; rehydrated: boolean }
}

const initialState: TestConfigState = {
    mode: 'time', 
    value: 30,
    quote: 'short',
    punctuation: false,
    numbers: false,
    language: 'english',
    timeLeft: 30,
    isTestRunning: false,
    isCompleted: false
}

const testConfigSlice = createSlice({
    name: 'testConfig',
    initialState,
    reducers: {
        setMode: (state, action: PayloadAction<'time' | 'word' | 'quote'>) => {
            state.mode = action.payload
            if(action.payload === 'time') state.value = 30
            if(action.payload === 'word') state.value = 25
            if(action.payload === 'quote') state.quote = 'short'
        },
        setValue: (state, action: PayloadAction<number>) => {
            state.value = action.payload
            state.timeLeft = action.payload
        },
        setQuote: (state, action: PayloadAction<string>) =>{
            state.quote = action.payload
        },
        togglePunctuation: (state) =>{
            state.punctuation = !state.punctuation
        },
        toggleNumbers: (state) =>{
            state.numbers = !state.numbers
        },
        setLanguage: (state, action: PayloadAction<string>) => {
            state.language = action.payload
        },
        setTimeLeft: (state, action: PayloadAction<number>) => {
            state.timeLeft = action.payload
        },
        setIsTestRunning: (state, action: PayloadAction<boolean>) => {
            state.isTestRunning = action.payload
        },
        setIsCompleted: (state, action: PayloadAction<boolean>) => {
            state.isCompleted = action.payload
        }, 
        restartTest: (state) => {
            state.isCompleted = false,
            state.isTestRunning = false,
            state.timeLeft = state.mode === 'time' ? state.value : 30
        }
    }
})

export const {
    setMode, 
    setValue,
    toggleNumbers, 
    togglePunctuation, 
    setIsCompleted, 
    setIsTestRunning,
    setTimeLeft, 
    setQuote, 
    restartTest, 
    setLanguage
} = testConfigSlice.actions

export default testConfigSlice.reducer
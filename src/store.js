import { configureStore } from '@reduxjs/toolkit'
import userSlice from './redux/user/userSlice'
import noteSlice from './redux/note/noteSlice'

export const store = configureStore({
    reducer: {
        note: noteSlice,
        user: userSlice,

    },
})
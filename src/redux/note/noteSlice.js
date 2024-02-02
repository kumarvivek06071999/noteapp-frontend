
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { store } from '../../store';
import { BASE_URL } from '../../constant/config';

const initialState = {
    data: []
}

export const fetchData = createAsyncThunk('note/fetchData', async () => {
    try {
        console.log("token not found")
        // const { token } = store.getState().user
        const token = localStorage.getItem("token")
        console.log(token)
        const res = await axios({
            method: 'get',
            url: BASE_URL + "/note/",
            headers: {
                Authorization: token
            }
        })

        const resData = res.data.data
        return resData;
    } catch (error) {
        throw error;
    }
});



export const noteSlice = createSlice({
    name: "note",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state, action) => {
                console.log("Pending State")
            })
            .addCase(fetchData.fulfilled, (state, { payload }) => {
                console.log("fullfilld state")
                state.data = payload


            })
            .addCase(fetchData.rejected, (state, action) => {
                console.log("Rejected")
            })

    }
})
export const { setData } = noteSlice.actions
export default noteSlice.reducer

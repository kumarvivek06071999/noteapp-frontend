import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../constant/config";



const initialState = {
    message: "",
    user: "",
    auth: false,
    token: null,
    loading: false,
    error: "",
    data: []
}

export const signupUser = createAsyncThunk("signupuser", async (body) => {
    let data = await axios({
        method: "post",
        url: BASE_URL + "/user/register",
        data: body
    })
    console.log("user Created")
    return data
})

export const getData = createAsyncThunk('user/fetchData', async (token) => {
    try {


        console.log("token", token)
        const res = await axios({
            method: 'get',
            url: BASE_URL + "/note",
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



export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signupUser: signupUser,
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setAuth: (state, action) => {
            state.auth = action.payload;
        },
        logOut: (state, action) => {
            state = initialState
        },
        setMainData: (state, action) => {
            state.data = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getData.pending, (state, action) => {
                console.log("Pending State")
            })
            .addCase(getData.fulfilled, (state, { payload }) => {
                console.log("fullfilld state")
                state.data = payload
                console.log("user data")


            })
            .addCase(getData.rejected, (state, action) => {
                console.log("Rejected")
            })

    }


})
export const { setToken, setAuth, logOut, setMainData } = userSlice.actions
export default userSlice.reducer
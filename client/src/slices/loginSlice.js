import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import END_POINT from "../config/Api";

export const login = createAsyncThunk("login/login", async (credentials, thunkAPI) => {
    try {
        let url = `${END_POINT}/auth/login`
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        const data = await response.json();
        return data

    }
    catch (err) {
        return thunkAPI.rejectWithValue();
    }

})

const initialState = {
    credentials: {
        email: "",
        password: ""
    },
    token : ""
}

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        // setEmail: (state, action) => {
        //     state.credentials = { ...state.credentials, ["email"]: action.payload }
        // },
        // setPassword: (state, action) => {
        //     state.credentials = { ...state.credentials, ["password"]: action.payload }
        // }
        setCredentials: (state, action) => {
            state.credentials = { ...state.credentials, [action.payload.name]: action.payload.value }
        }
    
    },
    extraReducers : {
        [login.fulfilled] : (state,action) => {
            state.token = action.payload.authtoken
        },
        [login.rejected] : (state,action) => {
            state.token = null
        }
    }
    
})

// export const { setEmail, setPassword } = loginSlice.actions
export const { setCredentials } = loginSlice.actions

export default loginSlice.reducer
import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name : "user",
    initialState : {
        user: null
    },
    reducers:{
        register:(state, action) =>{
            state.user = action.payload
        },
        login:(state, action) =>{
            state.user = action.payload
        },
        logout:(state) =>{
            state.user =null
        },
        dollerSelect:(state, action)=>{
            state.user = action.payload
        }
    }
})

export const {register, login, logout, dollarSelect} = userSlice.actions
export const authenticateUser = (state) => state.user.user
export default userSlice.reducer;

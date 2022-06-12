import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

export const getUsers = createAsyncThunk("users/getUsers",async () => {
    const response = await fetch('https://reqres.in/api/users?page=1')
    const data = await response.json();
    return data
});

const UsersSlice = createSlice(({
    name: 'users',
    initialState:{
        users:[],
        loading:false
    },
    extraReducers:{
        [getUsers.pending]: (state,action) => {
            state.loading = true;
        },
        [getUsers.fulfilled]: (state,action) => {
            // console.log(action);
            state.user = action.payload;
            state.loading = false;
        },
        [getUsers.rejected]: (state,action) => {
            state.loading = false;
        },
    }
}))

export default UsersSlice.reducer;
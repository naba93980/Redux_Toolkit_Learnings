const createSlice = require('@reduxjs/toolkit').createSlice;
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk;
const axios = require('axios');

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const fetchUsersActions = createAsyncThunk('fetchuser', () => {
    return axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
        const users = response.data.map(user => user.id);
        return users;
    })
})

// createAsyncThunk - accepts a Redux 'action type prefix string' and a callback function that should return a promise and
// generates 'promise lifecycle action types' based on the 'action type prefix' that you pass in, and returns a thunk action creator function,
// the generated 'lifecycle action types' are passed as properties to the returned thunk action creator function 

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsersActions.pending, (state, action) => {
            state.loading = true
        })
            .addCase(fetchUsersActions.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
                state.error = '';
            })
            .addCase(fetchUsersActions.rejected, (state, action) => {
                state.loading = false;
                state.users = [];
                state.error = action.error.message
            });
    }
})

module.exports.fetchUsersReducer = userSlice.reducer;
module.exports.fetchUsersActions = fetchUsersActions;

const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
    numOfCakes: 10,
}
createSlice
const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state, action) => {
            state.numOfCakes--;
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload;
        }
    }
})

module.exports.cakeReducers = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
const createSlice = require('@reduxjs/toolkit').createSlice;
const { cakeActions } = require('../cake/cakeSlice');

const initialState = {
    numOfIcecreams: 20,
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state, action) => {
            state.numOfIcecreams -= action.payload;
        },
        restocked: (state, action) => {
            state.numOfIcecreams += action.payload;
        }
    },
    // Using object :
    // extraReducers: {
    //     'cake/ordered': (state, action) => {
    //         state.numOfIcecreams -= 4;
    //     }
    // }
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, (state, action) => {
            state.numOfIcecreams -= 3;
        })
    }
})
module.exports.icecreamReducer = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;


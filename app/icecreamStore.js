const configStore = require('@reduxjs/toolkit').configureStore;
const { icecreamReducer } = require('../features/icecream/iceCreamSlice');
const { icecreamActions } = require('../features/icecream/iceCreamSlice');

const store = configStore({
    reducer: {
        icecreamReducer,
    }
})

console.log('Initial State  ', store.getState());

const unsubscribe = store.subscribe(() => {
    console.log('Updated Store ', store.getState());
})

store.dispatch(icecreamActions.ordered(2));
store.dispatch(icecreamActions.ordered(1));
store.dispatch(icecreamActions.ordered(3));
store.dispatch(icecreamActions.restocked(5));

unsubscribe();
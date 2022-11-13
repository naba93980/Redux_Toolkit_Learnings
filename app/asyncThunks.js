const configStore = require('@reduxjs/toolkit').configureStore;
const { fetchUsersReducer } = require('../features/user/userSlice');
const { fetchUsersActions } = require('../features/user/userSlice');


const store = configStore({
    reducer: {
        fetchUsersReducer,
    }
})

console.log('Initial State  ', store.getState());

const unsubscribe = store.subscribe(() => {
    console.log('Updated Store ', store.getState());
})

store.dispatch(fetchUsersActions());

// unsubscribe();
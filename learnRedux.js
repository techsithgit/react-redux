const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    name:'john', 
    age:21
}
//reducer pure function
const rootReducer = (state = initialState, action) => {

    if(action.type === 'INCRESE_AGE') {
       return Object.assign({}, state, {age:state.age + action.value})
    }
   
    return state;
};

const store = createStore(rootReducer);

//subscribe
store.subscribe(() => {
    console.log('subscribe', store.getState());
})

//dispatch action

store.dispatch( { type: 'INCRESE_AGE', value: 2});

//console.log(store.getState());


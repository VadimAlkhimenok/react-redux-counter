const redux = require( 'redux' );

const initialState = {
    counter: 0
}

// Reducer
const reducer = ( state = initialState, action ) => {

    if ( action.type === 'ADD' ) {
        return {
            counter: state.counter + 1
        }
    }

    if ( action.type === 'ODD' ) {
        return {
            counter: state.counter - 1
        }
    }

    if ( action.type === 'ADD_NUMBER' ) {
        return {
            counter: state.counter + action.value
        }
    }

    return state;
}

// Store
const store = redux.createStore( reducer );
store.subscribe( () => console.log( 'Subscribe: ', store.getState() ) )

// Actions
const addCounter = {
    type: 'ADD',
};

// dispatch
store.dispatch( addCounter );

store.dispatch({ type: 'ODD' });

store.dispatch({ type: 'ADD_NUMBER', value: 10 });
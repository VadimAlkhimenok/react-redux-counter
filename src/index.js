import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer/rootReducer';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

// function loggerMiddleware( store ) {
//     return function( next ) {
//         return function( action ) {
//             const result = next( action )
//             console.log( 'Middleware', store.getState() );
//             return result;
//         }
//     }
// }

const loggerMiddleware = store => next => action => {
    const result = next( action );
    console.log( 'Middleware', store.getState() );
    return result;
}

const store = createStore( rootReducer, applyMiddleware( loggerMiddleware, reduxThunk ) );

const app = (
    <Provider store={ store }>
        <App />
    </Provider>
)

ReactDOM.render( app, document.getElementById('root') );

serviceWorker.unregister();

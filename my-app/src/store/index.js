import { createStore, applyMiddleware } from 'redux';

import bugsReducer from '../reducers/bugsReducer';

function asyncMiddleware(store){
    return function(next){
        return function(action){
            if (typeof action === 'function'){
                return action(store.dispatch, store.getState);
            }
            return next(action);
        }
    }
}

const loggerMiddleware = (store) => (next) => (action) => {
    console.group(action.type);
    console.group('Before -> ');
    console.log(store.getState());
    console.groupEnd();
    console.log(action);
    next(action);
    console.group('After -> ');
    console.log(store.getState());
    console.groupEnd();
    console.groupEnd();
}

const store = createStore(bugsReducer, applyMiddleware(loggerMiddleware, asyncMiddleware));

export default store;
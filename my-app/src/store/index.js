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

const store = createStore(bugsReducer, applyMiddleware(asyncMiddleware));

export default store;
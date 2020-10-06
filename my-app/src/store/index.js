import { createStore, combineReducers } from 'redux';
import rootMiddleware from '../middlewares';


import bugsReducer from '../reducers/bugsReducer';
import projectsReducer from '../reducers/projectsReducer';

const rootReducer = combineReducers({
  bugsState : bugsReducer,
  projectsState : projectsReducer
});


const store = createStore(rootReducer, rootMiddleware); 

export default store;
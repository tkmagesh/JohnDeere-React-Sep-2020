import { createStore } from 'redux';
import rootMiddleware from '../middlewares';

/* import bugsReducer from '../reducers/bugsReducer';

const store = createStore(
  bugsReducer,
  rootMiddleware
);
 */

 import projectsReducer from '../reducers/projectsReducer';
 const store = createStore(projectsReducer, rootMiddleware);
export default store;
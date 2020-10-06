import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';

import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./store";

import BugTracker from './bugTracker';
import bugActionCreators from './bugTracker/actions';

import Projects from './projects';
import projectActionCreators from './projects/actions';

const projectActionDispatchers = bindActionCreators(projectActionCreators, store.dispatch);
const bugActionDispatchers = bindActionCreators(bugActionCreators, store.dispatch);

function renderApp(){
  const storeState = store.getState(),
    bugs = storeState.bugsState,
    projects = storeState.projectsState;
  ReactDOM.render(
    <React.StrictMode>
      <h1>My App</h1>
      <Projects projects={projects} {...projectActionDispatchers} />
      <BugTracker bugs={bugs} {...bugActionDispatchers} />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

renderApp();
store.subscribe(renderApp);


/* 
import * as calc from './calculator';
calc.add(10,20) 
*/

/* 
import * as calc from './calculator';
const { add } = calc;
console.log(add(10,20)); 
*/

/* 
import { add } from './calculator';
console.log(add(10, 20)); 
*/

//importing the default exported object
/* 
import calc from './calculator';
console.log(calc.add(10,20));
*/



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

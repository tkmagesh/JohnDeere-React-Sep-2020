import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./store";

import BugTracker from './bugTracker';
import Projects from './projects';

  ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <h1>My App</h1>
        <Projects />
        <BugTracker />
      </React.StrictMode>
    </Provider>,
    document.getElementById("root")
  );




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

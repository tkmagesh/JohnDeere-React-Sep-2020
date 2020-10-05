import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
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

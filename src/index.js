import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import './scss/style.scss';//FAIL
//ERROR in ./src/scss/style.scss
// Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):
// ReferenceError: document is not defined

// works
const displayName = () => {
   console.log( 'Test' );
   const button = document.createElement( 'button' );
   button.textContent = 'Click me..';
   document.body.appendChild( button )
};
displayName();

//fails
const title = 'React...';
ReactDOM.render(
  <App title={title} />,
  document.getElementById('root')
);

module.hot.accept();
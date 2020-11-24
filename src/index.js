import React from 'react';
import ReactDOM from 'react-dom';
import './scss/style.scss';

import App from './App';

// const displayName = () => {
//    console.log( 'Test' );
//    const button = document.createElement( 'button' );
//    button.textContent = 'Click me';
//    document.body.appendChild( button )
// };
// displayName();

const title = 'React!!!';

ReactDOM.render(
  <App title={title} />,
  document.getElementById('root')
);

module.hot.accept();
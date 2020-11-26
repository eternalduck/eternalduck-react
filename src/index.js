import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header/Header'

import css from './scss/main.scss'


ReactDOM.render(
  <Header/>,
  document.getElementById('root')
)


// tmp
const displayName = () => {
   const p = document.createElement( 'p' )
   const h2 = document.createElement( 'h2' )
   p.textContent = 'Index txt'
   h2.textContent = 'Index Header'
   document.body.appendChild( h2 )
   document.body.appendChild( p )
}
displayName()
// end tmp


module.hot.accept()//fail
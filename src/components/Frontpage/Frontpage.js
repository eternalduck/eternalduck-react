import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import cx from 'classnames'
// import Header from '../Header/Header'

// import css from '../../scss/main.scss'
import cssF from './frontpage.scss'


const Frontpage = (props) => {
	useEffect(() => {
		// drawOnCanvas()
	})
	return(
		// <Header headerColor={props.headerColor}/>
		<div className={cssF.frontpage}>
			{/* <img src="/images/table02.png"/> */}
		</div>
	)
}

export default Frontpage

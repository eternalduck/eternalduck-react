import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import {vars, media} from '../../scss/vars/_index'

// import cssF from './frontpage.scss'
// import cx from 'classnames'


const Frontpage = (props) => {
	useEffect(() => {
		document.body.className = "FRONT-TMP"
	})
	return(
		<FrontpageSC>
`			<h1>Heading One</h1>
			<h2>Heading Two</h2>
			<h3>Heading Three</h3>
		</FrontpageSC>
		// <div className={cssF.frontpage}></div>
	)
}
// style
const FrontpageSC = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	//background: url("/images/table.jpg") center/cover no-repeat;
	// ${media.smUp`//works
	// 	background: ${vars.tenderPink};
	// `}
`
// end style

export default Frontpage

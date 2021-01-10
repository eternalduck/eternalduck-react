import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import {colors, media} from '../../style/vars-mixins/_index'
import Header from '../Header/Header'

const Frontpage = (props, theme) => {
	useEffect(() => {
		document.body.className = "FRONT-TMP"
	})
	console.info(theme.bodyClr)
	return(
		<FrontpageSC>
			<Header/>
			<h1>Heading One</h1>
			<h2>Heading Two</h2>
			<h3>Heading Three</h3>
		</FrontpageSC>
	)
}
// style
const FrontpageSC = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	// background: ${(props) => props.theme.bodyClr};//fail
	background: url("/images/table.jpg") center/cover no-repeat;
	// ${media.smUp`//works
	// 	background: ${colors.tenderPink};
	// `}
`
// end style

export default Frontpage

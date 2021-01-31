import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
import {colors, media} from "../../style/vars-mixins/_index"
import Header from "../header-footer/Header"

const Frontpage = (props, theme) => {
	// useEffect(() => {
	// 	document.body.className = "FRONT-TMP"
	// })
	return(
		<FrontpageSC>
			<Header/>
		</FrontpageSC>
	)
}

const FrontpageSC = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background: url("../../images/table.jpg") center/cover no-repeat;
`

export default Frontpage



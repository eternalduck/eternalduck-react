import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
import {colors, media} from "../../style/vars-mixins/_index"
import Header from "../header-footer/Header"

const Frontpage = (props, theme) => {
	// useEffect(() => {
	// 	document.body.className = "FRONT-TMP"
	// })
	//TODO make random song search
	//https://medium.com/@perryjanssen/getting-random-tracks-using-the-spotify-api-61889b0c0c27
	return(
		<FrontpageSC>
			<Header isFront={true}/>
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



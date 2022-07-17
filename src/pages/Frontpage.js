import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
import {colors, media} from "@style/vars-mixins/_index"

const Frontpage = (props, theme) => {
	// useEffect(() => {
	// 	document.body.className = "FRONT-TMP"
	// })
	//TODO make random song search
	//https://medium.com/@perryjanssen/getting-random-tracks-using-the-spotify-api-61889b0c0c27
	return(
		<FrontpageSC/>
	)
}

const FrontpageSC = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background: #33424d url("../../images/table02.jpg") center bottom/contain no-repeat;
	${media.mdDown`
		background-size: cover;
	`}
`

export default Frontpage



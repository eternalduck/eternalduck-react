import React, {useState} from "react"
import { css, createGlobalStyle} from "styled-components"
import {media, colors, mixins} from "./vars-mixins/_index"


const GlobalStyle = createGlobalStyle`
	//@import "./utils/_reset.css";//TODO: fail
	// 1. General
	// font can be here or in index.html
	//@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap");
	body {
		// background: {props => props.theme.bodyBg};
		background: ${theme => theme.bodyBg};
		// background: {useTheme(bodyBg)};
		color: ${theme => theme.txtClr};
		font-family: "Open Sans", sans-serif;
		font-weight: 300;
		font-size: 16px;
		line-height: 1.5;
	}
	// 2. Typography
	h1, h2, h3, h4 {
		font-family: "Courier New", monospace;
		// font-family: "Roboto Slab", serif;
		font-weight: 700;
	}
	h1 {
		font-size: 230%;
		margin-bottom: 20px;
	}
	h2 {
		font-size: 190%;
		margin-bottom: 18px;
	}
	h3 {
		font-size: 160%;
		margin-bottom: 16px;
	}
	h4 {
		font-size: 130%;
		margin-bottom: 14px;
	}
	p {
		font-size: 100%;
		margin: 0 0 8px;
	}
	a {
		${mixins.borderUnderline}
	}
	// end typo

`//createGlobalStyle

export default GlobalStyle

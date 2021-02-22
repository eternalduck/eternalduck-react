import React from "react"
import {css, createGlobalStyle} from "styled-components"
import {media, colors, mixins} from "./vars-mixins/_index"
import {resetCss} from "./utils/_reset"

const GlobalStyle = createGlobalStyle`
	${resetCss}
	// 1. General
	// font can be here or in index.html
	//@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap");
	body {
		background: ${props => props.theme.bodyBg};
		color: ${props => props.theme.txtClr};
		font-family: "Open Sans", sans-serif;
		font-weight: 300;
		font-size: 16px;
		line-height: 1.5;
		// &:after {
		// 	content: "${props => props.theme.name}";
		// 	display: block;
		// 	position: absolute;
		// 	top: 40%;
		// 	left: 5px;
		// 	font-size: 40px;
		// 	color: mediumvioletred;
		// }
	}
	// 2. Typography
	h1, h2, h3, h4 {
		font-family: "Courier New", monospace;
		// font-family: "Roboto Slab", serif;
		font-weight: 700;
		line-height: 1.2;
	}
	h1 {
		font-size: 30px;
		margin-bottom: 15px;
		${media.md`
			font-size: 40px;
		`}
		${media.lg`
			font-size: 44px;
			margin-bottom: 20px;
		`}
	}
	h2 {
		font-size: 26px;
		margin-bottom: 12px;
		${media.md`
			font-size: 32px;
		`}
		${media.lg`
			font-size: 36px;
			margin-bottom: 18px;
		`}
	}
	h3 {
		font-size: 24px;
		margin-bottom: 10px;
		${media.md`
			font-size: 28px;
		`}
		${media.lg`
			font-size: 30px;
			margin-bottom: 15px;
		`}
	}
	p {
		font-size: 100%;
		margin: 0 0 8px;
	}
	b, strong {
		font-weight: bold;
	}
	a {
		color: ${props => props.theme.linkClr};
		text-decoration: none;
	}
	.txt {
		&_tiny {
			font-size: 11px;
		}
		&_small {
			font-size: 14px;
		}
		&_mid {
			font-size: 18px;
		}
		&_big {
			font-size: 20px;
		}
		&_extra {
			font-size: 24px;
		}
		&_bold {
			font-weight: bold;
		}
	}
	// end typo
	//Icons
	// .icon {//fail
	// 	// width: ${props => props.big ? "52px" : "32px"};
	// 	// height: ${props => props.big ? "52px" : "32px"};
	// 	width: 32px;
	// 	height: 32px;
	// }
	.icon {
		width: 32px;
		height: 32px;
		&_big {
			width: 42px;
			height: 42px;
		}
	}
`//createGlobalStyle

export default GlobalStyle

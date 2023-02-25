import React from "react";
import {css, createGlobalStyle} from "styled-components";
import {default as resetCss} from "./utils/_resetCss";
import {default as debugStyle} from "./utils/_debugStyle";
import {colors} from "./vars-mixins/_index";
import {media} from "./vars-mixins/_media";
import {mixins} from "./vars-mixins/_mixins";

const GlobalStyle = createGlobalStyle`
	${resetCss}
	${debugStyle}

	// 1. General
	// font can be here or in index.html
	//@import url('https://fonts.googleapis.com/css2?family=Cousine:wght@400;700&family=Open+Sans:ital,wght@0,300;0,400;0,700;1,400&display=swap');
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
		font-family: "Roboto Slab", serif;
		/* font-family: "Cousine", monospace; */
		font-weight: 700;
	}
	h1 {
		font-size: 26px;
		line-height: 1.3;
		margin-bottom: 20px;
		@media ${media.md}{
			font-size: 36px;
		}
		@media ${media.lg}{
			font-size: 42px;
			margin-bottom: 25px;
		}
	}
	h2 {
		font-size: 24px;
		line-height: 1.2;
		margin-bottom: 15px;
		@media ${media.md}{
			font-size: 30px;
		}
		@media ${media.lg}{
			font-size: 36px;
			margin-bottom: 20px;
		}
	}
	h3 {
		font-size: 22px;
		line-height: 1.2;
		margin-bottom: 15px;
		@media ${media.md}{
			font-size: 24px;
		}
		@media ${media.lg}{
			font-size: 28px;
			margin-bottom: 20px;
		}
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
`;//createGlobalStyle

export default GlobalStyle;

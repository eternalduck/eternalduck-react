import React from "react"
import styled, {keyframes} from "styled-components"
import {colors} from "../../style/vars-mixins/_index"

const Preloader = (props) => {
	return (
		<Slide/>
	)
}
const slide = keyframes`
	0% {
		height: 0;
		opacity: 1;
		z-index: 999;
	}
	80% {
		height: 92%;
		opacity: 0.9;
	}
	90% {
		height: 95%;
		opacity: .5;
	}
	95% {
		opacity: .2;
	}
	100% {
		height: 100%;
		opacity: 0;
		z-index: -5;
	}
`
const Slide = styled.div`
	background: ${colors.gradientBlueMint};
	position: fixed;
	width: 100%;
	height: 0;
	bottom: 0;
	animation: ${slide} 1.5s ease-in;
`

export default Preloader

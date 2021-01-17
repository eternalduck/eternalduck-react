import React from "react"
import styled, {keyframes} from "styled-components"

const Preloader = (props) => {
	return (
		<Slide/>
	)
}
//TODO: normal animation
const leftToRight = keyframes`
	from {
		width: 0;
		opacity: 1;
		z-index: 999;
	}

	to {
		width: 100%;
		opacity: 0;
		z-index: -10;
	}
`
const Slide = styled.div`
	background: #000;
	position: fixed;
	width: 0;
	height: 100%;
	animation: ${leftToRight} 1s ease-in;
`

export default Preloader

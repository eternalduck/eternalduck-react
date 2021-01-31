import React, {useState, useEffect} from "react"
import styled, {keyframes} from "styled-components"
import {colors} from "../../style/vars-mixins/_index"

// add watched data to watchLoaded var in a component and pass it to props "loaded"

// {!watchLoaded ?
// 	<Loading loaded={watchLoaded}/>
// 	: <Component/>
// }
const Loading = (props) => {
	const [isStillLoading, setIsLoading] = useState(true)

	useEffect(() => {
		props.loaded != false//TODO false fails, read why
			? setIsLoading(false)
			: setIsLoading(true)
	}, [props.loaded])
// console.info(`Loading - props.loaded: ${props.loaded}`)
// console.info(`Loading - isStillLoading: ${isStillLoading}`)

	return (
		isStillLoading ?
			<LoadingContainer>
				<Ball/>
			</LoadingContainer>
		: null
	)
}
const bounce = keyframes`
	0%, 100% {transform: scale(1); opacity: 1}
	50% {transform: scale(.7); opacity: .7}
`

const LoadingContainer = styled.div`//should sit in relative container!
	outline: 1px dashed darkred;
	position: absolute;
	top: 50px;//override in parent if needed
	left: 0;
	width: 100%;
	display: flex;
	padding: 30px;
	z-index: 9999;
`

const Ball = styled.div`
	animation: ${bounce} 1s linear infinite;
	background: ${colors.gradientBlueMint};
	width: 50px;
	height: 50px;
	border-radius: 50%;
	margin: auto;
`

export default Loading

import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import ContentWidth from "../Layout/ContentWidth"

const TestPage = (props) => {
	useEffect(() => {
		drawOnCanvas()
	})
	return(
	<>
		{/* <Header headerColor={props.headerColor}/> */}
		<ContentWidth>
			<div className="contentWidth">
				TestPage content-width
				<canvas id="myCanvas" width="300" height="150"></canvas>
			</div>
		</ContentWidth>
	</>
	)
}

const drawOnCanvas = () => {
	let canvas = document.getElementById("myCanvas")
	let context = canvas.getContext("2d")
	let x = canvas.width / 2
	let y = canvas.height / 2
	let radius = 50
	let startAngle = (Math.PI / 180) * -280
	let endAngle = 3
	context.lineWidth = 15
	context.lineCap = "round"
	let ctr = -90
	const clr = setInterval(function() {
		context.clearRect(0, 0, 300, 150) // clear canvas
		context.beginPath()
		context.arc(x, y, radius, startAngle, (Math.PI / 180) * ctr, false)
		context.stroke()
		ctr++
		if (ctr == endAngle) clearInterval(clr)
	}, 10)
}

export default TestPage

//
// canvas {
// 	border:1px solid #999;
// }
// .circleParent {
// 	position: relative;
// 	height: 300px;
// 	width: 300px;
// }
// .circle {
// 	position: absolute;
// 	top: 0;
// 	left: 0;
// 	width: 100%;
// 	height: 100%;
// 	background: transparent;
// 	border: 1em solid;
// 	border-radius: 50%;
// }
// .circle1 {
// 	border-color: cyan;
// 	// transform: rotate(-10deg);
// 	z-index: 1;
//
// }
// .circle2 {
// 	outline: 1px dashed #fff;
// 	border-color: transparent $black transparent transparent;
// 	transform: rotate(0deg);
// 	z-index: 10;
// 	&:before, &:after {
// 		content: "";
// 		position: absolute;
// 		border-radius: 50%;
// 		width: 1em;
// 		height: 1em;
// 		right: 27px;
// 		background: cyan;
// 	}
// 	&:before {
// 		top: 25px;
// 	}
// 	&:after {
// 		bottom: 25px;
// 	}
//
// }

import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import cx from 'classnames'
// import Header from '../Header/Header'
import LayoutBase from '../Layout/LayoutBase'

import css from '../../scss/main.scss'


const TestPage = (props) => {
	useEffect(() => {
		drawOnCanvas()
	})
	return(
	<>
		{/* <Header headerColor={props.headerColor}/> */}
		<LayoutBase>
			<div className="contentWidth">
				TestPage content-width
				<canvas id="myCanvas" width="300" height="150"></canvas>
			</div>
		</LayoutBase>
	</>
	)
}

const drawOnCanvas = () => {
	let canvas = document.getElementById('myCanvas')
	let context = canvas.getContext('2d')
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

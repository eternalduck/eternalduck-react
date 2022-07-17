import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"//tmp
import {Outlet, Link} from "react-router-dom"
import ContentWidth from "@components/Layout/ContentWidth"
// import Header from "../components/header-footer/Header"
import "./testPage.css"


const TestPage = (props) => {
	const [info, setInfo] = useState({})
	useEffect(() => {
		// drawOnCanvas()

		// const create = (tag, txt, where, cl) => {
		// 	let p = document.createElement(tag)
		// 	let txtNode = document.createTextNode(txt)
		// 	let target = document.getElementById(where)
		// 	p.appendChild(txtNode)
		// 	p.classList.add(cl)
		// 	target.appendChild(p)
		// }
		// const basic = () => {
		// 	let arr = [
		// 		["p", "some letters 1", "subj", "new-p1"],
		// 		["p", "some letters 2", "subj", "new-p2"],
		// 		["p", "some letters 3", "subj", "new-p3"],
		// 	]
		// 	arr.forEach(par => {
		// 		create(...par)
		// 	})
		// }
		// basic()
// Anim 1
	// const element = document.getElementById('subj');
	// let start;
	// function step(timestamp) {
	// 	if (start === undefined)
	// 		start = timestamp;
	// 	const elapsed = timestamp - start;
	//
	// 	element.style.transform = 'translateX(' + Math.min(0.1 * elapsed, 200) + 'px)';
	//
	// 	if (elapsed < 3000) { // Stop the animation after 2 seconds
	// 		window.requestAnimationFrame(step);
	// 	}
	// }
	// window.requestAnimationFrame(step);
// end anim 1

// Anim 2
	// let elem = document.getElementById('subj');
	// let start;
	//
	// function debug(timestamp) {
	//   if (start === undefined)
	//     start = timestamp;
	//   const elapsed = timestamp - start;
	//   let rect = elem.getBoundingClientRect();
	//   document.body.insertAdjacentHTML("beforeBegin",'<i class="d" style="top:'+(rect.y + rect.height/2)+'px;left:'+(rect.x + rect.width/2)+'px;"></i>')
	//
	//   if (elapsed < 3000) {
	//     window.requestAnimationFrame(debug);
	//   }
	// }
// end anim 2

// Get scrollbar width
// 		const getScrollbarWidth = () => {
// 		// Create a temporary div container and append it into the body
// 		const container = document.createElement('div');
// 		// Append the container in the body
// 		document.body.appendChild(container);
// 		// Force scrollbar on the container
// 		container.style.overflow = 'scroll';
//
// 		// Add ad fake div inside the container
// 		const inner = document.createElement('div');
// 		container.appendChild(inner);
//
// 		// Calculate the width based on the container width minus its child width
// 		const width = container.offsetWidth - inner.offsetWidth;
// 		// Remove the container from the body
// 		document.body.removeChild(container);
//
// 		return width;
// 	};
//
// 	// Get the scrollbar dimension
// 	const scrollbarWidth = getScrollbarWidth();
// 	// Set a custom property with the value we calculated
// 	document.documentElement.style.setProperty('--scrollbar', `${scrollbarWidth}px`);
// end get scrollbar width


// Listeners manipulations
	// let block = document.querySelector('.block');
	// let a = () => {
	// 	block.classList.add('block-pulse');
	// 	block.removeEventListener("click", a);
	// }
	// block.addEventListener('click', a);
	// block.addEventListener('animationend', () => {
	// 	block.classList.remove('block-pulse');
	// });
//end listeners manipulations

	// let obj1 = {name: "name1"}
	// let obj2 = obj1
	// obj1.name = {name: "new"}
	// console.log(obj2)


		let a = [1, 2, 3]
		a[100] = 9

		console.log(a.length)
	}, [])//useEffect


	return(
	<>
		{/* <Header/> */}
		{/*<div className={"vw"}>vw!</div>*/}
		<ContentWidth>
			{/*{JSON.stringify(info)}*/}
			{/*<canvas id="myCanvas" width="300" height="150"></canvas>*/}
			<div className={"anim"}>
				<div id={"subj"}>000</div>
			</div>
			{/*<div>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>y<br/>*/}
			{/*</div>*/}
			{/* <div>
				<Outlet/>
			</div> */}
		</ContentWidth>
	</>
	)
}

// const drawOnCanvas = () => {
// 	let canvas = document.getElementById("myCanvas")
// 	let context = canvas.getContext("2d")
// 	let x = canvas.width / 2
// 	let y = canvas.height / 2
// 	let radius = 50
// 	let startAngle = (Math.PI / 180) * -280
// 	let endAngle = 3
// 	context.lineWidth = 15
// 	context.lineCap = "round"
// 	let ctr = -90
// 	const clr = setInterval(function() {
// 		context.clearRect(0, 0, 300, 150) // clear canvas
// 		context.beginPath()
// 		context.arc(x, y, radius, startAngle, (Math.PI / 180) * ctr, false)
// 		context.stroke()
// 		ctr++
// 		if (ctr == endAngle) clearInterval(clr)
// 	}, 10)
// }

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

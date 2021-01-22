import React, {useEffect, useState} from "react"

//TODO: optimize throttle & debounce

const resizeWatcher = (callback) => {
	let delayed = false
	window.addEventListener("resize", function(){
		clearTimeout(delayed)
		delayed = setTimeout(callback, 100)
	})
	//When the component unmounts, it will run any function that you return from inside of your useEffect
	return () => window.removeEventListener("resize", callback)
}

export const isMobile = () => {
	const breakpoint = 750// mdDown: "max-width: 749px"
	const [winWidth, setWinWidth] = useState(window.innerWidth)
	useEffect(() => {
		const handleWindowResize = () => {
			setWinWidth(window.innerWidth)
			console.info(winWidth)
		}
		resizeWatcher(handleWindowResize)
	}, [winWidth])

	const isMob = winWidth < breakpoint
	return {isMob, winWidth}
}

export const isTabletOnly = () => {
	const breakpointMin = 750// mdOnly: "(min-width: 750px) and (max-width: 989px)"
	const breakpointMax = 990
	const [winWidth, setWinWidth] = useState(window.innerWidth)
	useEffect(() => {
		const handleWindowResize = () => {
			setWinWidth(window.innerWidth)
			// console.info(`${breakpointMin} < ${winWidth} < ${breakpointMax}`)
		}
		resizeWatcher(handleWindowResize)
	}, [winWidth])

	const isMDonly = breakpointMin < winWidth && winWidth < breakpointMax
	return {isMDonly, winWidth}
}

export const isDeskLG = () => {
	const breakpoint = 990// lg: "min-width: 990px",
	const [winWidth, setWinWidth] = useState(window.innerWidth)
	useEffect(() => {
		const handleWindowResize = () => {
			setWinWidth(window.innerWidth)
		}
		resizeWatcher(handleWindowResize)
	}, [winWidth])

	const isDeskLG = winWidth > breakpoint
	return {isDeskLG, winWidth}
}

export const isDeskXL = () => {
	const breakpoint = 1200// xl: "min-width: 1200px",
	const [winWidth, setWinWidth] = useState(window.innerWidth)
	useEffect(() => {
		const handleWindowResize = () => {
			setWinWidth(window.innerWidth)
		}
		resizeWatcher(handleWindowResize)
	}, [winWidth])

	const isXL = winWidth > breakpoint
	return {isXL, winWidth}
}

import React, {useEffect, useState} from "react"

//TODO: optimize throttle & debounce

const resizeWatcher = (callback) => {
	let delayed = false
	window.addEventListener("resize", function(){
		clearTimeout(delayed)
		delayed = setTimeout(callback, 100)
	})
	//?
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

export const isTablet = () => {
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

	const isTabl = breakpointMin < winWidth && winWidth < breakpointMax
	return {isTabl, winWidth}
}

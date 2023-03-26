import {useEffect, useState} from "react";
// import {breakpoint} from "../../style/vars-mixins/media";

const resizeWatcher = (callback) => {
	// let delayed = false;
	window.addEventListener("resize", function(){
		const delayed = setTimeout(() => {
			callback();
			clearTimeout(delayed);
		}, 1000);
	});
	// When the component unmounts, it will run any function that you return from inside of your useEffect
	return () => window.removeEventListener("resize", callback);
};

export const isMobile = () => {
	const [winWidth, setWinWidth] = useState(window.innerWidth);
	useEffect(() => {
		const handleWindowResize = () => {
			setWinWidth(window.innerWidth);
		};
		resizeWatcher(handleWindowResize);
	}, [winWidth]);

	const isMob = winWidth < 750;
	return {isMob, winWidth};
};

// export const headerHeight = () => {
// 	const [headHeight, setHeadHeight] = useState()
// 	useEffect(() => {
// 		// const handleWindowResize = () => {
// 			let he = document.getElementById("header")
// 			let h = he ? he.clientHeight : 0
// 			setHeadHeight(h)
// 		// }
// 		// resizeWatcher(handleWindowResize)
// 	}, [])
// 	console.info(`header height (resp.js): ${headHeight}`)
// 	return headHeight
// }

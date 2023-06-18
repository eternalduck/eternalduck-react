// passes elements dimensions, etc to css variables
let root = document.querySelector(":root");
const passVarsToCss = {
	// return {
	// 	headerHeight: () => {
	// 		let header = document.querySelector(".header")
	// 		header ? root.style.setProperty("--headerHeight", header.clientHeight + "px") : false;
	// 		console.info(`header.clientHeight: ${header.clientHeight}`)
	// 	},

		footerHeight: () => {
			// TODO fails due to generated class, use refs or other react shit
			let footer = document.querySelector(".footer")
			footer ? root.style.setProperty("--footerHeight", footer.clientHeight + "px") : false;
			console.info(`footer.clientHeight: ${footer.clientHeight}`)
		}
	// }

	// return {headerHeight, footerHeight}
}

export default passVarsToCss
import {createGlobalStyle} from "styled-components"
import {media} from "../_vars-mixins"

const DebugGlobalStyles = createGlobalStyle`

div[class*=GridContent] {
	outline: 1px dashed magenta;
}

header, footer {
	outline: 1px dashed magenta;
	& nav {
		outline: 1px dashed #ccc;
	}
}

body:before {
	position: fixed;
	top: 5px;
	right: 5px;
	font-size: 18px;
	z-index: 9990;
	text-align: right;
	content: "xs before 500px";
	color: cyan;
	${media.xxsOnly`
		content: "xxs-only - max-width: 400px";
		color: orange;
	`}
	${media.sm`
		content: "SM - min-width: 576px";
		color: fuchsia;
	`}
	${media.md`
		content: "MD - min-width: 750px";
		color: blue;
	`}
	${media.lg`
		content: "LG - min-width: 992px";
		color: lime;
	`}
	${media.xl`
		content: "XL - min-width: 1200px";
		color: red;
	`}
	${media.xxl`
		content: "XXL - min-width: 2200px";
		color: magenta;
	`}
}
`

export default DebugGlobalStyles
import {css} from "styled-components"
import {media} from "../vars-mixins/_index"

const debugStyle = css`
	body:before {
		content: "XS";
		color: yellow;
		position: fixed;
		top: 5px;
		right: 5px;
		font-size: 14px;
		z-index: 999999;
		${media.sm`
			content: "SM (min-width: 576)";
			color: red;
		`}
		${media.md`
			content: "MD (min-width: 750)";
			color: cyan;
		`}
		${media.lg`
			content: "LG (min-width: 990)";
			color: orange;
		`}
		${media.xl`
			content: "XL (min-width: 1200)";
			color: lime;
		`}
		${media.xxl`
			content: "XXL (min-width: 1500)";
			color: magenta;
		`}
	}

`

export default debugStyle

//$bodyTxt: (
//	[0, "XS", black],
//	[576px, "SM (min-width: 576)", red],
//	[750px, "MD (min-width: 750)", cyan],
//	[990px, "LG (min-width: 990)", blue],
//	[1200px, "XL (min-width: 1200)", lime],
//	[1600px, "XXL (min-width: 1600)", magenta],
//);
//
//
//@each $br, $txt, $clr in $bodyTxt {
//	@media (min-width: $br) {
//		body:before {
//			content: $txt;
//			color: $clr;
//		}
//	}
//}

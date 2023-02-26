import {css} from "styled-components";
import {media} from "../vars-mixins/media";

const debugStyle = css`
	body:before {
		content: "XS";
		color: yellow;
		position: fixed;
		top: 5px;
		right: 5px;
		font-size: 14px;
		z-index: 999999;
		@media ${media.sm}{
			content: "SM (min-width: 576)";
			color: red;
		}
		@media ${media.md}{
			content: "MD (min-width: 750)";
			color: cyan;
		}
		@media ${media.lg}{
			content: "LG (min-width: 990)";
			color: orange;
		}
		@media ${media.xl}{
			content: "XL (min-width: 1200)";
			color: lime;
		}
		@media ${media.xxl}{
			content: "XXL (min-width: 1500)";
			color: magenta;
		}
	}

`;

export default debugStyle;

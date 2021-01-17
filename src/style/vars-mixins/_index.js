// Index - TODO: revise:
// 0. Includes
// 1. Mixins
// 1.1 Grid & structure
// 1.2. Helpers
// 1.3 Common Elements

// create a single export point for theming:
import { css } from "styled-components"
import {default as media} from "./_media"
export {default as media} from "./_media"
import {colors} from "./_theme"
export {colors} from "./_theme"

export {dark as dark} from "./_theme"
export {light as light} from "./_theme"
// end export point

export const mixins = {
	// TMP
	testBg: css`
		background: green;
		${media.sm`
			background: ${colors.saturatedPink};
		`}
		${media.lg`
			background: orange;
		`}
		${media.xl`
			background: yellow;
		`}
	`,
	// end TMP
//// 1.1 Grid & structure
	gridContainer: (areas, rows, cols, alignItems, justifyItems) => css`
		display: grid;
		grid-template: "${areas}" 
			${rows || "1fr"} / ${cols || "1fr"};
		place-items: ${alignItems || "center"} ${justifyItems || "center"};
	`,
	contentWidth: css`
		width: 100%;
		//background: yellow;
		${media.sm`
			max-width: 500px;
			// background: orange;
		`}
		${media.md`
			max-width: 720px;
			// background: pink;
		`}
		${media.lg`
			max-width: 940px;
			// background: red;
		`}
		${media.xl`
			max-width: 1100px;
			// background: blue;
		`}
		${media.xxl`
			max-width: 1400px;
			// background: green;
		`}
	`,
	contentWide: css`
		width: 100%;
		padding: 0 15px;
		max-width: 1700px;
		${media.md`
			width: 90%;
			padding: 0;
		`}
		${media.lg`
			width: 96%;
			padding: 0;
		`}
		${media.xxl`
			max-width: 1500px;
		`}
	`,
	flexRow: css`
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		flex-basis: auto;//ie height fix
	`,
//// 1.2 Helpers
	out: (type, clr) => css`
		outline: 1px ${type || "dashed"} ${clr || "red"};
	`,
	centered: css`
		margin-right: auto;
		margin-left: auto;
	`,
//// 1.3 Common Elements
	boxShadowSmall: (clr) => css`
		box-shadow: 0px 0px 14px -5px ${clr || "#333"};
	`,
	boxShadowMid: (clr) => css`
		box-shadow: 1px 1px 30px -5px  ${clr || "#333"};
	`,
	boxShadowBig: (clr) => css`
		box-shadow: 5px 5px 18px 10px ${clr || "#333"};
	`,
	txtShadow: css`
		text-shadow: 1px 1px 2px rgba(0, 0, 0, .5);
	`,
	//added to <a> that should contain a span!
	borderUnderline: css`
		text-decoration: none;
		&:hover {
			text-decoration: none;
		}
		& span, & h1, & h2, & h3, & h4 {
			display: inline;
			transition: border-bottom .1s ease-in;
			border-bottom: 1px solid;
			&:hover {
				border-bottom: 1px solid transparent;
			}
		}
	`,
	//added to a
	borderUnderlineOnHover: css`
		text-decoration: none;
		&:hover {
			text-decoration: none;
		}
		& span, & h1, & h2, & h3, & h4 {
			display: inline;
			border-bottom: 1px solid transparent;
			transition: border-bottom .1s ease-in;
			&:hover {
				border-bottom: 1px solid;
			}
		}
	`,
	noUnderline: css`
		border-bottom: none;
		text-decoration: none;
		&:hover{
			border-bottom: none;
			text-decoration: none;
		}
	`,
	hoverBg: css`
		position: relative;
		// &:hover {
		// 	color: ${colors.white};
		// }
		&:after {
			content: "";
			position: absolute;
			top: -5px;
			right: -8px;
			bottom: -5px;
			left: -8px;
			z-index: -1;
			transform: skewX(-1deg) skewY(-1deg);
			transition: background .1s ease-in;
			opacity: .5;
		}
		&:hover:after {
			background: ${colors.transpTenderPink};
		}
	`,

}//mixins

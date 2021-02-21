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
// 	gridContainer: (areas, rows, cols, alignItems, justifyItems) => css`
// 		display: grid;
// 		grid-template: '${areas}'
// 			${rows || "1fr"} / ${cols || "1fr"};
// 		place-items: ${alignItems || "center"} ${justifyItems || "center"};
// 	`,
	contentWidth: css`
		width: 100%;
		padding: 0 15px;
		margin-right: auto;
		margin-left: auto;
		${media.sm`
			max-width: 500px;
			padding: 0;
		`}
		${media.md`max-width: 720px;`}
		${media.lg`max-width: 940px;`}
		${media.xl`max-width: 1100px;`}
		${media.xxl`max-width: 1400px;`}
	`,
	contentLimitedWidth: css`
		width: 100%;
		padding: 0 15px;
		max-width: 850px;
		margin-right: auto;
		margin-left: auto;
	`,
	contentWide: css`
		width: 100%;
		padding: 0 15px;
		max-width: 1700px;
		margin-right: auto;
		margin-left: auto;
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
	strictContentWidth: css`
		width: 100%;
		padding: 0 15px;
		${media.sm`
			width: 500px;
			padding: 0;
		`}
		${media.md`width: 720px;`}
		${media.lg`width: 940px;`}
		${media.xl`width: 1100px;`}
		${media.xxl`width: 1400px;`}
	`,
	flexCenterContent: css`//used for a container with a single item, usually txt
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	`,
	flexCenterContentVertically: css`//used for a container with a single item, usually txt
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
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
	printHidden: css`
		@media print {display: none;}
	`,
	biggerFont: css`//bigger body font on desk
		font-size: 16px;
		${media.md`
			font-size: 17px;
		`}
		${media.lg`
			font-size: 18px;
		`}
	`,
//// 1.3 Common Elements
	defaultPseudo: (width, height) => css`
		content: "";
		display: block;
		position: absolute;
		width: ${width || "100%"};
		height: ${height || "100%"};
		top: 0;
		left: 0;
	`,
	boxShadowSmall: (clr) => css`
		box-shadow: 0 0 14px -5px ${clr || "#333"};
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
	dashedUnderline: css`
		text-decoration: none;
		&:hover {
			text-decoration: none;
		}
		& span, & h1, & h2, & h3, & h4 {
			display: inline;
			transition: border-bottom .1s ease-in;
			border-bottom: 1px dashed;
			&:hover {
				border-bottom: 1px dashed transparent;
			}
		}
	`,
	//added to <a> that should contain a span!
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
		&:after {
			content: "";
			position: absolute;
			top: -5px;
			right: -8px;
			bottom: -5px;
			left: -8px;
			z-index: -1;
			//transform: skewX(-1deg) skewY(-1deg);
			transition: background .1s ease-in;
			opacity: .5;//additional opacity
		}
		&:hover:after {
			background: ${props => props.theme.menuActiveItemBg};
		}
	`,
	hoverOpacity: css`
		transition: opacity .2s ease-in;
		&:hover {opacity: .9}
	`,

}//mixins

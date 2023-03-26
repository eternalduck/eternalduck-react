import {css} from 'styled-components';
import {media} from "./media";

export const mixins = {
// 1.1 Grid & structure
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
		@media ${media.sm}{
			width: 500px;
		}
		@media ${media.md}{
			width: 700px;
		}
		@media ${media.lg}{
			width: 900px;
		}
		@media ${media.xl}{
			width: 1100px;
		}
		@media ${media.xxl}{
			width: 1300px;
		}
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
		@media ${media.md}{
			width: 90%;
			padding: 0;
		}
		@media ${media.lg}{
			width: 96%;
			padding: 0;
		}
	`,

	// Used for a container with a single item, usually txt
	flexCenterContent: css`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	`,

	// Used for a container with a single item, usually txt
	flexCenterContentVertically: css`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	`,
	flexRow: css`
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
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
	// Added to <a> that should contain a span!
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
	// Added to <a> that should contain a span!
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
			opacity: .5;
		}
		&:hover:after {
			background: ${props => props.theme.menuActiveItemBg};
		}
	`,
	hoverOpacity: css`
		transition: opacity .2s ease-in;
		&:hover {opacity: .9}
	`,

};
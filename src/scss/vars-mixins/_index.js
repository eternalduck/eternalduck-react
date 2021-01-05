import { css } from 'styled-components'
import breakpoints from './_breakpoints'
import colorVars from './_vars'

//make vars exported from here for further convenience
export const colors = colorVars

// Index - TODO: revise:
// 0. Includes
// 1. Vars
// 2. Grid & structure
// 3. Helpers
// 4. Styling

///////////////////////
// 2. Grid & structure
// Dec  30, 2020 (4 Aug, 2020)
export const media = Object.keys(breakpoints).reduce((accumulator, label) => {
	accumulator[label] = (...args) => css`
		@media(${breakpoints[label]}) {
			${css(...args)}
	}`
	return accumulator
}, {})
// Usage:
// ${media.smUp``}


export const mixins = {
	// TMP
	out: (type, clr) => css`
		outline: 1px ${type ? type : "dashed"} ${clr ? clr : "red"};
	`,
	testBg: css`
		background: green;
		${media.smUp`
			background: red;
		`}
		${media.lgUp`
			background: orange;
		`}
		${media.xlUp`
			background: yellow;
		`}
	`,
	// end TMP
	contentWidth: css`
		// padding: 0 15px;//
		//margin-right: auto;
		//margin-left: auto;
		width: 100%;
		//background: yellow;
		${media.smUp`
			max-width: 500px;
			// background: orange;
		`}
		${media.mdUp`
			max-width: 720px;
			// background: pink;
		`}
		${media.lgUp`
			max-width: 940px;
			// background: red;
		`}
		${media.xlUp`
			max-width: 1100px;
			// background: blue;
		`}
		${media.xxlUp`
			max-width: 1400px;
			// background: green;
		`}
	`,
	contentWide: css`
		width: 100%;
		padding: 0 15px;
		max-width: 1200px;
		margin-right: auto;
		margin-left: auto;
		${media.mdUp`
			width: 90%;
			padding: 0;
		`}
	`,
	flexRow: css`
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		flex-basis: auto;//ie height fix
	`,
	///////////////////////
	// 3. Helpers
	centered: css`
		margin-right: auto;
		margin-left: auto;
	`,
	///////////////////////
	// 4. Styling
	boxShadowSmall: (clr) => css`
		box-shadow: 3px 3px 8px 20px ${clr ? clr : "#777"};
	`,
	boxShadowMid: (clr) => css`
		box-shadow: 10px 10px 8px -7px ${clr};
	`,
	txtShadow: css`
		text-shadow: 1px 1px 2px rgba(0, 0, 0, .5);
	`,
	//added to a, it should contain a child txt element!
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
		&:hover {
			color: ${colors.white};
		}
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
			background: ${colors.tenderPinkTransp};
		}
	`,

}//mixins

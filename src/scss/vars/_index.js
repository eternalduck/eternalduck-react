import { css } from 'styled-components'
import breakpoints from './_breakpoints'
import allVars from './_vars'

//make vars exported from here for further convenience
export const vars = allVars

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

// TMP
export const mixinTest = css`
	color: ${vars.pinkSaturated}
`

export const mixinTestBg = css`
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
`
// end TMP

export const mixinContentWidth = css`
	// padding: 0 15px;//
	margin-right: auto;
	margin-left: auto;
	width: 100%;
	background: yellow;
	${media.smUp`
		max-width: 500px;
		background: orange;
	`}
	${media.mdUp`
		max-width: 720px;
		background: pink;
	`}
	${media.lgUp`
		max-width: 940px;
		background: red;
	`}
	${media.xlUp`
		max-width: 1100px;
		background: blue;
	`}
	${media.xxlUp`
		max-width: 1400px;
		background: green;
	`}
`

export const mixinFlexRow = css`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	flex-basis: auto;//ie height fix
`

///////////////////////
// 3. Helpers
export const mixinCentered = css`
	margin-right: auto;
	margin-left: auto;
`
///////////////////////
// 4. Styling
export const mixinBoxShadowSmall = (clr) => {return`
	box-shadow: 3px 3px 8px 20px ${clr};
`}

export const mixinBoxShadowMid = (clr) => {return `
	box-shadow: 10px 10px 8px -7px ${clr};
`}

export const mixinTxtShadow = css`
	text-shadow: 1px 1px 2px rgba(0, 0, 0, .5);
`

//added to a, it should contain a child txt element!
export const mixinBorderUnderline = css`
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
`

	//added to a
export const mixinBorderUnderlineOnHover = css`
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
`

export const mixinNoUnderline = css`
	border-bottom: none;
	text-decoration: none;
	&:hover{
		border-bottom: none;
		text-decoration: none;
	}
`

export const mixinHoverBg = css`
	position: relative;
	&:hover {
		color: ${vars.white};
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
		background: ${vars.tenderPinkTransp};
	}
`

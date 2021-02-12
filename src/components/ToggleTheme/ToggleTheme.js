import React, {useState, useEffect} from "react"
import styled, {css, keyframes} from "styled-components"
import {media, colors, mixins} from "../../style/vars-mixins/_index"
import {Icon, InlineIcon} from "@iconify/react"
import crescentMoon from "@iconify/icons-noto/crescent-moon"
import smilingFaceWithSunglasses from "@iconify/icons-noto/smiling-face-with-sunglasses"
// import brightButton from "@iconify/icons-noto/bright-button"
// import {ThemeContext} from "../../Root"


const ToggleTheme = (props) => {
	const [checked, setChecked] = useState(false)
	const toggle = () => setChecked(prev => !prev)
	return (
		<SwitchWrap htmlFor="theme-switch">
			<IconSC icon={crescentMoon} $shake={!checked}/>
				<Checkbox type="checkbox"
					id="theme-switch"
					onChange={toggle}
					checked={checked}//SwitchWrap
					// FAIL isLightTheme undefined at start
					// checked={isLightTheme ? true : false}
				/>
				<Switch/>
			<IconSC icon={smilingFaceWithSunglasses} $shake={checked}/>
		</SwitchWrap>
	)
}

export default ToggleTheme

const SwitchWrap = styled.label`
	width: 120px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`
const Switch = styled.div`
	position: relative;
	width: 45px;
	height: 24px;
	background-color: ${colors.midGray};
	border-radius: 15px;
	cursor: pointer;
	transition: background-color .3s ease-in;
	&:before {//handle
		content: "";
		display: block;
		position: absolute;
		left: 3px;
		top: 50%;
		margin-top: -10px;
		width: 20px;
		height: 20px;
		border-radius: 10px;
		background-color: ${colors.black3};
		box-shadow: 1px 1px 2px rgba(0, 0, 0, .35);
		transition: transform .3s ease-in, background-color .3s ease-in;
	}
	input:checked + & {//at light theme
		background-color: ${colors.litestGray};
		&:before {
			background-color: ${colors.liteGray};
			transform: translate(18px);
		}
	}
	
`
const Checkbox = styled.input`
	display: none;
`
const shaking = keyframes`
	0% {transform: translateX(0)}
	25% {transform: translateX(1px) rotate(1deg) scale(.97)}
	50% {transform: translateX(0) rotate(0)}
	75% {transform: translateX(-1px) rotate(-1deg)}
	100% {transform: translateX(0) rotate(0) scale(1)}
`
const IconSC = styled(Icon)`
	font-size: 24px;
	transiton: transform .3s ease-in;
	${props => props.$shake ?//$shake is sc transient prop
		css`animation: ${shaking} .3s ease-in;
			animation-iteration-count: 2;`
		: null
	};
`


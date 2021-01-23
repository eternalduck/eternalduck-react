import React from "react"
import styled from "styled-components"
import {media, colors, mixins} from "../../style/vars-mixins/_index"
import {Icon, InlineIcon} from "@iconify/react"
import crescentMoon from "@iconify/icons-noto/crescent-moon"
import smilingFaceWithSunglasses from "@iconify/icons-noto/smiling-face-with-sunglasses"
// import brightButton from "@iconify/icons-noto/bright-button"
// import {ThemeContext} from "../../Root"


const ToggleTheme = (props) => {
	const value = false
	const action = () => {}
	return (
		// <ThemeContext.Consumer>
		// TODO: make this look like a toggle switch, checked = light
			// {({isLightTheme, setLightTheme}) => (
				<SwitchWrap htmlFor="theme-switch">
					<IconSC icon={crescentMoon}/>
						<Checkbox type="checkbox"
							id="theme-switch"
							// onChange={action}
							// checked={value}SwitchWrap
							// checked={isLightTheme ? true : false}// TODO: some fail with undefined at start
						/>
						<Switch/>
					<IconSC icon={smilingFaceWithSunglasses}/>
				</SwitchWrap>
			// )}
		// </ThemeContext.Consumer>
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
	input:checked + & {
		background-color: ${colors.liteGray};
		&:before {
			background-color: ${colors.midGray};
			transform: translate(18px);
		}
	}
	
`
const IconSC = styled(Icon)`
	width: 24px;
	height: 24px;
`

const Checkbox = styled.input`
	display: none;
`

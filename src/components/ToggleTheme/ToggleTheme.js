import React from "react"
import {Icon, InlineIcon} from "@iconify/react"
import crescentMoon from "@iconify/icons-noto/crescent-moon"
import brightButton from "@iconify/icons-noto/bright-button"
// import {ThemeContext} from "../../Root"


const ToggleTheme = (props) => {
	const value = false
	const action = () => {}
	return (
		// <ThemeContext.Consumer>
		// TODO: make this look like a toggle switch, checked = light
			// {({isLightTheme, setLightTheme}) => (
			<label htmlFor="theme-switch" className="toggle">
				<Icon icon={crescentMoon} className={"icon_big"}/>
				IS LIGHT
				<Icon icon={brightButton} className={"icon_big"}/>
				<input type="checkbox"
					id="theme-switch"
					checked={value}
					onChange={action}
					// checked={isLightTheme ? true : false}// TODO: some fail with undefined at start
				/>
			</label>
			// )}
		// </ThemeContext.Consumer>
	)
}

export default ToggleTheme

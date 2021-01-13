import React from "react"
import {Icon, InlineIcon} from "@iconify/react"
import sunSolid from "@iconify/icons-clarity/sun-solid"
import moonSolid from "@iconify/icons-clarity/moon-solid"

import {ThemeContext} from "../../Root"

const ToggleTheme = (props) => {
	return (
		<ThemeContext.Consumer>
			{/*TODO: make this look like a toggle switch, checked = light*/}
			{({isLightTheme, setLightTheme}) => (

			<label htmlFor="theme-switch" className="toggle">
				<Icon icon={moonSolid} className={"icon_big"}/>
				IS LIGHT
				<Icon icon={sunSolid} className={"icon_big"}/>
				<input type="checkbox"
					id="theme-switch"
					checked={isLightTheme ? true : false}// TODO: some fail with undefined at start
					onChange={setLightTheme}
				/>
			</label>
			)}
		</ThemeContext.Consumer>
	)
}

export default ToggleTheme

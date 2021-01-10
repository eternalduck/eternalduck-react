import React, { useState, useEffect } from "react"
import styled, {css, createGlobalStyle, ThemeProvider } from "styled-components"
import {darkTheme, lightTheme} from "../../style/vars-mixins/_index"
import { Icon, InlineIcon } from "@iconify/react"
import sunSolid from "@iconify/icons-clarity/sun-solid"
import moonSolid from "@iconify/icons-clarity/moon-solid"

const ToggleTheme = (props) => {
	useEffect(() => {
		// console.info(useTheme)
	})
	// const [theme, setTheme] = useState(darkTheme)
	//
	// const toggleTheme = () => {
	// 	setTheme((theme) => theme.name === "dark" ? lightTheme : darkTheme)
	// 	console.info(`theme toggled to ${theme.name}!`)
	// }

	return (
		<div style={{color: "#fff"}}>
			{/*TODO: make this look like a toggle switch*/}
			<label htmlFor="theme-switch" className="toggle">
				<Icon icon={moonSolid} className={"icon_big"}/>
				SWITCH!!1
				<Icon icon={sunSolid} className={"icon_big"}/>
				<input type="checkbox"
					id="theme-switch"
					onChange={props.toggleTheme}
					// onChange={props => props.toggleTheme}
				/>
	        </label>
			{/*<p>{`Current theme: ${theme.name}`}</p>*/}
			<GlobalStyle/>
		</div>
	)
}

//TODO: move to main scss
const GlobalStyle = createGlobalStyle`
	.icon_big {
		width: 40px;
		height: 40px;
	}
`

export default ToggleTheme

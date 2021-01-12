import React, { useState, useEffect, createContext, useContext } from "react"
import styled, {css, createGlobalStyle, ThemeProvider, useTheme } from "styled-components"
import {dark, light} from "../../style/vars-mixins/_index"
import { Icon, InlineIcon } from "@iconify/react"
import sunSolid from "@iconify/icons-clarity/sun-solid"
import moonSolid from "@iconify/icons-clarity/moon-solid"

export const ThemeContext = createContext()

const ToggleTheme = (props) => {

	const [darkTheme, setDarkTheme] = useState(getInitialMode())

	function getInitialMode() {
		const isReturningUser = "dark" in localStorage
		const savedTheme = JSON.parse(localStorage.getItem("dark"))
		const userPrefersDark = getPrefs()
		if (isReturningUser) {
			return savedTheme
		} else if (userPrefersDark) {
			return true
		} else {
			return false//light
		}
	}
	function getPrefs() {
		if(!window.matchMedia) return
		return window.matchMedia("(prefers-color-scheme: dark)").matches
	}
	useEffect(() => {
		localStorage.setItem("dark", JSON.stringify(darkTheme))
		// console.info(`initial dark is ${darkTheme}!`)
	}, [darkTheme])

	const toggleTheme = () => {
		setDarkTheme(theme => !theme)
		console.info(`dark is ${darkTheme}!`)
	}

	return (
		<>
			{/*TODO: make this look like a toggle switch, checked = light*/}
			<label htmlFor="theme-switch" className="toggle">
				<Icon icon={moonSolid} className={"icon_big"}/>
				IS DARK
				<Icon icon={sunSolid} className={"icon_big"}/>
				{/*<Icon icon={moonSolid} className={"icon_big"}/>*/}
				{/*<Icon icon={sunSolid} className={"icon_big"}/>*/}
				<input type="checkbox"
					id="theme-switch"
					checked={darkTheme}
					onChange={toggleTheme}
					// onChange={props => props.toggleTheme}
				/>
	        </label>
			{/*<p>{`Current: ${theme.name}`}</p>*/}
			{/*<GlobalStyle/>*/}
		</>
	)
}

// const IconSc = styled(Icon)`
// 	outline: 3px solid red;
// 	width: ${({big}) => big ? "52px" : "32px"};
// 	height: ${(big) => big ? "52px" : "32px"};
// `

export default ToggleTheme

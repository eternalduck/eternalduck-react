import React, { useState, useEffect } from "react"
import styled, {css, useTheme, ThemeProvider } from "styled-components"
import {darkTheme, lightTheme} from "../../scss/vars-mixins/_index"

const ToggleTheme = (props) => {
	useEffect(() => {
		// console.info(sitesList)
	})
	const theme = useTheme()

	  // const [theme, setTheme] = useThemeSwitcher('theme', dark);
	  //
	  // const toggleTheme = () => {
	  //   setTheme(theme.title === 'dark' ? light : dark)
	  // }`

	return (
		<div style={{color: "#fff"}}>
		{`Current theme: ${props.theme}`}
		</div>
	)
}
// style
const bgg = css`
	background: red;//${({ theme }) => theme.bodyBg};
`

export default ToggleTheme

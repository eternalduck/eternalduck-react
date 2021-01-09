import React, { useState, useEffect } from "react"
import styled, {css, useTheme, ThemeProvider } from "styled-components"

const ToggleTheme = (props) => {
	useEffect(() => {
		// console.info(sitesList)
	})
	const theme = useTheme();

	// Current theme state (light/dark);
	  // const [theme, setTheme] = useThemeSwitcher('theme', dark);
	  //
	  // const toggleTheme = () => {
	  //   setTheme(theme.title === 'dark' ? light : dark)
	  // }`

	return (
		<div>
		{console.log('Current theme: ', this.props.theme)}
		</div>
	)
}
// style
const bgg = css`
	background: red;//${({ theme }) => theme.bodyBg};
`

export default ToggleTheme

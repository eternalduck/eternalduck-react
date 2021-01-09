import React from "react"
import Menu from "../Menu/Menu"
import styled from "styled-components"
import ContentWidth from "../Layout/ContentWidth"

// import homeLine from "@iconify/icons-clarity/home-line"
// import iconMedal from "@iconify/icons-openmoji/1st-place-medal"

/* <h1 className={css.title}>{title} <InlineIcon icon={homeLine} className="icon"/></h1>
<Icon icon={aboutIcon} className="icon"/> */

const Header = (props, className) => {
	// Current theme state (light/dark);
  // const [theme, setTheme] = useThemeSwitcher("theme", dark);
  //
  // const toggleTheme = () => {
  //   setTheme(theme.title === "dark" ? light : dark)
  // }
 // <ThemeSwitch toggleTheme={toggleTheme} />
	return (
		<HeaderSC className={className}>
			<ContentWidth>
				<Menu/>
			</ContentWidth>
		</HeaderSC>
	)}
// style
const HeaderSC = styled.div`
	margin-top: 15px;
	margin-bottom: 70px;
	z-index: 100;
`
// style

export default Header

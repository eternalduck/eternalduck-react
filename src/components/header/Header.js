import React from "react"
import Menu from "../Menu/Menu"
import styled from "styled-components"
import ContentWidth from "../Layout/ContentWidth"
import ToggleTheme from "../ToggleTheme/ToggleTheme"

// import homeLine from "@iconify/icons-clarity/home-line"
// import iconMedal from "@iconify/icons-openmoji/1st-place-medal"

/* <h1 className={css.title}>{title} <InlineIcon icon={homeLine} className="icon"/></h1>
<Icon icon={aboutIcon} className="icon"/> */

const Header = (props) => {
	return (
		<HeaderSC className={props.className}>
			<ContentWidth>
				<Menu/>
				<ToggleTheme/>
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

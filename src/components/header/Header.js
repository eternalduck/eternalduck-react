import React from "react"
import Menu from "../Menu/Menu"
import styled from "styled-components"
import ContentWidth from "../Layout/ContentWidth"
// import ToggleTheme from "../ToggleTheme/ToggleTheme"

const Header = (props) => {
	return (
		<HeaderSC>
			<ContentWidth>
				<Menu/>
				{/*<ToggleTheme/>*/}
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

import React from 'react'
import Menu from '../Menu/Menu'
import styled from 'styled-components'
import ContentWidth from '../Layout/ContentWidth'


const Header = (props) => {
	// Current theme state (light/dark);
  // const [theme, setTheme] = useThemeSwitcher('theme', dark);
  //
  // const toggleTheme = () => {
  //   setTheme(theme.title === 'dark' ? light : dark)
  // }
 // <ThemeSwitch toggleTheme={toggleTheme} />
	return (
		<HeaderSC>
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

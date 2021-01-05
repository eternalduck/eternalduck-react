import React from 'react'
import Menu from '../Menu/Menu'
import styled from 'styled-components'

// import css from '../../scss/main.scss'
// import cssH from './header.scss'

const Header = (props) => {
	return (
	// <header className={`
	// 	${cssH.header}
	// 	${props.headerColor === 'dark' ? cssH.dark : ''}
	// `}>
		<HeaderSC>
			<Menu/>
		</HeaderSC>
	// </header>
	)}
// style
const HeaderSC = styled.div`
	margin-top: 15px;
	margin-bottom: 70px;
	z-index: 100;
`
// style

export default Header

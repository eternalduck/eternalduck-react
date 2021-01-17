import React, {useEffect, useState, useRef} from "react"
import {NavLink} from "react-router-dom"
import styled from "styled-components"
import {mixins, media} from "../../style/vars-mixins/_index"
import {Icon} from "@iconify/react"
import hamburgerIcon from "@iconify/icons-openmoji/hamburger"
import {menuItems} from "../data/menuItems"


const GenerateMenu = (props) => {
	return (
		<>
		{menuItems.map(item => (
			<NavLink key={item.id}
				to={item.url}
				exact={true}
				// id={item.id}
			>
				{item.txt}
			</NavLink>
		))}
		</>
	)
}

export const Menu = (props) => {
	return (
		<MenuSc>
			<GenerateMenu/>
		</MenuSc>
	)
}//Menu


export const MobMenu = (props) => {
	const [isMenuVisible, setMenuVisible] = useState(false)

	const toggleMobMenu = () => {
		setMenuVisible(prev => !prev)
		console.log("toggleMobMenu: ")
	}
	return (
		<>
		<MobMenuToggle icon={hamburgerIcon} onClick={toggleMobMenu}/>
		<MenuMob visible={isMenuVisible}>
			<GenerateMenu/>
		</MenuMob>
		</>
	)
}//Menu


const MobMenuToggle = styled(Icon)`
	width: 60px;
	height: 60px;
	outline: 1px solid red;
	// ${media.md`display: none`}
`

const MenuSc = styled.nav`
	//position: absolute;
	// ${media.md`
	// 	position: relative;
	// `}
	a {
		font-family: "Courier New", monospace;
		color: ${props => props.theme.linkClr};//TODO depending on page bg
		position: relative;
		margin: 0 30px 50px 0;
		padding-bottom: 5px;
		font-weight: 600;
		font-size: 2rem;
		text-decoration: none;
		z-index: 1;
		transition: color 0.3s ease-in;
		${mixins.noUnderline};
		${mixins.hoverBg};
		&.active {
			cursor: default;
			pointer-events: none;
			// &:after, &:hover:after {
			// 	background: ${props => props.theme.tenderPinkTransp};
			// }
		}
		// header.dark & {
		// 	color: ${props => props.theme.vioDark};
		// }
	}
`
const MenuMob = styled(MenuSc)`
	outline: 3px dashed blueviolet;
	display: ${props => props.visible ? "block" : "none"};

`

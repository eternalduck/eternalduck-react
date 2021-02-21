import React, {useEffect, useState, useRef} from "react"
import {NavLink} from "react-router-dom"
import styled, {createGlobalStyle} from "styled-components"
import {colors, mixins, media} from "../../style/vars-mixins/_index"
import {Icon} from "@iconify/react"
import hamburgerIcon from "@iconify/icons-openmoji/hamburger"
import {menuItems} from "../data/menuItems"


const MenuItems = (props) => {
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
			<MenuItems/>
			<Logo/>
		</MenuSc>
	)
}//Menu


export const MobMenu = (props) => {
	const [isMenuVisible, setMenuVisible] = useState(false)

	const toggleMobMenu = () => {
		setMenuVisible(prev => !prev)
	}
	return (
		<>
		<MobMenuToggle icon={hamburgerIcon} onClick={toggleMobMenu}/>
		<MenuMob visible={isMenuVisible}>
			<MenuItems/>
			<Logo/>
		</MenuMob>
		</>
	)
}//Menu
const Logo = createGlobalStyle`
	.logo {
		background: url("/images/logo-sprite.png") 0 0 no-repeat;
		background-size: 100%;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		${mixins.boxShadowMid()};
		&:hover {
			background-position: 0 -60px;
		}
	}
`

const MenuSc = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	${media.md`
		flex-flow: row nowrap;
	`}
	a {//item
		position: relative;
		margin-bottom: 30px;
		color: ${props => props.theme.linkClr};
		font-family: "Courier New", monospace;
		font-weight: bold;
		font-size: 24px;
		text-decoration: none;
		z-index: 1;
		transition: color 0.3s ease-in;
		${mixins.noUnderline};
		${mixins.hoverBg};
		${media.md`
			margin-right: 45px;
			margin-bottom: 0;
		`}
		&.active {
			cursor: default;
			pointer-events: none;
			&:after {
				background: ${props => props.theme.menuActiveItemBg};
			}
		}
		//hide logo item bg
		&:first-child.active:after,
		&:first-child:hover:after {display: none;}
	}
`

const MobMenuToggle = styled(Icon)`
	position: relative;
	width: 60px;
	height: 60px;
	z-index: 200;
	margin-left: -20px;//compensate svg padding
`
const MenuMob = styled(MenuSc)`
	display: ${props => props.visible ? "flex" : "none"};
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	padding: 25px 0 5px;
	background-color: ${props => props.theme.mobMenuBg};
	z-index: 100;

`

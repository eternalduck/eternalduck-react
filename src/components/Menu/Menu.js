import React, {useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {media} from "../../style/vars-mixins/media";
import {mixins} from "../../style/vars-mixins/mixins";
import {Icon} from "@iconify/react";
import hamburgerIcon from "@iconify/icons-openmoji/hamburger";
import multiplyIcon from "@iconify/icons-openmoji/multiply";
import {menuItems} from "../../data/menuItems";

const MenuItems = () => {
	return (
		<>
		{menuItems.map(item => (
			<Link key={item.id} to={item.url}>
				{item.txt}
			</Link>
		))}
		</>
	);
};

export const Menu = () => {
	return (
		<MenuSc>
			<MenuItems/>
		</MenuSc>
	);
};//Menu


export const MobMenu = () => {
	const [isMenuVisible, setMenuVisible] = useState(false);

	const toggleMobMenu = () => {
		setMenuVisible(prev => !prev);
	};
	return (
		<>
			<MobMenuToggle onClick={toggleMobMenu}>
				{isMenuVisible
					? <Icon icon={multiplyIcon}/>
					: <Icon icon={hamburgerIcon}/>
				}
			</MobMenuToggle>
		<MenuMob visible={isMenuVisible} onClick={toggleMobMenu}>
			<MenuItems/>
		</MenuMob>
		</>
	);
};//Menu

const MenuSc = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	@media ${media.md}{
		flex-flow: row nowrap;
	};
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
		@media ${media.md}{
			margin-right: 45px;
			margin-bottom: 0;
		};
		&.active {
			cursor: default;
			pointer-events: none;
			&:after {
				background: ${props => props.theme.menuActiveItemBg};
			}
		}
	}
`;
const MenuMob = styled(MenuSc)`
	transform: ${props => props.visible ? "translateY(0)" : "translateY(-100%)"};
	transition: transform .3s ease-in;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	padding: 25px 0 5px;
	background-color: ${props => props.theme.mobMenuBg};
	z-index: 200;
`;
const MobMenuToggle = styled.div`
	position: relative;
	cursor: pointer;
	z-index: 300;
	& svg {
		font-size: 46px;
	}
`;

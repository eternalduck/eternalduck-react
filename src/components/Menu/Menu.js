import React, {useState} from "react";
import styles from "./Menu.module.scss"
import {Link} from "react-router-dom";
import {Icon} from "@iconify/react";
import hamburgerIcon from "@iconify/icons-openmoji/hamburger";
import multiplyIcon from "@iconify/icons-openmoji/multiply";
import {menuItems} from "../../data/menuItems";

const MenuItems = () => {
	return (
		<>
		{menuItems.map(item => (
			<Link className={styles.menu__item} key={item.id} to={item.url}>
				{item.txt}
			</Link>
		))}
		</>
	);
};

export const Menu = () => {
	return (
		<nav className={styles.menu}>
			<MenuItems/>
		</nav>
	);
};

export const MobMenu = () => {
	const [isMenuVisible, setMenuVisible] = useState(false);

	const toggleMobMenu = () => {
		setMenuVisible(prev => !prev);
	};
	return (
		<>
			<div className={styles.menu__toggle} onClick={toggleMobMenu}>
				{isMenuVisible
					? <Icon icon={multiplyIcon}/>
					: <Icon icon={hamburgerIcon}/>
				}
			</div>
		<nav className={styles.menu} visible={isMenuVisible} onClick={toggleMobMenu}>
			<MenuItems/>
		</nav>
		</>
	);
};


import React from "react";
import {Link} from "react-router-dom";
import styles from "./Header.module.scss";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import {Menu, MobMenu} from "../Menu/Menu";
import {isMobile} from "../helpers/responsive";

const Header = (props) => {
	const {isMob} = isMobile();
	// console.info(`header isMob: ${isMob}`);
	return (
		<header className={styles.header}>
			<div className={styles.header__inner}>
				{props.isFront ?
					<div className={styles.header__logo}></div> :
					<Link to={"/"}>
						<div className={styles.header__logo}></div>
					</Link>}
				<div className={styles.header__menuWrap}>
					{isMob ? <MobMenu/> : <Menu/>}
				</div>
				{props.children &&
					<div className={styles.header__extra}>{props.children}</div>
				}
				{!props.isFront &&
					<div className={styles.header__themeToggleWrap}>
						<ToggleTheme/>
					</div>
				}
			</div>
		</header>
	);
};

export default Header;

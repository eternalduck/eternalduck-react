import React, {forwardRef} from "react";
import {Link} from "react-router-dom";
import styles from "./Header.module.scss";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import {Menu, MobMenu} from "../Menu/Menu";
import {isMobile} from "../helpers/responsive";

const Header = forwardRef((props, ref) => {
	const {isMob} = isMobile();
	console.info(`header isMob: ${isMob}`);
	return (
		<header className={styles.header} ref={ref}>
			<div className={styles.header__inner + " content-width"}>
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
});
// for forwardRef:
// Another option is to just disable that particular linter, using a comment with this or similar just above the declaration of your component:
// "eslint-disable-next-line react/display-name"
Header.displayName = "Header";

export default Header;

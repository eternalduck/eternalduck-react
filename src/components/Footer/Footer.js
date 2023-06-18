import React, {useEffect} from "react";
// import passVarsToCss from "../helpers/passVarsToCss";
import styles from "./Footer.module.scss";

const Footer = (props) => {
	// useEffect(() => {
		// passVarsToCss.footerHeight();
	// },[]);

	return (
		<footer className={styles.footer}>
			<div className={styles.footer__inner}>

			</div>
			{/* GTM here */}
		</footer>
	);
};

export default Footer;

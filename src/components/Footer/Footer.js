import React, {forwardRef} from "react";
import styles from "./Footer.module.scss";

const Footer = forwardRef((props, ref) => {
	return (
		<footer className={styles.footer} ref={ref}>
			<div className={styles.footer__inner}>

			</div>
			{/* GTM here */}
		</footer>
	);
});
// for forwardRef:
// Another option is to just disable that particular linter, using a comment with this or similar just above the declaration of your component:
// "eslint-disable-next-line react/display-name"
Footer.displayName = "Footer";

export default Footer;

import React, {forwardRef} from "react";
// import styled from "styled-components";
// import ContentWidth from "../layout/ContentWidth";

const Footer = forwardRef((props, ref) => {
	return (
		<footer ref={ref}>
			{/* GTM here */}
		</footer>
	);
});
// for forwardRef:
// Another option is to just disable that particular linter, using a comment with this or similar just above the declaration of your component:
// "eslint-disable-next-line react/display-name"
Footer.displayName = "Footer";

// const FooterSc = styled.footer`
// 	margin: 40px 0 0;
// `;
// const FooterInner = styled.div`
// 	padding: 15px 0;
// `;

export default Footer;

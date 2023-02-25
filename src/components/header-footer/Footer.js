import React, {forwardRef} from "react";
import styled from "styled-components";
import ContentWidth from "../Layout/ContentWidth";

const Footer = forwardRef((props, ref) => {
	return (
		<FooterSc ref={ref}>
			<ContentWidth>
			<FooterInner>
				<p>...footer</p>
				{/* GTM here */}
			</FooterInner>
			</ContentWidth>
		</FooterSc>
	);
});
// for forwardRef:
// Another option is to just disable that particular linter, using a comment with this or similar just above the declaration of your component:
// "eslint-disable-next-line react/display-name"
Footer.displayName = "Footer";

const FooterSc = styled.footer`
	margin: 40px 0 0;
	/* outline: 2px dashed red */
`;
const FooterInner = styled.div`
	padding: 15px 0;
`;

export default Footer;

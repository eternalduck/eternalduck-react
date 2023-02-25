import React from "react";
import styled from "styled-components";

import {mixins, media} from "../../style/vars-mixins/_index";

const ContentWide = (props) => {
	return (
		<Container>
			<Content>
				{props.children}
			</Content>
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	position: relative;
`;
const Content = styled.div`
	${mixins.contentWide}
`;
export default ContentWide;

import React from "react";
import styled from "styled-components";
import {mixins} from "../../style/vars-mixins/_mixins";

const ContentWidth = (props) => {
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
	${mixins.contentWidth}
`;

export default ContentWidth;

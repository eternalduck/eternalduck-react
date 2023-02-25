import React from "react";
import styled from "styled-components";
import {mixins} from "../../style/vars-mixins/_mixins";

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

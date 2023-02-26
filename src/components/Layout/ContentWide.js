import React from "react";
import styled from "styled-components";
import {mixins} from "../../style/vars-mixins/mixins";

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
`;
const Content = styled.div`
	${mixins.contentWide}
`;
export default ContentWide;

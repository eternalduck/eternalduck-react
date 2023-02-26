import React from "react";
import styled from "styled-components";

const ContentFullWidth = (props) => {
	return (
		<Content>
			{props.children}
		</Content>
	);
};

const Content = styled.div`
	width: 100%;
	padding: 0 30px;
`;

export default ContentFullWidth;

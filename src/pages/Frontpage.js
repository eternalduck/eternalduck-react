import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Frontpage = (props, theme) => {
	// useEffect(() => {
	// 	document.body.className = "frontpage"
	// })
	return(
		<FrontpageSC/>
	);
};

const FrontpageSC = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background: url("/images/index-table.png") center bottom/cover no-repeat;
`;

export default Frontpage;

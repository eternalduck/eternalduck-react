import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import {colors} from "@style/vars-mixins/_index";
import {media} from "@style/vars-mixins/_media";

const Frontpage = (props, theme) => {
	// useEffect(() => {
	// 	document.body.className = "FRONT-TMP"
	// })
	//TODO make random song search
	//https://medium.com/@perryjanssen/getting-random-tracks-using-the-spotify-api-61889b0c0c27
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

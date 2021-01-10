import React from "react"
// import ReactDOM from "react-dom"
import styled from "styled-components"

import {mixins, media} from "../../style/vars-mixins/_index"

const ContentFullWidth = (props) => {
	return (
		// <Container bg={props.bg}>
			<Content bg={props.bg}>
				{props.children}
			</Content>
		// </Container>
	)
}

// const Container = styled.div`
// 	background: ${props => props.bg}
// `
const Content = styled.div`
	${mixins.out("solid", "lime")}
	background: ${props => props.bg}
	width: 100%;
	padding: 0 30px
`

export default ContentFullWidth

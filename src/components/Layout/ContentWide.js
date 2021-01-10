import React from "react"
// import ReactDOM from "react-dom"
import styled from "styled-components"
// import styled, { ThemeProvider } from "styled-components"
import {darkTheme, lightTheme} from "../../style/vars-mixins/_index"

import {mixins, media} from "../../style/vars-mixins/_index"

const ContentWide = (props) => {
	return (
		// <ThemeProvider theme={darkTheme}>
		<Container bg={props.bg}>
			<Content>
				{props.children}
			</Content>
		</Container>
		// </ThemeProvider>
	)
}

const Container = styled.div`
	background: ${props => props.bg}
`

const Content = styled.div`
	// ${mixins.out("solid", "orange")}
	${mixins.contentWide}
	${mixins.centered}
`
export default ContentWide

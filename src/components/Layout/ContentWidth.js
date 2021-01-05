import React from 'react'
// import ReactDOM from 'react-dom'
import styled from 'styled-components'

import {mixins} from '../../scss/vars-mixins/_index'

const ContentWidth = (props) => {
	return (
		<Container bg={props.bg}>
			<Content>
				{props.children}
			</Content>
		</Container>
	)
}

const Container = styled.div`
	background: ${props => props.bg};
	width: 100%;
	display: grid;
	grid-template: ". content ." 1fr / 15px 1fr 15px;
	justify-items: center;
	align-items: center;
`
const Content = styled.div`
	${mixins.contentWidth};
	grid-area: content;
`

export default ContentWidth

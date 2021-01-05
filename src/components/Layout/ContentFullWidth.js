import React from 'react'
// import ReactDOM from 'react-dom'
import styled from 'styled-components'

import {mixins, media} from '../../scss/vars-mixins/_index'

const ContentFullWidth = (props) => {
	return (
		<Content bg={props.bg}>
			{props.children}
		</Content>
	)
}

const Content = styled.div`
	background: ${props => props.bg};
	width: 100%;
	padding: 0 30px;
`

export default ContentFullWidth

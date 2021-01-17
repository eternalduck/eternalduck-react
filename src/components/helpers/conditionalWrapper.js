import React, {useEffect, useState} from "react"

export const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children


//usage:

// <ConditionalWrapper
// 	condition={props.item.hasSinglePage}
// 	wrapper={children =>
// 		<Link to={`${props.match}/${props.item.slug}`}>
// 			{children}
// 		</Link>}
// 	>
// 	<Title>{props.item.title}</Title>
// </ConditionalWrapper>

import React from 'react'
import ReactDOM from 'react-dom'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams
} from "react-router-dom"

// import SingleSite from '../SingleSite/SingleSite'

const WorkItem = (props) => {
	let match = useRouteMatch()
	return (
		<>
		<div className="workItem">
			<div className="workItem__inner">
				<Link
					to={`${props.match}/${props.item.slug}`}
					style={{display: "block"}}
				>
					<h4>{props.item.title}</h4>
				</Link>

				{/*<Link to={`${props.match}/${props.item.slug}`}*/}
					<img
						src={props.item.thumb}
						alt=""
						style={{width: 150}}
					/>
				{/*</Link>*/}

				{/*<p className="workItem__keywords">*/}
				{/*	{props.item.keywords}*/}
				{/*</p>*/}
			</div>
		</div>
		</>
	)
}
export default WorkItem


//@import "../../scss/vars/index";
//
//.workItem {
//	max-width: 400px;
//	width: 90%;
//	padding: 10px 20px;
//	margin: 0 auto 40px;
//	background: $almostWhite;
//	@include boxShadowMid($blueDarkest);
//	transform: skewY(-1deg);
//	@include breakUp("md") {
//		min-height: 470px;
//		width: 48%;
//		margin: 0 0 50px;
//	}
//	@include breakUp("lg") {
//		width: 45%;
//		min-height: 420px;
//		padding: 15px 20px;
//	}
//	@include breakUp("xl") {
//		width: 31%;
//		min-height: 440px;
//	}
//	&__inner {
//		transform: skewY(1deg);//align content back
//	}
//	& a {
//		display: block;
//		margin: 15px 0;
//		color: $almostBlack;
//		text-align: right;
//		@include borderUnderlineOnHover;
//		@include breakUp("lg") {
//			min-height: 60px;
//			margin: 20px 0 15px;
//		}
//	}
//
//	&__keywords {
//		margin: 15px 0;
//		color: $blueVioLite;
//		text-align: center;
//	}
//	&__imgWrap {//link
//		display: block;
//		height: 250px;
//		overflow: hidden;//?
//		transform:  skewY(-1deg);
//		//@include noUnderline;
//		@include boxShadowSmall($blueDarkest);
//		@include breakUp("md") {
//			height: 300px;
//		}
//		@include breakUp("lg") {
//			height: 350px;
//		}
//		& img {
//			// object-fit: cover;
//			max-width: 100%;
//			transition: opacity .2s ease-in;
//			&:hover {
//				opacity: .9;
//			}
//		}//img
//	}//img-wrap
//	& img {//tmp
//		max-width: 100%;
//	}
//}//workItem

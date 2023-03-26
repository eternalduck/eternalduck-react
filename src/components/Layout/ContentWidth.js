import React from "react";

const ContentWidth = (props) => {
	return (
		<section>
			<div className={"content-width"}>
				{props.children}
			</div>
		</section>
	);
};


export default ContentWidth;

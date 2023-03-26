import React from "react";

const ContentWide = (props) => {
	return (
		<section>
			<div className={"content-wide"}>
				{props.children}
			</div>
		</section>
	);
};

export default ContentWide;

import React, { useState, useEffect } from "react";
import styles from "./Frontpage.module.scss";

const Frontpage = (props, theme) => {
	// useEffect(() => {
	// 	document.body.className = "frontpage"
	// })
	return(
		<section className={styles.frontpage}></section>
	);
};

export default Frontpage;

import React, { useState, useEffect } from "react";
import styles from "./CvPage.module.scss";

const CvPage = (props) => {
	// const [data, setData] = useState(cvTxt)
	// const switchLang = () => setData(lang => lang.lang === "en" ? cvTxtRu : cvTxt)
	// const [isLastJobsShown, setIsLastJobsShown] = useState(false)
	return(
		<section className={styles.cvPage}>
			<iframe src="/files/cv-2023.pdf"/>
		</section>
	);
};

export default CvPage;

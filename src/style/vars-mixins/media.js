export const breakpoint = {
	sm: 576,
	md: 750,
	lg: 990,
	xl: 1200,
	xxl: 1500
};

export const media = {
	sm: `(min-width: ${breakpoint.sm}px)`,
	md: `(min-width: ${breakpoint.md}px)`,
	lg: `(min-width: ${breakpoint.lg}px)`,
	xl: `(min-width: ${breakpoint.xl}px)`,
	xxl: `(min-width: ${breakpoint.xxl}px)`,
	smOnly: `(max-width: ${breakpoint.md}px)`,
	mdOnly: `(min-width: ${breakpoint.md}px) and (max-width: ${breakpoint.lg}px)`,
	lgOnly: `(min-width: ${breakpoint.lg}px) and (max-width: ${breakpoint.xl}px)`,
	xlOnly: `(min-width: ${breakpoint.xl}px) and (max-width: ${breakpoint.xxl}px)`,
	xxlOnly: `(min-width: ${breakpoint.xxl}px)`
};

// Dec  30, 2020 (4 Aug, 2020)
// Usage:
// ${media.sm``}
// import { css } from 'styled-components';
// const breakpoints = {
// 	sm: "min-width: 576px",
// 	md: "min-width: 750px",
// 	lg: "min-width: 990px",
// 	xl: "min-width: 1200px",
// 	xxl: "min-width: 1500px",

// 	xsDown: "max-width: 575px",
// 	smDown: "max-width: 749px",
// 	mdDown: "max-width: 989px",
// 	lgDown: "max-width: 1199px",
// 	xlDown: "max-width: 1499px",

// 	xxsOnly: "max-width: 575px",
// 	xsOnly: "max-width: 575px",
// 	smOnly: "(min-width: 576px) and (max-width: 749px)",
// 	mdOnly: "(min-width: 750px) and (max-width: 989px)",
// 	lgOnly: "(min-width: 991px) and (max-width: 1199px)",
// 	xlOnly: "(min-width: 1200px) and (max-width: 1499px)",
// };

// export default Object.keys(breakpoint).reduce((accumulator, label) => {
// 	accumulator[label] = (...args) => css`
// 		@media(${breakpoint[label]}) {
// 			${css(...args)}
// 	}`;
// 	return accumulator;
// }, {});


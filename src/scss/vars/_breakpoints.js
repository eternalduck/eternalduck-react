import { css } from 'styled-components'

const breakpoints = {
	xxsOnly: "max-width: 400px",
	smOnly: "(min-width: 576px) and (max-width: 749px)",
	mdOnly: "(min-width: 750px) and (max-width: 989px)",
	lgOnly: "(min-width: 991px) and (max-width: 1199px)",
	xlOnly: "(min-width: 1200px) and (max-width: 1599px)",

	smDown: "max-width: 575px",
	mdDown: "max-width: 749px",
	lgDown: "max-width: 989px",
	xlDown: "max-width: 1199px",

	smUp: "min-width: 576px",
	mdUp: "min-width: 750px",
	lgUp: "min-width: 990px",
	xlUp: "min-width: 1200px",
	xxlUp: "min-width: 1600px"
}
export default breakpoints

// export const breakpoints = {
// 	// min-width
// 	"print": "print",
// 	"xs": "500px",//no need?
// 	"sm": "576px",
// 	"md": "750px",
// 	"lg": "992px",
// 	"xl": "1200px",
// 	"xxl": "1600px"
// }
//
// export const breakDownPoints = {
// 	//max-width
// 	"xs": "575px",
// 	"sm": "749px",
// 	"md": "991px",
// 	"lg": "1199px",
// }
//
// export const breakOnlyPoints = {
// 	"xxs": "(max-width: 400px)",
// 	"sm": "(min-width: 576px) and (max-width: 749px)",
// 	"md": "(min-width: 750px) and (max-width: 991px)",
// 	"lg": "(min-width: 992px) and (max-width: 1199px)",
// 	"xl": "(min-width: 1200px) and (max-width: 1599px)",
// 	"xxl": "(min-width: 1px)"
// }

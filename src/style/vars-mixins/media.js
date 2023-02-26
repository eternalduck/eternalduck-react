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

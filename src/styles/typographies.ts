import { css } from "styled-components"
import typefaces from "./typefaces"
import colors from "./colors"
import { RuleSet, Styles } from "styled-components/dist/types"

const code = css`
	font-family: ${typefaces.code};
	letter-spacing: -1px;
`

const navigationBar = {
	fontFamily: typefaces.navigationBar,
	textDecoration: "none",
	fontWeight: "500",
	fontSize: "1rem",
	color: colors.hardBlack.hsl().string(),
}

const navigationBarActive = {
	color: colors.neonPurple.hsl().string(),
}

const tech = {
	fontFamily: "'OCR', sans-serif",
	fontWeight: "400",
	fontSize: "0.8rem",
}

interface ITypographies {
	[key: string]: Styles<object>
}

const typographies: ITypographies = {
	code: code as Styles<object>,
	navigationBar,
	navigationBarActive,
	tech,
}

export default typographies

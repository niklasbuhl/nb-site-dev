import { css } from "styled-components"
import typefaces from "./typefaces"
import colors from "./colors"

const code = css`
	font-family: ${typefaces.code};
	letter-spacing: -1px;
`

const navigationBar = {
	fontFamily: typefaces.navigationBar,
	textDecoration: "none",
	fontWeight: "500",
	fontSize: "1rem",
	color: colors.black.hsl().string(),
}

const navigationBarActive = {
	color: colors.purple.hsl().string(),
}

const tech = {
	fontFamily: "'OCR', sans-serif",
	fontWeight: "400",
	fontSize: "0.8rem",
}

const typographies = {
	code,
	navigationBar,
	navigationBarActive,
	tech,
}

export default typographies

import { styled } from "styled-components"
import { NavLinkStyle } from "../navLink/navLink.styles"
import { Link } from "gatsby"
import { Styles } from "styled-components/dist/types"

interface ILogoGraphic {
	typography: Styles<object>
}

const LogoGraphic = styled(Link)<ILogoGraphic>`
	${NavLinkStyle}
	overflow: hidden;

	// Typography
	${(p) => p.typography}

	&::before {
		content: "N";
	}
`

export default LogoGraphic
